import Sidebar from "../components/Sidebar";

function Support() {
  return (
    <>
      <header className="flex justify-between pr-10 h-16 bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="text-2xl font-bold flex items-center ml-10">
          SUmopod
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded-full bg-blue-500"></div>

          <div>
            <h3>User</h3>
            <p>hashhiif@gmail.com</p>
          </div>
        </div>
      </header>
      <Sidebar />
      <div className="ml-[300px] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Support</h1>
            <p>Get help and support for your SumoPod services</p>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6 h-screen flex justify-center items-center">
            <h1 className="text-6xl font-bold text-center">Halaman support</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support;
