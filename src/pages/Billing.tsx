import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BalanceCard from "../components/BalanceCard";
import TopUpModal from "../components/TopUpModal";
import TransactionTable from "../components/TransactionTable";
import { supabase } from "../supabase";

function Billing() {
	const [modalOpen, setModalOpen] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(true);
	const navigate = useNavigate();

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const {
					data: { session },
				} = await supabase.auth.getSession();

				if (!session?.user) {
					navigate("/login");
					return;
				}

				setIsAuthenticated(true);
			} catch (error) {
				console.error("Error checking authentication:", error);
				navigate("/login");
			} finally {
				setLoading(false);
			}
		};

		checkAuth();
	}, [navigate]);

	const handleTopUp = (_amount: number) => {
		// Future implementation for top-up functionality
	};

	if (loading) {
		return (
			<div className="ml-[300px] p-6">
				<div className="flex items-center justify-center h-64">
					<div className="animate-pulse text-lg">Loading...</div>
				</div>
			</div>
		);
	}

	if (!isAuthenticated) {
		return (
			<div className="ml-[300px] p-6">
				<div className="flex items-center justify-center h-64">
					<div className="text-center">
						<h2 className="text-xl font-bold mb-4">Authentication Required</h2>
						<p className="text-gray-600 mb-4">
							Please log in to access your billing information.
						</p>
						<button
							type="button"
							onClick={() => navigate("/login")}
							className="bg-blue-500 text-white px-4 py-2 rounded-lg"
						>
							Go to Login
						</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<>
			<div className="ml-[300px] p-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold">Billing</h1>
						<p>Manage your balance and view transaction history</p>
					</div>
					<div className="flex gap-4">
						<button
							type="button"
							className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2"
						>
							redeem
						</button>
						<button
							type="button"
							className="bg-blue-500 text-white px-4 py-2 rounded-lg"
							onClick={() => setModalOpen(true)}
						>
							Add credit
						</button>
					</div>
				</div>

				<TopUpModal
					isOpen={modalOpen}
					onClose={() => setModalOpen(false)}
					onTopUp={handleTopUp}
				/>

				<BalanceCard />

				<TransactionTable />
			</div>
		</>
	);
}

export default Billing;
