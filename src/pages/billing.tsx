import Sidebar from "../components/Sidebar";

function Billing() {
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
            <h1 className="text-2xl font-bold">Billing</h1>
            <p>Manage your balance and view transaction history</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2">
              redeem
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              Add credit
            </button>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-blue-500"></div>
            <div>
              <h2 className="text-sm font-bold">Current Credits</h2>
              <p className="text-2xl font-bold">Rp 20.000</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-4">
              <h2 className="text-2xl font-bold mt-6">Transaction </h2>
              <h2 className="text-2xl font-bold mt-6">Payment </h2>
          </div>
          <div className="mt-5">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b text-center">date</th>
                  <th className="px-4 py-2 border-b text-center">
                    descriotion
                  </th>
                  <th className="px-4 py-2 border-b text-center">type</th>
                  <th className="px-4 py-2 border-b text-center">amount</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b text-center">6/24/2025</td>
                  <td className="px-4 py-2 border-b text-center">
                    Credit purchase: 50000 credits
                  </td>
                  <td className="px-4 py-2 border-b text-center">purchase</td>
                  <td className="px-4 py-2 border-b">+Rp 50.000 credits</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b text-center">6/24/2025</td>
                  <td className="px-4 py-2 border-b text-center">
                    Credit purchase: 50000 credits
                  </td>
                  <td className="px-4 py-2 border-b text-center">purchase</td>
                  <td className="px-4 py-2 border-b">+Rp 50.000 credits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Billing;
