import { useEffect, useState } from "react";
import { supabase } from "../supabase";

interface Transaction {
	id: string;
	date: string;
	description: string;
	type: string;
	amount: number;
}

interface Payment {
	id: string;
	date: string;
	amount: number;
	credits: number;
	status: string;
}

function TransactionTable() {
	const [activeView, setActiveView] = useState<"transaction" | "payment">(
		"transaction",
	);
	const [transactions, setTransactions] = useState<Transaction[]>([]);
	const [payments, setPayments] = useState<Payment[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			setError(null);

			const {
				data: { session },
			} = await supabase.auth.getSession();

			if (!session?.user?.id) {
				setError("Belum login");
				setLoading(false);
				return;
			}

			const [transactionsResult, paymentsResult] = await Promise.all([
				supabase
					.from("transactions")
					.select("id, date, description, type, amount")
					.eq("user_id", session.user.id)
					.order("date", { ascending: false }),
				supabase
					.from("payments")
					.select("id, date, amount, credits, status")
					.eq("user_id", session.user.id)
					.order("date", { ascending: false }),
			]);

			// ✅ Simplified error check (cukup tampilkan text aja)
			if (transactionsResult.error || paymentsResult.error) {
				setError("Gagal ambil data");
				setLoading(false);
				return;
			}

			setTransactions(transactionsResult.data || []);
			setPayments(paymentsResult.data || []);
			setLoading(false);
		};

		fetchData();
	}, []);

	const formatCurrency = (amount: number): string => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(amount);
	};

	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			month: "numeric",
			day: "numeric",
			year: "numeric",
		});
	};

	const renderTransactionTable = () => {
		if (loading) {
			return (
				<div className="min-w-full border border-gray-300 p-8 text-center">
					<div className="animate-pulse">Loading....</div>
				</div>
			);
		}

		if (error) {
			return (
				<div className="min-w-full border border-gray-300 p-8 text-center text-red-600">
					{error}
				</div>
			);
		}

		if (transactions.length === 0) {
			return (
				<div className="min-w-full border border-gray-300 p-8 text-center text-gray-500">
					No transactions found
				</div>
			);
		}

		return (
			<table className="min-w-full border border-gray-300">
				<thead>
					<tr>
						<th className="px-4 py-2 border-b text-center">Date</th>
						<th className="px-4 py-2 border-b text-center">Description</th>
						<th className="px-4 py-2 border-b text-center">Type</th>
						<th className="px-4 py-2 border-b text-center">Amount</th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => (
						<tr key={transaction.id}>
							<td className="px-4 py-2 border-b text-center">
								{formatDate(transaction.date)}
							</td>
							<td className="px-4 py-2 border-b text-center">
								{transaction.description}
							</td>
							<td className="px-4 py-2 border-b text-center">
								{transaction.type}
							</td>
							<td className="px-4 py-2 border-b text-center">
								{formatCurrency(transaction.amount)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	};

	const renderPaymentTable = () => {
		if (loading) {
			return (
				<div className="min-w-full border border-gray-300 p-8 text-center">
					<div className="animate-pulse">Loading....</div>
				</div>
			);
		}

		if (error) {
			return (
				<div className="min-w-full border border-gray-300 p-8 text-center text-red-600">
					{error}
				</div>
			);
		}

		if (payments.length === 0) {
			return (
				<div className="min-w-full border border-gray-300 p-8 text-center text-gray-500">
					No payments found
				</div>
			);
		}

		return (
			<table className="min-w-full border border-gray-300">
				<thead>
					<tr>
						<th className="px-4 py-2 border-b text-center">Date</th>
						<th className="px-4 py-2 border-b text-center">Amount</th>
						<th className="px-4 py-2 border-b text-center">Credits</th>
						<th className="px-4 py-2 border-b text-center">Status</th>
						<th className="px-4 py-2 border-b text-center">Actions</th>
					</tr>
				</thead>
				<tbody>
					{payments.map((payment) => (
						<tr key={payment.id}>
							<td className="px-4 py-2 border-b text-center">
								{formatDate(payment.date)}
							</td>
							<td className="px-4 py-2 border-b text-center">
								{formatCurrency(payment.amount)}
							</td>
							<td className="px-4 py-2 border-b text-center">
								{payment.credits.toLocaleString()}
							</td>
							<td className="px-4 py-2 border-b text-center">
								<span
									className={`px-2 py-1 rounded text-sm ${
										payment.status === "completed"
											? "bg-green-100 text-green-800"
											: payment.status === "pending"
												? "bg-yellow-100 text-yellow-800"
												: payment.status === "failed"
													? "bg-red-100 text-red-800"
													: "bg-gray-100 text-gray-800"
									}`}
								>
									{payment.status.charAt(0).toUpperCase() +
										payment.status.slice(1)}
								</span>
							</td>
							<td className="px-4 py-2 border-b text-center">
								{payment.status === "completed" ? (
									<button
										type="button"
										className="text-blue-600 hover:text-blue-800 text-sm"
									>
										View Receipt
									</button>
								) : payment.status === "pending" ? (
									<button
										type="button"
										className="text-red-600 hover:text-red-800 text-sm"
									>
										Cancel
									</button>
								) : (
									<span className="text-gray-400 text-sm">-</span>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		);
	};

	return (
		<div>
			<div className="flex gap-4">
				<button
					type="button"
					className={`text-2xl font-bold mt-6 px-4 py-2 rounded-lg transition-colors ${
						activeView === "transaction"
							? "bg-blue-500 text-white"
							: "bg-gray-200 text-gray-700 hover:bg-gray-300"
					}`}
					onClick={() => setActiveView("transaction")}
				>
					Transaction
				</button>
				<button
					type="button"
					className={`text-2xl font-bold mt-6 px-4 py-2 rounded-lg transition-colors ${
						activeView === "payment"
							? "bg-blue-500 text-white"
							: "bg-gray-200 text-gray-700 hover:bg-gray-300"
					}`}
					onClick={() => setActiveView("payment")}
				>
					Payment
				</button>
			</div>
			<div className="mt-5">
				{activeView === "transaction"
					? renderTransactionTable()
					: renderPaymentTable()}
			</div>
		</div>
	);
}

export default TransactionTable;
