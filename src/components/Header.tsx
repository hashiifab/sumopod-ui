import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icon burger & close

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="justify-between flex md:justify-around items-center px-6 py-4">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold">Sumopod</h1>

          <nav className="hidden md:flex gap-6 items-center">
            <a className="hover:text-blue-500" href="/">
              Home
            </a>
            <a className="hover:text-blue-500" href="/templates">
              Template
            </a>
            <a className="hover:text-blue-500" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-blue-500" href="#features">
              Features
            </a>
          </nav>
        </div>

        <div className="hidden md:flex gap-4">
          <Link to="/login">
            <button
              type="button"
              className="bg-gray-300 text-black px-4 py-2 rounded-md"
            >
              Login
            </button>
          </Link>
          <Link to="/login">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Get Started
            </button>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md px-6 pb-4 flex flex-col gap-4 z-40">
          <a
            className="hover:text-blue-500"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            className="hover:text-blue-500"
            href="/templates"
            onClick={() => setIsOpen(false)}
          >
            Template
          </a>
          <a
            className="hover:text-blue-500"
            href="#pricing"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a
            className="hover:text-blue-500"
            href="#features"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button
              type="button"
              className="bg-gray-300 text-black px-4 py-2 rounded-md w-full"
            >
              Login
            </button>
          </Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
            >
              Get Started
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
