function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 px-6 py-10 border-b border-gray-700">
        <div className="max-w-sm">
          <h1 className="text-2xl font-bold">Sumopod</h1>
          <p className="mt-2 text-sm">
            SumoPod offers seamless container and application purchasing
            solutions for businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="max-w-xs px-2">
            <h1 className="text-xl font-bold mb-2">Quick Links</h1>
            <ul className="space-y-1 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/">Get Started</a></li>
              <li><a href="/">Login</a></li>
            </ul>
          </div>

          <div className="max-w-xs px-2">
            <h1 className="text-xl font-bold mb-2">Quick Links</h1>
            <ul className="space-y-1 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/">Get Started</a></li>
              <li><a href="/">Login</a></li>
            </ul>
          </div>

          <div className="max-w-xs px-2">
            <h1 className="text-xl font-bold mb-2">Quick Links</h1>
            <ul className="space-y-1 text-sm">
              <li><a href="/">Home</a></li>
              <li><a href="/">Get Started</a></li>
              <li><a href="/">Login</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-sm py-6 px-4">
        © 2025 KodingWorks - PT Koding Kreasi Indonesia. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
