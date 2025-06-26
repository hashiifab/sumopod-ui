import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";


function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <Sidebar />
      <div>
        <Outlet/>
      </div>
    </>
  );
}

export default Dashboard;
