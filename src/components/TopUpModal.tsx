/** biome-ignore-all lint/nursery/useUniqueElementIds: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
import { useState } from "react";
import ReactModal from "react-modal";

interface TopUpModalProps {
	isOpen: boolean;
	onClose: () => void;
	onTopUp?: (amount: number) => void;
}

function TopUpModal({ isOpen, onClose, onTopUp }: TopUpModalProps) {
	const [amount, setAmount] = useState<string>("");

	const handleQuickSelect = (selectedAmount: number) => {
		setAmount(selectedAmount.toString());
	};

	const handleClose = () => {
		setAmount("");
		onClose();
	};

	const handleTopUpSubmit = () => {
		// Future implementation for form submission
		if (onTopUp && amount) {
			onTopUp(Number(amount));
		}
		handleClose();
	};

	return (
		<ReactModal
			isOpen={isOpen}
			onRequestClose={handleClose}
			contentLabel="Add Credit Modal"
			className="bg-white rounded shadow-lg"
			overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
		>
			<div className="border-b border-black px-6 pt-4 flex justify-between">
				<h2 className="text-xl font-bold mb-4">Top Up Balance</h2>
				<button
					type="button"
					onClick={handleClose}
					className="cursor-pointer bg-transparent border-none text-xl font-bold hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded p-1"
					aria-label="Close modal"
				>
					×
				</button>
			</div>
			<div className="px-6 py-4 flex flex-col gap-4">
				<div className="flex flex-col gap-2">
					<label htmlFor="amount">amount(Rp)</label>
					<input
						className="border border-gray-300 w-[300px] rounded-lg p-2"
						type="number"
						id="amount"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
						placeholder="Enter amount"
					/>
				</div>
				<div className="flex flex-row gap-4 mt-4 justify-between">
					<div
						className="bg-white p-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50"
						onClick={() => handleQuickSelect(50000)}
					>
						50.000
					</div>
					<div
						className="bg-white p-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50"
						onClick={() => handleQuickSelect(100000)}
					>
						100.000
					</div>
					<div
						className="bg-white p-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50"
						onClick={() => handleQuickSelect(200000)}
					>
						200.000
					</div>
				</div>
				<div className="mt-4">
					<button
						type="button"
						className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center w-full"
						onClick={handleTopUpSubmit}
					>
						top up
					</button>
				</div>
			</div>
		</ReactModal>
	);
}

export default TopUpModal;
