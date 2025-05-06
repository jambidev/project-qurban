import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { formatPrice, formatWeight } from '../../utils/formatters';
import { Animal } from '../../types';
import { useCart } from '../../context/CartContext';

type ProductCardProps = {
  animal: Animal;
};

const ProductCard: React.FC<ProductCardProps> = ({ animal }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(animal, quantity);
    // Optional: Show a toast or notification
  };

  return (
    <div className="card group relative w-full shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={animal.type === 'sapi' 
            ? "/assets/img/sapi.jpg" 
            : "/assets/img/kambing.jpg"
          } 
          alt={animal.name} 
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 flex space-x-1">
          {animal.stock === 0 && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-[10px] sm:text-xs">
              Habis
            </span>
          )}
          {animal.discount > 0 && (
            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-[10px] sm:text-xs">
              {animal.discount}%
            </span>
          )}
        </div>
      </div>
      
      <div className="p-3 sm:p-4 space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-sm sm:text-base font-bold text-gray-800 truncate">{animal.name}</h3>
          <span className="text-xs sm:text-sm text-gray-600">{formatWeight(animal.weight)} Kg</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-base sm:text-xl font-bold text-secondary">
            {formatPrice(animal.price)}
          </span>
          <span className="text-xs sm:text-sm text-gray-500">{animal.stock} tersedia</span>
        </div>
      </div>
      
      <div className="grid grid-cols-12 gap-1 items-center">
        {/* Order Button */}
        <Link
          to={`/order?productId=${animal.id}`}
          className="btn btn-outline btn-xs col-span-4 justify-center items-center flex p-0 h-5 min-h-0 text-center"
        >
          <span className="text-[10px] leading-none">Lanjutkan</span>
        </Link>

        {/* Quantity Selector */}
        <div className="flex items-center justify-center col-span-4 space-x-0.5">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))} 
            className="btn btn-xs btn-circle btn-outline p-0 w-5 h-5 min-h-0 text-xs"
            aria-label="Decrease quantity"
          >-</button>
          <span className="text-xs font-medium w-4 text-center">{quantity}</span>
          <button 
            onClick={() => setQuantity(Math.min(animal.stock, quantity + 1))} 
            className="btn btn-xs btn-circle btn-outline p-0 w-5 h-5 min-h-0 text-xs"
            aria-label="Increase quantity"
          >+</button>
        </div>

        {/* Cart Button */}
        <button 
          onClick={handleAddToCart}
          className="btn btn-icon btn-primary btn-xs col-span-4 justify-center items-center flex p-0 h-5 min-h-0 text-center"
          disabled={animal.stock === 0}
          aria-label="Add to cart"
        >
          <ShoppingCart size={10} className="text-[10px] leading-none" />
        </button>
      </div>

      <div className="text-xs sm:text-sm text-gray-500 text-center">
        Stok tersedia: {animal.stock} ekor
      </div>
    </div>
  );
};

export default ProductCard;