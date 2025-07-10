import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface DashboardHeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

function DashboardHeader({
  onToggleSidebar,
  isSidebarOpen,
}: DashboardHeaderProps) {
  const [email, setEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('session_token');
    const userEmail = localStorage.getItem('user_email');

    if (token && userEmail) {
      setEmail(userEmail);
    } else {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = async () => {
    await fetch('http://localhost:3000/api/auth/sign-out', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    }).catch(() => {});

    localStorage.clear();
    navigate('/');
  };

  return (
    <header className="flex justify-between md:justify-end items-center px-4 sm:px-6 h-16 bg-white border-b border-gray-200 sticky top-0 z-20">
      <button
        type="button"
        className="md:hidden p-2 rounded"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="flex items-center gap-3 text-sm">
        <div className="w-8 h-8 rounded-full bg-blue-500" />
        <div className="flex flex-col">
          <span className="font-medium">User</span>
          <span className="text-gray-600 truncate max-w-[100px] sm:max-w-[150px]">
            {email || 'Loading...'}
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
