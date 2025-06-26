/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
import React from "react";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";

function BeliEmas() {
  const [modalOpen, setModalOpen] = useState(false);
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
  });

  useEffect(() => {
    setTotal(harga * gram);
  }, [harga, gram]);

  return (
    <>
      <div className="ml-[300px] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Beli Emas</h1>
            <p>cek harga emas termurah</p>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setModalOpen(true)}
            >
              Beli Emass
            </button>
          </div>
        </div>

        <ReactModal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          contentLabel="Modal Beli Emas"
          className="bg-white rounded shadow-lg p-6 w-[400px]"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        >
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold mb-4">Beli Emas</h1>
            <div className="cursor-pointer" onClick={() => setModalOpen(false)}>
              x
            </div>
          </div>

          <input
            className="border border-gray-300 rounded-lg p-2 w-full"
            type="number"
            value={gram}
            onChange={(event) => setGram(Number(event.target.value))}
          />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-col">
              <h1>harga per gram</h1>
              <p>Rp {harga.toLocaleString()}</p>
            </div>
            <div className="flex flex-col">
              <h1>Harga total</h1>
              <p>Rp. {total.toLocaleString()}</p>
            </div>
          </div>
        </ReactModal>
      </div>
    </>
  );
}

export default BeliEmas;
