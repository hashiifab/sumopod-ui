import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function BalanceCard() {
	const [balance, setBalance] = useState<number>(0);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		let mounted = true;

		const checkAuthAndFetch = async () => {
			// Wait a bit for auth to be ready
			await new Promise(resolve => setTimeout(resolve, 100));

			const { data: { session } } = await supabase.auth.getSession();
			if (session?.user?.id && mounted) {
				fetchBalance();
			} else {
				// Listen for auth changes
				const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
					if (event === 'SIGNED_IN' && session?.user?.id && mounted) {
						fetchBalance();
					}
				});

				// Cleanup subscription
				return () => {
					subscription.unsubscribe();
					mounted = false;
				};
			}
		};

		checkAuthAndFetch();

		return () => {
			mounted = false;
		};
	}, []);

	const fetchBalance = async () => {
		try {
			setLoading(true);
			setError(null);

			const {
				data: { session },
			} = await supabase.auth.getSession();
			const userId = session?.user?.id;

			if (!userId) {
				setError("Not authenticated");
				return;
			}

			// Try to get existing balance first
			const { data, error } = await supabase
				.from("balances")
				.select("user_balance")
				.eq("user_id", userId)
				.single();

			if (error && error.code === "PGRST116") {
				// No balance record exists, try to create one
				const { data: newBalance, error: insertError } = await supabase
					.from("balances")
					.insert({
						user_id: userId,
						user_balance: 0,
					})
					.select("user_balance")
					.single();

				if (insertError) {
					// Handle conflict error (user already exists)
					if (insertError.code === '23505') {
						// Unique constraint violation, try to fetch again
						const { data: existingBalance, error: fetchError } = await supabase
							.from("balances")
							.select("user_balance")
							.eq("user_id", userId)
							.single();

						if (fetchError) {
							setError("Failed to fetch balance");
						} else {
							setBalance(existingBalance?.user_balance || 0);
						}
					} else {
						setError("Failed to create balance");
					}
				} else {
					setBalance(newBalance?.user_balance || 0);
				}
			} else if (error) {
				setError("Failed to fetch balance");
			} else {
				setBalance(data?.user_balance || 0);
			}
		} catch (err) {
			console.error("Unexpected error:", err);
			setError("An unexpected error occurred");
		} finally {
			setLoading(false);
		}
	};

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
