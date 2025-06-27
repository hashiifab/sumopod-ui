import { Link } from "react-router-dom";

function Sidebar() {
	return (
		<>
			<div className="fixed left-0 h-screen w-[300px] bg-white border-r border-gray-200">
				<div className="ml-9 mt-7">
					<ul className="space-y-4">
						<Link to="/dashboard/services">
							<li>Services</li>
						</Link>
						<Link to="/dashboard/ai">
							<li className="mt-4">AI</li>
						</Link>
						<Link to="/dashboard/billing">
							<li className="mt-4">Billing</li>
						</Link>
						<Link to="/dashboard/affiliate">
							<li className="mt-4">Affiliate</li>
						</Link>
						<Link to="/dashboard/setting">
							<li className="mt-4">Settings</li>
						</Link>
						<Link to="/dashboard/support">
							<li className="mt-4">Support</li>
						</Link>
						<Link to="/dashboard/beli-emas">
							<li className="mt-4">Belii Emas</li>
						</Link>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Sidebar;
