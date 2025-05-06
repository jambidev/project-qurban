import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import 'animate.css';

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://awsimages.detik.net.id/community/media/visual/2022/12/12/sapi-bali_169.jpeg?w=650')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/85"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate__animated animate__fadeInDown">
            Pesan Hewan Qurban Anda Sekarang
          </h2>
          
          <p className="text-lg opacity-90 mb-8 animate__animated animate__fadeInUp">
            Jangan tunggu hingga mendekati Hari Raya Idul Adha. Pesan hewan qurban Anda sekarang untuk mendapatkan pilihan terbaik dan harga spesial.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products" 
              className="btn bg-primary hover:bg-primary-dark text-white flex items-center justify-center animate__animated animate__fadeInLeft"
            >
              <span>Lihat Produk</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
            
            <a 
              href="https://wa.me/6281366653939?text=Saya ingin memesan hewan qurban" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-white text-secondary hover:bg-gray-100 animate__animated animate__fadeInRight"
            >
              Hubungi via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;