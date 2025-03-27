import React, { useEffect, useState } from "react";
import axios from "axios";

interface Produk {
  id: number;
  nama: string;
  harga: number;
}

function ProdukList() {
  const [produk, setProduk] = useState<Produk[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [editNama, setEditNama] = useState<string>("");
  const [editHarga, setEditHarga] = useState<number>(0);

  useEffect(() => {
    fetchProduk();
  }, []);

  const fetchProduk = () => {
    axios
      .get<Produk[]>("http://localhost:3001/produk")
      .then((response) => {
        setProduk(response.data);
      })
      .catch((error) => {
        console.error("Terjadi error:", error);
      });
  };

  const handleDelete = (id: number) => {
    axios
      .delete(`http://localhost:3001/produk/${id}`)
      .then(() => {
        setProduk(produk.filter((p) => p.id !== id));
      })
      .catch((err) => console.error("Error saat menghapus:", err));
  };

  const handleEdit = (item: Produk) => {
    setEditId(item.id);
    setEditNama(item.nama);
    setEditHarga(item.harga);
  };

  const handleUpdate = () => {
    if (editId === null) return;

    axios
      .put(`http://localhost:3001/produk/${editId}`, {
        nama: editNama,
        harga: editHarga,
      })
      .then(() => {
        setEditId(null);
        setEditNama("");
        setEditHarga(0);
        fetchProduk();
      })
      .catch((err) => console.error("Error saat update:", err));
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditNama("");
    setEditHarga(0);
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <h2 className="text-3xl font-extrabold text-center py-6 dark:text-gray-100 bg-gray-100 dark:bg-gray-700 text-gray-800">
          Daftar Produk
        </h2>

        {editId !== null && (
          <div className="p-6 border-b dark:border-gray-700 border-gray-200">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 dark:text-gray-200">
                Edit Produk
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                    Nama:
                  </label>
                  <input
                    type="text"
                    value={editNama}
                    onChange={(e) => setEditNama(e.target.value)}
                    className="w-full px-3 py-2 border dark:border-gray-600 border-gray-300 rounded-md 
                    dark:bg-gray-700 dark:text-gray-200 
                    bg-white text-gray-900 
                    focus:ring-2 focus:ring-blue-500 focus:outline-none 
                    transition duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium dark:text-gray-300 text-gray-700 mb-2">
                    Harga:
                  </label>
                  <input
                    type="number"
                    value={editHarga}
                    onChange={(e) => setEditHarga(Number(e.target.value))}
                    className="w-full px-3 py-2 border dark:border-gray-600 border-gray-300 rounded-md 
                    dark:bg-gray-700 dark:text-gray-200 
                    bg-white text-gray-900 
                    focus:ring-2 focus:ring-blue-500 focus:outline-none 
                    transition duration-300"
                  />
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={handleUpdate}
                    className="flex-1 bg-blue-600 dark:bg-blue-500 text-white 
                    px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 
                    transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Update
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="flex-1 bg-gray-500 dark:bg-gray-600 text-white 
                    px-4 py-2 rounded-md hover:bg-gray-600 dark:hover:bg-gray-700 
                    transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <ul className="divide-y dark:divide-gray-700 divide-gray-200">
          {produk.map((item) => (
            <li
              key={item.id}
              className="px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-medium dark:text-gray-200 text-gray-900">
                    {item.nama}
                  </p>
                  <p className="text-sm font-semibold text-green-600 dark:text-green-400">
                    Rp{item.harga.toLocaleString()}
                  </p>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => handleEdit(item)}
                    className="bg-yellow-500 dark:bg-yellow-600 text-white 
                    px-3 py-1.5 rounded-md hover:bg-yellow-600 dark:hover:bg-yellow-700 
                    transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 dark:bg-red-600 text-white 
                    px-3 py-1.5 rounded-md hover:bg-red-600 dark:hover:bg-red-700 
                    transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProdukList;