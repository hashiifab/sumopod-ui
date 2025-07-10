import { useEffect, useState } from 'react';

function BeliEmas() {
  const [harga, setHarga] = useState(0);
  const [gram, setGram] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(
      import.meta.env.VITE_GOLD_API_URL ||
        'https://logam-mulia-api.vercel.app/prices/anekalogam'
    )
      .then((res) => res.json())
      .then((data) => setHarga(data.data[0].buy));
  }, []);

  useEffect(() => {
    setTotal(harga * gram);
  }, [harga, gram]);

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">Beli Emas</h1>
          <p className="text-sm text-gray-600">Cek harga emas termurah</p>
        </div>
        <div>
          <h2 className="text-sm">Harga per gram</h2>
          <p className="text-xl font-bold">Rp {harga.toLocaleString()}</p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <input
          className="border border-gray-300 rounded-lg p-2 w-full"
          type="number"
          value={gram}
          onChange={(e) => setGram(Number(e.target.value))}
        />
        <div>
          <h2 className="text-sm">Harga total</h2>
          <p className="text-xl font-bold">Rp. {total.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default BeliEmas;
