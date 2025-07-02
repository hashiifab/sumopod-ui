import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function BalanceCard() {
	const [balance, setBalance] = useState<number | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchBalance = async () => {
			const { data, error } = await supabase
				.from("balances")
				.select("user_balance")
				.single(); 

			if (error) {
				setError("Gagal ambil saldo");
			} else {
				setBalance(data?.user_balance ?? 0);
			}
		};

		fetchBalance();
	}, []);

	const formatCurrency = (amount: number): string =>
		new Intl.NumberFormat("id-ID", {
			style: "currency",
			currency: "IDR",
			minimumFractionDigits: 0,
		}).format(amount);

	if (error) {
		return <p className="text-red-500">❌ {error}</p>;
	}

	if (balance === null) {
		return <p>🔄 Loading saldo...</p>;
	}

	return (
		<div className="bg-white p-6 rounded-lg shadow-lg mt-6">
			<h2 className="text-sm font-bold mb-1">Current Credits</h2>
			<p className="text-2xl font-bold text-blue-600">
				{formatCurrency(balance)}
			</p>
		</div>
	);
}

export default BalanceCard;
