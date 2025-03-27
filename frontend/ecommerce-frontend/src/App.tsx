// src/App.jsx
import React from 'react';
import TambahProduk from './components/TambahProduk';
import ProdukList from './components/ProdukList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Aplikasi E-Commerce Sederhana
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto space-y-6">
        {/* Form for Adding Products */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <TambahProduk />
        </section>

        {/* Product List */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <ProdukList />
        </section>
      </main>
    </div>
  );
}

export default App;