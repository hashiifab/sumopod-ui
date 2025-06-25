import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="fixed left-0 h-screen w-[300px] bg-white border-r border-gray-200">
        <div className="ml-9 mt-7">
          <ul className="space-y-4">
            <Link to="/dashboard">
              <li>Services</li>
            </Link>
            <Link to="/ai">
              <li className="mt-4">AI</li>
            </Link>
            <Link to="/billing">
              <li className="mt-4">Billing</li>
            </Link>
            <Link to="/affiliate">
              <li className="mt-4">Affiliate</li>
            </Link>
            <Link to="/setting">
              <li className="mt-4">Settings</li>
            </Link>
            <Link to="/support">
              <li className="mt-4">Support</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
