import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const isMobile = () => {
  if (typeof navigator === 'undefined') return false;
  return /android|iphone|ipad|ipod/i.test(navigator.userAgent);
};

const Hero: React.FC = () => {
  const handleFullscreen = useCallback(() => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) { // Safari
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) { // IE11
      (elem as any).msRequestFullscreen();
    }
  }, []);

  return (
    <section className="relative h-screen flex items-center">
      {/* Fullscreen Icon - only on mobile */}
      {isMobile() && (
        <button
          aria-label="Fullscreen"
          onClick={handleFullscreen}
          className="fixed top-4 right-4 z-20 bg-black/50 hover:bg-black/80 p-2 rounded-full md:hidden"
          style={{ border: 'none' }}
        >
          {/* SVG Fullscreen Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M16 3h3a2 2 0 0 1 2 2v3" />
            <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
        </button>
      )}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto transform -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/videos/benteng.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight fade-in">
            Hewan Qurban <span className="text-primary">Berkualitas</span> untuk Ibadah yang Sempurna
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed fade-in" style={{ animationDelay: '0.2s' }}>
            Surya Ternak menyediakan sapi dan kambing pilihan untuk ibadah qurban Anda. Hewan sehat, berkualitas, dan sesuai syariat Islam.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 fade-in" style={{ animationDelay: '0.4s' }}>
            <Link 
              to="/products" 
              className="btn btn-primary flex items-center justify-center"
            >
              <span>Lihat Produk</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
            
            <a 
              href="https://wa.me/6281366653939?text=Saya tertarik dengan hewan qurban Surya Ternak" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline border-white text-white hover:bg-white/20 hover:text-white hover:border-white"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll untuk melihat lebih banyak</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;