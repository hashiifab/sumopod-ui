import { useState } from "react";
import BalanceCard from "../components/BalanceCard";
import TopUpModal from "../components/TopUpModal";
import TransactionTable from "../components/TransactionTable";

function Billing() {
	const [modalOpen, setModalOpen] = useState(false);

	// Mock data for current balance (will be dynamic in future integration)
	const currentBalance = "Rp 190.000";

	// Mock data for transactions (will be dynamic in future integration)
	const transactions = [
		{
			date: "6/24/2025",
			description: "Credit purchase: 50000 credits",
			type: "purchase",
			amount: "+Rp 50.000 credits",
		},
		{
			date: "6/24/2025",
			description: "Credit purchase: 50000 credits",
			type: "purchase",
			amount: "+Rp 50.000 credits",
		},
		{
			date: "6/24/2025",
			description: "Credit purchase: 50000 credits",
			type: "purchase",
			amount: "+Rp 30.000 credits",
		},
	];

	// Mock data for payments (will be dynamic in future integration)
	const payments = [
		{
			date: "6/24/2025",
			amount: "Rp 50.000",
			credits: "50,000",
			status: "Completed",
			actions: "View Receipt",
		},
		{
			date: "6/23/2025",
			amount: "Rp 100.000",
			credits: "100,000",
			status: "Pending",
			actions: "Cancel",
		},
	];

	const handleTopUp = (_amount: number) => {
		// Future implementation for top-up functionality
	};

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

				<BalanceCard currentBalance={currentBalance} />

				<TransactionTable transactions={transactions} payments={payments} />
			</div>
		</>
	);
}

export default Billing;
