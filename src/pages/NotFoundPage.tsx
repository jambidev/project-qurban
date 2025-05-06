import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Halaman Tidak Ditemukan</h2>
          <p className="text-gray-600 mb-8">
            Maaf, halaman yang Anda cari tidak ditemukan. Silakan kembali ke halaman utama atau hubungi kami jika Anda memerlukan bantuan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/" className="btn btn-primary flex items-center">
              <Home size={20} className="mr-2" />
              Kembali ke Beranda
            </Link>
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-outline flex items-center"
            >
              <ArrowLeft size={20} className="mr-2" />
              Kembali
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;