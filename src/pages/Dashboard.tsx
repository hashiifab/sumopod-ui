import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";

function Dashboard() {
	return (
		<>
			<DashboardHeader />
			<Sidebar />
			<div>
				<Outlet />
			</div>
		</>
	);
}

export default Dashboard;
