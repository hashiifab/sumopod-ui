import { useState } from 'react';
import ReactModal from 'react-modal';

interface TopUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTopUp?: (amount: number) => void;
}

function TopUpModal({ isOpen, onClose }: TopUpModalProps) {
  const [amount, setAmount] = useState<string>('');

  const handleQuickSelect = (selectedAmount: number) => {
    setAmount(selectedAmount.toString());
  };

  const handleClose = () => {
    setAmount('');
    onClose();
  };

  const handleTopUpSubmit = async () => {
    if (!amount || Number(amount) <= 0) {
      alert('Masukkan nominal yang valid.');
      return;
    }

    const token =
      localStorage.getItem('session_token') ||
      sessionStorage.getItem('session_token');

    if (!token) {
      alert('Silakan login terlebih dahulu.');
      return;
    }

    const res = await fetch(
      `${import.meta.env.VITE_API_BASE_URL}/create-invoice`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: Number(amount) }),
      }
    );

    const data = await res.json();

    if (!res.ok || !data.invoice_url) {
      alert(data?.message || 'Top up gagal.');
      return;
    }

    window.open(data.invoice_url, '_blank');
    handleClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      contentLabel="Add Credit Modal"
      className="bg-white rounded shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <div className="border-b border-black px-6 pt-4 flex justify-between">
        <h2 className="text-xl font-bold mb-4">Top Up Balance</h2>
        <button
          type="button"
          onClick={handleClose}
          className="cursor-pointer bg-transparent border-none text-xl font-bold hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded p-1"
          aria-label="Close modal"
        >
          ×
        </button>
      </div>
      <div className="px-6 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="amount">amount (Rp)</label>
          <input
            className="border border-gray-300 w-[300px] rounded-lg p-2"
            type="number"
            value={amount}
            onChange={(e) => setAmount((e.target as HTMLInputElement).value)}
            placeholder="Masukkan nominal"
          />
        </div>
        <div className="flex flex-row gap-4 mt-4 justify-between">
          {[50000, 100000, 200000].map((val) => (
            <button
              type="button"
              key={val}
              className="bg-white p-2 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-50"
              onClick={() => handleQuickSelect(val)}
            >
              {val.toLocaleString('id-ID')}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg text-center w-full"
            onClick={handleTopUpSubmit}
          >
            Top Up
          </button>
        </div>
      </div>
    </ReactModal>
  );
}

export default TopUpModal;
