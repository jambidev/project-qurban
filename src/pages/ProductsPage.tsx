import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllAnimals } from '../data/animals';
import ProductCard from '../components/products/ProductCard';
import PriceListTable from '../components/common/PriceListTable';
import { Animal } from '../types';
import 'animate.css';

const ProductsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') as 'sapi' | 'kambing' | null;
  
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [animalType, setAnimalType] = useState<'all' | 'sapi' | 'kambing'>(initialType ?? 'all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000000]);
  const [weightRange, setWeightRange] = useState<[number, number]>([0, 800]);
  
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>(getAllAnimals());
  
  // Apply filters when they change
  useEffect(() => {
    let result = getAllAnimals();
    
    // Filter by type
    if (animalType !== 'all') {
      result = result.filter(animal => animal.type === animalType);
    }
    
    // Filter by price range
    result = result.filter(
      animal => animal.price >= priceRange[0] && animal.price <= priceRange[1]
    );
    
    // Filter by weight range
    result = result.filter(
      animal => animal.weight >= weightRange[0] && animal.weight <= weightRange[1]
    );
    
    setFilteredAnimals(result);
  }, [animalType, priceRange, weightRange]);
  
  // Initialize filters from URL params if present
  useEffect(() => {
    if (initialType) {
      setAnimalType(initialType as 'sapi' | 'kambing');
    }
  }, [initialType]);

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <div 
        className="relative bg-gradient-to-r from-secondary to-secondary-light text-white py-24"
        style={{
          backgroundImage: "url('https://sipinter-peternakan.kaltimprov.go.id/storages/galur/1652250464.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/80"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeInDown">Katalog Hewan Qurban</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto animate__animated animate__fadeInUp">
            Pilih hewan qurban berkualitas sesuai dengan kebutuhan Anda. Kami menyediakan berbagai pilihan sapi dan kambing dengan kondisi kesehatan terbaik.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 mb-6 lg:mb-0">
            <div className="bg-white rounded-lg shadow-sm border p-4 sm:p-6">
              <h2 className="text-lg font-bold mb-4 sm:mb-6">Filter</h2>
              
              {/* Mobile Filters */}
              <div className="block lg:hidden mb-4">
                <div className="bg-white rounded-lg shadow-sm border p-4">
                  {/* Animal Type Filter */}
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-sm">Jenis Hewan</h3>
                    <div className="flex space-x-2">
                      {['all', 'sapi', 'kambing'].map((type) => (
                        <label key={type} className="flex items-center">
                          <input
                            type="radio"
                            name="animalType"
                            value={type}
                            checked={animalType === type}
                            onChange={() => setAnimalType(type as 'all' | 'sapi' | 'kambing')}
                            className="mr-1"
                          />
                          <span className="text-xs">{type === 'all' ? 'Semua' : type === 'sapi' ? 'Sapi' : 'Kambing'}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-sm">Rentang Harga</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <select 
                        className="w-full p-1 text-xs border rounded"
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      >
                        <option value={0}>Min Harga</option>
                        <option value={1000000}>Rp 1 Jt</option>
                        <option value={5000000}>Rp 5 Jt</option>
                      </select>
                      <select 
                        className="w-full p-1 text-xs border rounded"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      >
                        <option value={100000000}>Max Harga</option>
                        <option value={10000000}>Rp 10 Jt</option>
                        <option value={30000000}>Rp 30 Jt</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    className="w-full py-2 text-xs bg-secondary text-white rounded hover:bg-secondary-dark transition-colors"
                    onClick={() => {
                      setAnimalType('all');
                      setPriceRange([0, 100000000]);
                      setWeightRange([0, 800]);
                    }}
                  >
                    Reset Filter
                  </button>
                </div>
              </div>

              {/* Desktop Filters */}
              <div className="hidden lg:block">
                {/* Full filter content from previous implementation */}
                {/* ... (previous filter implementation) ... */}
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* View Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <h2 className="text-base sm:text-xl font-bold mb-2 sm:mb-0">
                {filteredAnimals.length} Produk Ditemukan
              </h2>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">Tampilan:</span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  aria-label="Grid view"
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-2 rounded ${
                    viewMode === 'table'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  aria-label="Table view"
                >
                  Tabel
                </button>
              </div>
            </div>
            
            {/* Products Display */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 sm:gap-4">
                {filteredAnimals.map((animal) => (
                  <ProductCard key={animal.id} animal={animal} />
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {animalType !== 'kambing' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Sapi Qurban</h3>
                    <PriceListTable animals={getAllAnimals()} type="sapi" />
                  </div>
                )}
                
                {animalType !== 'sapi' && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Kambing Qurban</h3>
                    <PriceListTable animals={getAllAnimals()} type="kambing" />
                  </div>
                )}
              </div>
            )}
            
            {filteredAnimals.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">Tidak ada produk yang ditemukan sesuai filter Anda.</p>
                <button 
                  className="mt-4 px-6 py-2 bg-secondary text-white rounded hover:bg-secondary-dark transition-colors"
                  onClick={() => {
                    // Reset all filters
                    setAnimalType('all');
                    setPriceRange([0, 100000000]);
                    setWeightRange([0, 800]);
                  }}
                >
                  Reset Filter
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;