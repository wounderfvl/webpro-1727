// src/components/TambahProduk.tsx
import React, { useState, FormEvent, ChangeEvent } from 'react';
import axios from 'axios';

interface Produk {
  nama: string;
  harga: string;
}

function TambahProduk() {
  const [nama, setNama] = useState<string>('');
  const [harga, setHarga] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validasi
    if (!nama || !harga) {
      setError('Nama dan Harga wajib diisi');
      return;
    }
    
    setError('');
    
    axios.post<Produk>('http://localhost:3001/produk', { nama, harga })
      .then((res) => {
        console.log('Produk berhasil ditambah:', res.data);
        setNama('');
        setHarga('');
      })
      .catch((err) => {
        console.error('Error menambah produk:', err);
      });
  };

  return (
    <div>
      <h2>Tambah Produk</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Produk: </label>
          <input 
            type="text" 
            value={nama} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNama(e.target.value)} 
          />
        </div>
        <div>
          <label>Harga: </label>
          <input 
            type="number" 
            value={harga} 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setHarga(e.target.value)} 
          />
        </div>
        <button type="submit">Simpan</button>
      </form>
    </div>
  );
}

export default TambahProduk;