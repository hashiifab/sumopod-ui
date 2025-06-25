import Sidebar from "../components/Sidebar";

function Setting() {
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
            <h1 className="text-2xl font-bold">Setting</h1>
            <p>Manage your account settings and preferences</p>
          </div>
        </div>

        <div>
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6 h-screen flex justify-center items-center">
            <h1 className="text-6xl font-bold text-center">
              Halaman Setting
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
