function Ai() {
	return (
		<>
			<div className="ml-[300px] p-6">
				<div className="flex items-center justify-between">
					<div>
						<h1 className="text-2xl font-bold">AI Models</h1>
						<p>Access powerful AI models and manage your usage</p>
					</div>
					<div className="flex gap-4">
						<button
							type="button"
							className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2"
						>
							Add APi kwy
						</button>
						<button
							type="button"
							className="bg-blue-500 text-white px-4 py-2 rounded-lg"
						>
							Add credit
						</button>
					</div>
				</div>

				<div className="bg-white p-6 rounded-lg shadow-lg mt-6">
					<div className="flex gap-4 items-center">
						<div className="w-10 h-10 rounded-full bg-blue-500"></div>
						<div>
							<h2 className="text-sm font-bold">AI balance</h2>
							<p className="text-2xl font-bold">Rp 20.000</p>
						</div>
					</div>
				</div>
				<div>
					<div className="bg-white p-6 rounded-lg shadow-lg mt-6 h-screen flex justify-center items-center">
						<h1 className="text-6xl font-bold text-center">Halaman AI</h1>
					</div>
				</div>
			</div>
		</>
	);
}

export default Ai;
