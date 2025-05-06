import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedAnimals, getAnimalsByType } from '../../data/animals';
import { formatPrice, formatWeight } from '../../utils/formatters';
import { Animal } from '../../types';

const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'sapi' | 'kambing'>('all');
  
  const getDisplayAnimals = (): Animal[] => {
    switch (activeTab) {
      case 'sapi':
        return getAnimalsByType('sapi').filter(animal => animal.featured);
      case 'kambing':
        return getAnimalsByType('kambing').filter(animal => animal.featured);
      default:
        return getFeaturedAnimals();
    }
  };
  
  const displayAnimals = getDisplayAnimals();

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Produk <span className="text-primary">Unggulan</span> Kami
          </h2>
          <p className="text-gray-600">
            Pilihan hewan qurban berkualitas tinggi yang telah kami seleksi dengan ketat untuk memastikan kondisi kesehatan yang prima dan kualitas daging terbaik.
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-lg overflow-hidden shadow-sm border">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setActiveTab('sapi')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'sapi'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Sapi
            </button>
            <button
              onClick={() => setActiveTab('kambing')}
              className={`px-6 py-3 font-medium transition-colors ${
                activeTab === 'kambing'
                  ? 'bg-primary text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Kambing
            </button>
          </div>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayAnimals.map((animal) => (
            <div 
              key={animal.id} 
              className="card group hover:translate-y-[-5px]"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={animal.type === 'sapi' 
                     ? "/assets/img/sapi.jpg" 
                     : "/assets/img/kambing.jpg"
                   }
                  alt={animal.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="badge bg-primary text-white">
                    {animal.class}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{animal.name}</h3>
                  <div className="bg-secondary/10 text-secondary font-medium rounded-full px-3 py-1 text-sm">
                    {formatWeight(animal.weight)}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-600">{animal.age}</span>
                  <span className="text-lg font-bold text-primary">
                    {formatPrice(animal.price)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between space-x-2">
                  <Link
                    to={`/products/${animal.id}`}
                    className="btn btn-outline text-sm w-1/2"
                  >
                    Detail
                  </Link>
                  <Link
                    to={`/order?productId=${animal.id}`}
                    className="btn btn-primary text-sm w-1/2"
                  >
                    Pesan Sekarang
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="btn btn-outline px-8"
          >
            Lihat Semua Produk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;