import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-yellow-400">Surya Ternak</h2>
            <p className="text-gray-400 mb-4">
              Penyedia hewan qurban berkualitas sejak 1993. Menyediakan sapi dan kambing dengan kondisi prima, sehat, dan sesuai syariat.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/suryaternak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Produk
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Produk Kami</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products?type=sapi" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Sapi Qurban
                </Link>
              </li>
              <li>
                <Link to="/products?type=kambing" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Kambing Qurban
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  Cara Pemesanan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Kontak Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Jl. Ibrahim Ripin No.2, Kenali Asam Bawah, Kec. Kota Baru, Kota Jambi, Jambi 36129
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-3 flex-shrink-0" />
                <a href="tel:08127821339" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  0812-7821-339
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-3 flex-shrink-0" />
                <a href="https://wa.me/6281366653939" className="text-gray-400 hover:text-primary transition-colors duration-300">
                  WhatsApp: 0813-6665-3939
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; 2025 Surya Ternak. Hak Cipta Dilindungi.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Developer: <a 
              href="https://github.com/jambidev" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-yellow-400 font-bold hover:underline"
            >
              Mardianto Eka Saputra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;