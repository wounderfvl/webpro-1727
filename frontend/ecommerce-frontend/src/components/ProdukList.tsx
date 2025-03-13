// src/components/ProdukList.tsx
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
    axios.delete(`http://localhost:3001/produk/${id}`)
      .then(() => {
        setProduk(produk.filter((p) => p.id !== id));
      })
      .catch(err => console.error("Error saat menghapus:", err));
  };

  const handleEdit = (item: Produk) => {
    setEditId(item.id);
    setEditNama(item.nama);
    setEditHarga(item.harga);
  };

  const handleUpdate = () => {
    if (editId === null) return;
    
    axios.put(`http://localhost:3001/produk/${editId}`, {
      nama: editNama,
      harga: editHarga
    })
      .then(() => {
        // Reset edit state
        setEditId(null);
        setEditNama("");
        setEditHarga(0);
        
        // Refresh product list
        fetchProduk();
      })
      .catch(err => console.error("Error saat update:", err));
  };

  const handleCancelEdit = () => {
    setEditId(null);
    setEditNama("");
    setEditHarga(0);
  };

  return (
    <div>
      <h2>Daftar Produk (From Database)</h2>
      
      {editId !== null && (
        <div>
          <h3>Edit Produk</h3>
          <div>
            <label>Nama: </label>
            <input 
              type="text" 
              value={editNama} 
              onChange={(e) => setEditNama(e.target.value)} 
            />
          </div>
          <div>
            <label>Harga: </label>
            <input 
              type="number" 
              value={editHarga} 
              onChange={(e) => setEditHarga(Number(e.target.value))} 
            />
          </div>
          <div>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleCancelEdit}>Cancel</button>
          </div>
        </div>
      )}
      
      <ul>
        {produk.map((item) => (
          <li key={item.id}>
            {item.nama} - Rp{item.harga}
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProdukList;