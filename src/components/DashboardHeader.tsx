import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

interface DashboardHeaderProps {
  onToggleSidebar: () => void;
}

function DashboardHeader({ onToggleSidebar }: DashboardHeaderProps) {
  const [email, setEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      const userEmail = data.session?.user?.email ?? null;
      setEmail(userEmail);
      if (!userEmail) navigate("/");
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <header className="flex justify-between md:justify-end items-center px-4 sm:px-6 h-16 bg-white border-b border-gray-200 sticky top-0 z-20">
      <button
        type="button"
        className="md:hidden bg-white border p-2 rounded"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
      >
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-gray-800" />
          <div className="w-6 h-0.5 bg-gray-800" />
          <div className="w-6 h-0.5 bg-gray-800" />
        </div>
      </button>

      

      <div className="flex items-center gap-3 text-sm">
        <div className="w-8 h-8 rounded-full bg-blue-500" />
        <div className="flex flex-col">
          <span className="font-medium">User</span>
          <span className="text-gray-600 truncate max-w-[100px] sm:max-w-[150px]">
            {email ?? "Loading..."}
          </span>
          <button
            type="button"
            className="text-red-500 text-xs mt-1 hover:underline"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;