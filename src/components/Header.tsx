import React from "react";

function Header() {
  return (
    <header className="bg-white flex justify-around items-center pt-6 sticky absolute top-0">
      <div className="flex gap-8 items-center">
        <h1 className="text-2xl font-bold">Sumopod</h1>
        <a className="hover:text-blue-500" href="/">
          home
        </a>
        <a className="hover:text-blue-500" href="/">
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
          <button className="bg-gray-300 text-black p-2 rounded-md">
            Login
          </button>
          <button className="bg-blue-500 text-white p-2 rounded-md">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
