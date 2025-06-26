/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
import React from "react";
import { useState, useEffect } from "react";

function BeliEmas() {
  const [harga, setHarga] = useState(0);
  const [gram, setGram] = useState(1);
  const [total, setTotal] = useState(0);

  //   React.useEffect(() => {
  //     fetch("https://logam-mulia-api.vercel.app/prices/anekalogam")
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   });

  useEffect(() => {
    fetch("https://logam-mulia-api.vercel.app/prices/anekalogam")
      .then((res) => res.json())
      .then((data) => {
        const harga = data.data[0].buy;
        setHarga(harga);
      });
  }, []);

  useEffect(() => {
    setTotal(harga * gram);
  }, [harga, gram]);

  return (
    <>
      <div className="ml-[300px] p-6">
        <div className="flex flex-col gap-8 justify-between">
          <div className="flex flex-row justify-between">
			<div>
			  <h1 className="text-2xl font-bold">Beli Emas</h1>
			  <p>cek harga emas termurah</p>
			</div>
			<div className="flex flex-col">
			  <h1>harga per gram</h1>
			  <p>Rp {harga.toLocaleString()}</p>
			</div>
		  </div>
          <div className="flex flex-col gap-4">
            <input
              className="border border-gray-300 rounded-lg p-2 w-full"
              type="number"
              value={gram}
              onChange={(event) => setGram(Number(event.target.value))}
            />
            <div className="flex flex-row justify-between mt-4">
              <div className="flex flex-col">
                <h1>Harga total</h1>
                <p>Rp. {total.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeliEmas;
