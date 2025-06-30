import { useState } from "react";

interface Transaction {
	date: string;
	description: string;
	type: string;
	amount: string;
}

interface Payment {
	date: string;
	amount: string;
	credits: string;
	status: string;
	actions: string;
}

interface TransactionTableProps {
	transactions: Transaction[];
	payments: Payment[];
}

function TransactionTable({ transactions, payments }: TransactionTableProps) {
	const [activeView, setActiveView] = useState<"transaction" | "payment">(
		"transaction",
	);

	const renderTransactionTable = () => (
		<table className="min-w-full border border-gray-300">
			<thead>
				<tr>
					<th className="px-4 py-2 border-b text-center">date</th>
					<th className="px-4 py-2 border-b text-center">description</th>
					<th className="px-4 py-2 border-b text-center">type</th>
					<th className="px-4 py-2 border-b text-center">amount</th>
				</tr>
			</thead>
			<tbody>
				{transactions.map((transaction, index) => (
					<tr key={`${transaction.date}-${transaction.description}-${index}`}>
						<td className="px-4 py-2 border-b text-center">
							{transaction.date}
						</td>
						<td className="px-4 py-2 border-b text-center">
							{transaction.description}
						</td>
						<td className="px-4 py-2 border-b text-center">
							{transaction.type}
						</td>
						<td className="px-4 py-2 border-b">{transaction.amount}</td>
					</tr>
				))}
			</tbody>
		</table>
	);

	const renderPaymentTable = () => (
		<table className="min-w-full border border-gray-300">
			<thead>
				<tr>
					<th className="px-4 py-2 border-b text-center">date</th>
					<th className="px-4 py-2 border-b text-center">amount</th>
					<th className="px-4 py-2 border-b text-center">credits</th>
					<th className="px-4 py-2 border-b text-center">status</th>
					<th className="px-4 py-2 border-b text-center">actions</th>
				</tr>
			</thead>
			<tbody>
				{payments.map((payment, index) => (
					<tr key={`${payment.date}-${payment.amount}-${index}`}>
						<td className="px-4 py-2 border-b text-center">{payment.date}</td>
						<td className="px-4 py-2 border-b text-center">{payment.amount}</td>
						<td className="px-4 py-2 border-b text-center">
							{payment.credits}
						</td>
						<td className="px-4 py-2 border-b text-center">{payment.status}</td>
						<td className="px-4 py-2 border-b text-center">
							{payment.actions}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);

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
