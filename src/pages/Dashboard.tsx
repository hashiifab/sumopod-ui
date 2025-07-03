import { useState } from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Add explicit type casting for Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />
      <div className="flex-1 flex flex-col">
        {/* Add explicit type casting for DashboardHeader */}
        <DashboardHeader onToggleSidebar={() => setOpen(!open)} />
        <main className="flex-1 p-4 sm:p-6 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;