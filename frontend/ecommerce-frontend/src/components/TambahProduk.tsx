import React, { useState, FormEvent, ChangeEvent } from "react";
import axios from "axios";

interface Produk {
  nama: string;
  harga: string;
}

function TambahProduk() {
  const [nama, setNama] = useState<string>("");
  const [harga, setHarga] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!nama || !harga) {
      setError("Nama dan Harga wajib diisi");
      return;
    }

    setError("");

    axios
      .post<Produk>("http://localhost:3001/produk", { nama, harga })
      .then((res) => {
        console.log("Produk berhasil ditambah:", res.data);
        setNama("");
        setHarga("");
      })
      .catch((err) => {
        console.error("Error menambah produk:", err);
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Tambah Produk</h2>

      {error && (
        <p className="text-red-600 text-sm text-center bg-red-100 p-2 rounded mb-3">
          {error}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Nama Produk:</label>
          <input
            type="text"
            value={nama}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setNama(e.target.value)
            }
            className="w-full border rounded p-2"
            placeholder="Masukkan nama produk"
          />
        </div>

        <div>
          <label className="block font-medium">Harga:</label>
          <input
            type="number"
            value={harga}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setHarga(e.target.value)
            }
            className="w-full border rounded p-2"
            placeholder="Masukkan harga produk"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Simpan
        </button>
      </form>
    </div>
  );
}

export default TambahProduk;