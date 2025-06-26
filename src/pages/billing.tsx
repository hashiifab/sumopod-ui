import { useState } from "react";
import ReactModal from "react-modal";
import Sidebar from "../components/Sidebar";

function Billing() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<>
			<div className="ml-[300px] p-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold">Billing</h1>
						<p>Manage your balance and view transaction history</p>
					</div>
					<div className="flex gap-4">
						<button className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2">
							redeem
						</button>
						<button
							className="bg-blue-500 text-white px-4 py-2 rounded-lg"
							onClick={() => setModalOpen(true)}
						>
							Add credit
						</button>
					</div>
				</div>

				<ReactModal
					isOpen={modalOpen}
					onRequestClose={() => setModalOpen(false)}
					contentLabel="Add Credit Modal"
					className="bg-white rounded shadow-lg"
					overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
				>
					<div className="border-b border-black px-6 pt-4 flex justify-between">
						<h2 className="text-xl font-bold mb-4">Top Up Balance</h2>
						<div onClick={() => setModalOpen(false)} className="cursor-pointer">
							x
						</div>
					</div>
					<div className="px-6 py-4 flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<label>amount(Rp)</label>
							<input
								className="border border-gray-300 w-[300px] rounded-lg p-2"
								type="number"
							/>
						</div>
						<div className="flex flex-row gap-4 mt-4 justify-between">
							<div className="bg-white p-2 rounded-lg border border-gray-300">
								50.000
							</div>
							<div className="bg-white p-2 rounded-lg border border-gray-300">
								100.000
							</div>
							<div className="bg-white p-2 rounded-lg border border-gray-300">
								200.000
							</div>
						</div>
						<div className="mt-4">
							<button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center w-full">
								top up
							</button>
						</div>
					</div>
				</ReactModal>

				<div className="bg-white p-6 rounded-lg shadow-lg mt-6">
					<div className="flex gap-4 items-center">
						<div className="w-10 h-10 rounded-full bg-blue-500"></div>
						<div>
							<h2 className="text-sm font-bold">Current Credits</h2>
							<p className="text-2xl font-bold">Rp 20.000</p>
						</div>
					</div>
				</div>

				<div>
					<div className="flex gap-4">
						<h2 className="text-2xl font-bold mt-6">Transaction </h2>
						<h2 className="text-2xl font-bold mt-6">Payment </h2>
					</div>
					<div className="mt-5">
						<table className="min-w-full border border-gray-300">
							<thead>
								<tr>
									<th className="px-4 py-2 border-b text-center">date</th>
									<th className="px-4 py-2 border-b text-center">
										descriotion
									</th>
									<th className="px-4 py-2 border-b text-center">type</th>
									<th className="px-4 py-2 border-b text-center">amount</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td className="px-4 py-2 border-b text-center">6/24/2025</td>
									<td className="px-4 py-2 border-b text-center">
										Credit purchase: 50000 credits
									</td>
									<td className="px-4 py-2 border-b text-center">purchase</td>
									<td className="px-4 py-2 border-b">+Rp 50.000 credits</td>
								</tr>
								<tr>
									<td className="px-4 py-2 border-b text-center">6/24/2025</td>
									<td className="px-4 py-2 border-b text-center">
										Credit purchase: 50000 credits
									</td>
									<td className="px-4 py-2 border-b text-center">purchase</td>
									<td className="px-4 py-2 border-b">+Rp 50.000 credits</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}

export default Billing;
