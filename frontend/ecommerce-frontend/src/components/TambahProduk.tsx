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
        setError("Gagal menambah produk. Silakan coba lagi.");
      });
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl overflow-hidden">
          <div className="bg-gray-100 dark:bg-gray-700 px-6 py-4">
            <h2 className="text-3xl font-extrabold text-center dark:text-gray-100 text-gray-800">
              Tambah Produk
            </h2>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 px-4 py-3 rounded relative" role="alert">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                  Nama Produk:
                </label>
                <input
                  type="text"
                  value={nama}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setNama(e.target.value)
                  }
                  className="w-full px-3 py-2 border dark:border-gray-600 border-gray-300 rounded-md 
                  dark:bg-gray-700 dark:text-gray-200 
                  bg-white text-gray-900 
                  focus:ring-2 focus:ring-blue-500 focus:outline-none 
                  transition duration-300"
                  placeholder="Masukkan nama produk"
                />
              </div>

              <div>
                <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                  Harga:
                </label>
                <input
                  type="number"
                  value={harga}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setHarga(e.target.value)
                  }
                  className="w-full px-3 py-2 border dark:border-gray-600 border-gray-300 rounded-md 
                  dark:bg-gray-700 dark:text-gray-200 
                  bg-white text-gray-900 
                  focus:ring-2 focus:ring-blue-500 focus:outline-none 
                  transition duration-300"
                  placeholder="Masukkan harga produk"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 dark:bg-blue-500 text-white 
                px-4 py-3 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 
                transition duration-300 ease-in-out transform hover:scale-105 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TambahProduk;