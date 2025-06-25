import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white flex justify-around items-center py-4 sticky top-0">
      <div className="flex gap-8 items-center">
        <h1 className="text-2xl font-bold">Sumopod</h1>
        <a className="hover:text-blue-500" href="/">
          home
        </a>
        <a className="hover:text-blue-500" href="/templates">
          template
        </a>
        <a className="hover:text-blue-500" href="/">
          pricing
        </a>
        <a className="hover:text-blue-500" href="/">
          features
        </a>
      </div>

      <div>
        <div className="flex gap-8">
          <Link to="/login">
            <button className="bg-gray-300 text-black p-2 rounded-md">
              Login
            </button>
          </Link>
          <Link to="/login">
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
