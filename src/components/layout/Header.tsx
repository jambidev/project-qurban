import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ShoppingCart } from 'lucide-react';
import 'animate.css';
import { useCart } from '../../context/CartContext';

const isMobile = () => {
  if (typeof navigator === 'undefined') return false;
  return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
};

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { getTotalItems } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Produk', path: '/products' },
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Kontak', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleFullscreen = useCallback(() => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) {
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) {
      (elem as any).msRequestFullscreen();
    }
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="z-10 text-2xl font-bold text-primary animate__animated animate__fadeIn">
          Surya Ternak
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors duration-300 animate__animated animate__fadeIn ${
                isActive(link.path)
                  ? 'text-primary font-semibold'
                  : 'text-gray-700 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <a
            href="tel:08127821339"
            className="flex items-center text-secondary hover:text-secondary-dark transition-colors duration-300 animate__animated animate__fadeIn"
          >
            <Phone size={18} className="mr-2" />
            <span className="font-medium">0812-7821-339</span>
          </a>
          <Link
            to="/cart"
            className="relative flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300 animate__animated animate__fadeIn"
          >
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-white text-xs font-bold">
              {getTotalItems()}
            </span>
          </Link>
        </div>

        <div className="flex items-center md:hidden z-10">
          {/* Fullscreen icon, hanya di mobile */}
          {isMobile() && (
            <button
              aria-label="Fullscreen"
              onClick={handleFullscreen}
              className="mr-2 p-2 bg-black/40 hover:bg-black/70 rounded-full"
              style={{ border: 'none' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
                <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
              </svg>
            </button>
          )}
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {isMenuOpen ? (
              <X size={28} className="text-gray-800" />
            ) : (
              <Menu size={28} className={`${isScrolled ? 'text-gray-800' : 'text-white'}`} />
            )}
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-white z-[5] transition-transform duration-300 ease-in-out transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8 p-5">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-xl font-medium animate__animated animate__fadeInRight ${
                  isActive(link.path)
                    ? 'text-primary font-semibold'
                    : 'text-gray-800 hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 flex flex-col items-center space-y-4">
              <a
                href="tel:08127821339"
                className="flex items-center text-secondary hover:text-secondary-dark transition-colors duration-300"
              >
                <Phone size={18} className="mr-2" />
                <span className="font-medium">0812-7821-339</span>
              </a>
              <Link
                to="/cart"
                className="flex items-center space-x-2 px-5 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors duration-300"
              >
                <ShoppingCart size={20} />
                <span>Keranjang ({getTotalItems()})</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;