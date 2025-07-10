import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BalanceCard from '../components/BalanceCard';
import TopUpModal from '../components/TopUpModal';
import TransactionTable from '../components/TransactionTable';

function Billing() {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const sessionToken = localStorage.getItem('session_token');
    const userEmail = localStorage.getItem('user_email');

    if (!sessionToken || !userEmail) {
      navigate('/login');
      return;
    }

    setLoading(false);
  }, [navigate]);

  const handleTopUp = (_amount: number) => {};

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Billing</h1>
          <p className="text-gray-600">
            Manage your balance and view transaction history
          </p>
        </div>
        <div className="flex gap-4">
          <button
            type="button"
            className="bg-gray-300 text-black px-4 py-2 rounded-lg"
          >
            Redeem
          </button>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={() => setModalOpen(true)}
          >
            Add Credit
          </button>
        </div>
      </div>

      <TopUpModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onTopUp={handleTopUp}
      />

      <div className="mt-6">
        <BalanceCard />
      </div>

      <div className="mt-6">
        <TransactionTable />
      </div>
    </div>
  );
}

export default Billing;
