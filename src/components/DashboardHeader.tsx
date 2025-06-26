function DashboardHeader() {
	return (
		<header className="flex justify-between pr-10 h-16 bg-white border-b border-gray-200 sticky top-0 z-20">
			<div className="text-2xl font-bold flex items-center ml-10">SUmopod</div>
			<div className="flex gap-4 items-center">
				<div className="w-10 h-10 rounded-full bg-blue-500"></div>

				<div>
					<h3>User</h3>
					<p>hashhiif@gmail.com</p>
				</div>
			</div>
		</header>
	);
}

export default DashboardHeader;
