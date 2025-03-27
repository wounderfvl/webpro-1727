import React, { useState } from "react";
import TambahProduk from "./components/TambahProduk";
import ProdukList from "./components/ProdukList";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="py-12 bg-gray-100 dark:bg-gray-800 text-center">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 
          transition-colors duration-300"
          >
            Aplikasi E-Commerce Sederhana
          </h1>
          <p
            className="mt-4 text-gray-600 dark:text-gray-400 
          transition-colors duration-300"
          >
            Kelola Produk dengan Mudah
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form for Adding Products */}
          <section
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl 
          overflow-hidden transition-all duration-300"
          >
            <div className="p-6">
              <h2
                className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 
              transition-colors duration-300"
              >
                Tambah Produk
              </h2>
              <TambahProduk />
            </div>
          </section>

          {/* Product List */}
          <section
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl 
          overflow-hidden transition-all duration-300"
          >
            <div className="p-6">
              <h2
                className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 
              transition-colors duration-300"
              >
                Daftar Produk
              </h2>
              <ProdukList />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p
            className="text-gray-600 dark:text-gray-400 
          transition-colors duration-300"
          >
            © 2025 Aplikasi E-Commerce Sederhana by Ansell and Azhka
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
