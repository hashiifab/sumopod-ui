import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function BalanceCard() {
	const [balance, setBalance] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchBalance = async () => {
			setLoading(true);
			setError(null);

			const {
				data: { session },
			} = await supabase.auth.getSession();
			const userId = session?.user?.id;

			if (!userId) {
				setError("Not authenticated");
				setLoading(false);
				return;
			}

			const { data, error } = await supabase
				.from("balances")
				.select("current_balance")
				.eq("user_id", userId)
				.single();

			if (error) {
				if (error.code === "PGRST116") {
					// ga ada balance = tambahkan 0
					await supabase.from("balances").insert({
						user_id: userId,
						current_balance: 0,
					});
					setBalance(0);
				} else {
					setError("Gagal ambil saldo");
				}
			} else {
				setBalance(data.current_balance);
			}

			setLoading(false);
		};

		fetchBalance();
	}, []);

	const formatCurrency = (amount: number): string => {
		return new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(amount);
	};

	if (loading) {
		return (
			<div className="bg-white p-6 rounded-lg shadow-lg mt-6">
				<div className="flex gap-4 items-center">
					<div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
					<div>
						<h2 className="text-sm font-bold">Current Credits</h2>
						<div className="w-32 h-8 bg-gray-300 animate-pulse rounded mt-1"></div>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="bg-white p-6 rounded-lg shadow-lg mt-6">
				<div className="flex gap-4 items-center">
					<div className="w-10 h-10 rounded-full bg-red-500"></div>
					<div>
						<h2 className="text-sm font-bold">Current Credits</h2>
						<p className="text-sm text-red-600">{error}</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="bg-white p-6 rounded-lg shadow-lg mt-6">
			<div className="flex gap-4 items-center">
				<div className="w-10 h-10 rounded-full bg-blue-500"></div>
				<div>
					<h2 className="text-sm font-bold">Current Credits</h2>
					<p className="text-2xl font-bold">{formatCurrency(balance)}</p>
				</div>
			</div>
		</div>
	);
}

export default BalanceCard;
