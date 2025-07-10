import { useEffect, useState } from 'react';

interface Transaction {
  id: string;
  userId?: string;
  amount: number;
  type: string;
  date: string;
}

interface Payment {
  id: number;
  userId?: string;
  amount: number;
  status: string;
  invoiceUrl: string;
  createdAt: string;
}

const getSessionToken = (): string | null => {
  return (
    localStorage.getItem('session_token') ||
    sessionStorage.getItem('session_token')
  );
};

const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const token = getSessionToken();
  if (!token) {
    window.location.href = '/login';
    return null;
  }

  const requestConfig: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}${endpoint}`,
    requestConfig
  );

  if (response.status === 401) {
    localStorage.removeItem('session_token');
    sessionStorage.removeItem('session_token');
    window.location.href = '/login';
    return null;
  }

  if (!response.ok) {
    return null;
  }

  return await response.json();
};

function TransactionTable() {
  const [activeView, setActiveView] = useState<'transaction' | 'payment'>(
    'transaction'
  );
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchData = async () => {
      const token = getSessionToken();
      if (!token || !mounted) {
        setError(true);
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(false);

      const [transactionsResult, paymentsResult] = await Promise.all([
        apiCall('/api/data/transactions'),
        apiCall('/api/data/payments'),
      ]);

      if (!transactionsResult || !paymentsResult) {
        setError(true);
      } else {
        setTransactions(
          (transactionsResult.transactions || []).map((t: any) => ({
            id: t.id,
            userId: t.userId,
            amount: t.amount,
            type: t.type,
            date: t.date,
          }))
        );
        setPayments(
          (paymentsResult.payments || []).map((p: any) => ({
            id: p.id,
            userId: p.userId,
            amount: p.amount,
            status: p.status,
            invoiceUrl: p.invoiceUrl,
            createdAt: p.createdAt,
          }))
        );
      }

      setLoading(false);
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  const formatCurrency = (amount: number): string =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);

  const formatDate = (dateString: string): string =>
    new Date(dateString).toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    });

  const renderTransactionTable = () => {
    if (loading || error) {
      return (
        <div className="w-full border border-gray-300 p-6 text-center">
          <div className="animate-pulse text-sm sm:text-base">
            {loading ? 'Loading...' : 'Error loading transactions'}
          </div>
        </div>
      );
    }

    if (transactions.length === 0) {
      return (
        <div className="w-full border border-gray-300 p-6 text-center text-gray-500 text-sm sm:text-base">
          No transactions found
        </div>
      );
    }

    return (
      <div className="overflow-x-auto max-w-full">
        <table className="w-full max-w-full border border-gray-300 table-auto">
          <thead>
            <tr>
              <th className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                Date
              </th>
              <th className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                Type
              </th>
              <th className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                  {formatDate(transaction.date)}
                </td>
                <td className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs sm:text-sm ${
                      transaction.type === 'purchase'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {transaction.type}
                  </span>
                </td>
                <td className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                  {formatCurrency(transaction.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const renderPaymentTable = () => {
    if (loading || error) {
      return (
        <div className="w-full border border-gray-300 p-6 text-center">
          <div className="animate-pulse text-sm sm:text-base">
            {loading ? 'Loading...' : 'Error loading payments'}
          </div>
        </div>
      );
    }

    if (payments.length === 0) {
      return (
        <div className="w-full border border-gray-300 p-6 text-center text-gray-500 text-sm sm:text-base">
          No payments found
        </div>
      );
    }

    return (
      <div className="overflow-x-auto max-w-full">
        <table className="w-full max-w-full border border-gray-300 table-auto">
          <thead>
            <tr>
              <th className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                Date
              </th>
              <th className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                Amount
              </th>
              <th className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                Status
              </th>
              <th className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                  {formatDate(payment.createdAt)}
                </td>
                <td className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                  {formatCurrency(payment.amount)}
                </td>
                <td className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                  <span
                    className={`inline-block px-2 py-1 rounded text-xs sm:text-sm ${
                      payment.status === 'paid'
                        ? 'bg-green-100 text-green-800'
                        : payment.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : payment.status === 'failed'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {payment.status}
                  </span>
                </td>
                <td className="px-2 py-1 border-b text-center text-xs sm:text-sm">
                  {payment.status === 'paid' ? (
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded text-xs sm:text-sm">
                      Done
                    </span>
                  ) : payment.status === 'pending' && payment.invoiceUrl ? (
                    <a
                      href={payment.invoiceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 text-white px-2 py-1 rounded text-xs sm:text-sm hover:bg-blue-600 transition"
                    >
                      Pay
                    </a>
                  ) : (
                    <span className="text-gray-400 text-xs sm:text-sm">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <div className="flex gap-4">
        <button
          type="button"
          className={`text-base sm:text-lg font-bold mt-6 px-4 py-2 rounded-lg transition-colors ${
            activeView === 'transaction'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveView('transaction')}
        >
          Transaction
        </button>
        <button
          type="button"
          className={`text-base sm:text-lg font-bold mt-6 px-4 py-2 rounded-lg transition-colors ${
            activeView === 'payment'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveView('payment')}
        >
          Payment
        </button>
      </div>
      <div className="mt-5">
        {activeView === 'transaction'
          ? renderTransactionTable()
          : renderPaymentTable()}
      </div>
    </div>
  );
}

export default TransactionTable;
