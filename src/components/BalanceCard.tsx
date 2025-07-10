import { useEffect, useState } from 'react';

const getSessionToken = (): string | null =>
  localStorage.getItem('session_token') ||
  sessionStorage.getItem('session_token');

const apiCall = (endpoint: string, options: RequestInit = {}) => {
  const token = getSessionToken();
  if (!token) return Promise.reject('Unauthorized');

  const requestConfig: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
    ...options,
  };

  return fetch(
    `${import.meta.env.VITE_API_BASE_URL}${endpoint}`,
    requestConfig
  ).then((res) => {
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  });
};

function BalanceCard() {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    if (!getSessionToken()) return;

    apiCall('/api/data/balance')
      .then((res) => {
        setBalance(res?.userBalance ?? 0);
      })
      .catch(() => {
        setBalance(0);
      });
  }, []);

  const formatCurrency = (amount: number): string =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);

  if (balance === null) return null;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h2 className="text-sm font-bold mb-1">Current Credits</h2>
      <p className="text-2xl font-bold text-blue-600">
        {formatCurrency(balance)}
      </p>
    </div>
  );
}

export default BalanceCard;
