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
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Daftar Produk</h2>

      {editId !== null && (
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h3 className="text-lg font-semibold mb-2">Edit Produk</h3>
          <div className="mb-2">
            <label className="block font-medium">Nama:</label>
            <input
              type="text"
              value={editNama}
              onChange={(e) => setEditNama(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-2">
            <label className="block font-medium">Harga:</label>
            <input
              type="number"
              value={editHarga}
              onChange={(e) => setEditHarga(Number(e.target.value))}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Update
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <ul className="space-y-3">
        {produk.map((item) => (
          <li
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
          >
            <span className="text-lg">
              {item.nama} -{" "}
              <span className="font-semibold text-green-600">
                Rp{item.harga.toLocaleString()}
              </span>
            </span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(item)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProdukList;