function Services() {
	return (
		<div className="ml-[300px] p-6">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-2xl font-bold">Services</h1>
					<p>Manage your managed services</p>
				</div>
				<div>
					<button className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2">
						refresh
					</button>
					<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
						Add Service
					</button>
				</div>
			</div>

			<div className="mt-10">
				<table className="min-w-full border border-gray-300">
					<thead>
						<tr>
							<th className="px-4 py-2 border-b text-center">Name</th>
							<th className="px-4 py-2 border-b text-center">Type</th>
							<th className="px-4 py-2 border-b text-center">Status</th>
							<th className="px-4 py-2 border-b text-center">Plan</th>
							<th className="px-4 py-2 border-b text-center">Auto Renewal</th>
							<th className="px-4 py-2 border-b text-center">Expiry</th>
							<th className="px-4 py-2 border-b text-center">Action</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td className="px-4 py-2 border-b text-center">n8n test</td>
							<td className="px-4 py-2 border-b text-center">n8n Plus</td>
							<td className="px-4 py-2 border-b text-center">active</td>
							<td className="px-4 py-2 border-b">
								<div className="text-center">
									<h4>n8n Plus</h4>
									<p>1000 credits/month</p>
								</div>
							</td>
							<td className="px-4 py-2 border-b text-center">
								<input className="w-4 h-4" type="checkbox" />
							</td>
							<td className="px-4 py-2 border-b text-center">2025-01-01</td>
							<td className="px-4 py-2 border-b text-center">
								<button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
									Manage
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Services;
