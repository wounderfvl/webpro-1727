// src/components/ProdukList.jsx
import React, { useEffect, useState } from "react";

interface Produk {
  id: number;
  nama: string;
}

function ProdukList() {
  const [produk, setProduk] = useState<Produk[]>([]);
  useEffect(() => {
    // Data statis sementara
    setProduk([
      { id: 1, nama: "Azhka Daeshawnda" },
      { id: 2, nama: "Ansell" },
    ]);
  }, []);
  return (
    <div>
      <h2>Daftar Produk</h2>
      <ul>
        {produk.map((item) => (
          <li key={item.id}>{item.nama}</li>
        ))}
      </ul>
    </div>
  );
}
export default ProdukList;
