interface BalanceCardProps {
	currentBalance: string;
}

function BalanceCard({ currentBalance }: BalanceCardProps) {
	return (
		<div className="bg-white p-6 rounded-lg shadow-lg mt-6">
			<div className="flex gap-4 items-center">
				<div className="w-10 h-10 rounded-full bg-blue-500"></div>
				<div>
					<h2 className="text-sm font-bold">Current Credits</h2>
					<p className="text-2xl font-bold">{currentBalance}</p>
				</div>
			</div>
		</div>
	);
}

export default BalanceCard;
