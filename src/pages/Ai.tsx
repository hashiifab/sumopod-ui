function Ai() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">AI Models</h1>
          <p className="text-sm text-gray-600">Manage AI models & usage</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button type="button" className="bg-gray-300 text-black px-4 py-2 rounded-lg">Add API Key</button>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Credit</button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mt-6">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded-full bg-blue-500" />
          <div>
            <h2 className="text-sm font-bold">AI Balance</h2>
            <p className="text-2xl font-bold">Rp 20.000</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mt-6 flex justify-center items-center min-h-[300px] sm:min-h-[400px]">
        <h1 className="text-4xl sm:text-6xl font-bold text-center">Halaman AI</h1>
      </div>
    </div>
  );
}

export default Ai;
