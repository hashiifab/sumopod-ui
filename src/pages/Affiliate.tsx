function Affiliate() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Affiliate Program</h1>
          <p className="text-sm text-gray-600">Earn 10% commission from referrals</p>
        </div>
      </div>

      {/* Grid manual */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg shadow border border-black h-[100px]"></div>
        <div className="bg-white p-6 rounded-lg shadow border border-black h-[100px]"></div>
        <div className="bg-white p-6 rounded-lg shadow border border-black h-[100px]"></div>
        <div className="bg-white p-6 rounded-lg shadow border border-black h-[100px]"></div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mt-6 flex justify-center items-center min-h-[300px] sm:min-h-[400px]">
        <h1 className="text-4xl sm:text-6xl font-bold text-center">Halaman Affiliate</h1>
      </div>
    </div>
  );
}

export default Affiliate;
