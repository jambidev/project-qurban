import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ProductDetailCarouselProps = {
  images: string[];
  name: string;
};

const ProductDetailCarousel: React.FC<ProductDetailCarouselProps> = ({ images, name }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Default images if none provided
  const imageUrls = images.length > 0 ? images : [
    '/assets/img/sapi.jpg',
    '/assets/img/kambing.jpg',
  ];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? imageUrls.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === imageUrls.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-lg h-96 bg-gray-100">
        <img
          src={imageUrls[activeIndex]}
          alt={`${name} - Image ${activeIndex + 1}`}
          className="w-full h-full object-cover"
        />
        
        {/* Navigation arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 flex items-center justify-center shadow-md hover:bg-white transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 flex items-center justify-center shadow-md hover:bg-white transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      {/* Thumbnails */}
      <div className="mt-4 flex items-center justify-center space-x-2">
        {imageUrls.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === activeIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to image ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailCarousel;