import { Link } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Sidebar({ open, setOpen }: SidebarProps){
  return (
    <>
      <div
        className={`fixed md:static top-0 left-0 h-screen w-[250px] bg-white border-r border-gray-200 transition-transform duration-300 z-30 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-6 pt-4 pb-2 h-16 border-b border-gray-200 text-xl font-bold">
          Sumopod
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-xl font-bold md:hidden"
          >
            ×
          </button>
        </div>

        <div className="pt-4 px-6">
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard/services"
                className="block py-2 hover:text-blue-500"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/ai"
                className="block py-2 hover:text-blue-500"
              >
                AI
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/billing"
                className="block py-2 hover:text-blue-500"
              >
                Billing
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/affiliate"
                className="block py-2 hover:text-blue-500"
              >
                Affiliate
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/setting"
                className="block py-2 hover:text-blue-500"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/support"
                className="block py-2 hover:text-blue-500"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/beli-emas"
                className="block py-2 hover:text-blue-500"
              >
                Beli Emas
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Sidebar;
