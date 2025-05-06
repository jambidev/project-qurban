import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { getAnimalById, getAnimalsByType } from '../data/animals';
import { formatPrice, formatWeight } from '../utils/formatters';
import ProductDetailCarousel from '../components/common/ProductDetailCarousel';
import ProductCard from '../components/products/ProductCard';
import { Animal } from '../types';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const animal = getAnimalById(id || '');
  const [relatedAnimals, setRelatedAnimals] = useState<Animal[]>([]);
  
  // If animal not found, navigate to products page
  useEffect(() => {
    if (!animal && id) {
      navigate('/products');
    }
    
    // Get related animals (same type but different id)
    if (animal) {
      const related = getAnimalsByType(animal.type)
        .filter(a => a.id !== animal.id)
        .slice(0, 3);
      setRelatedAnimals(related);
    }
  }, [animal, id, navigate]);
  
  if (!animal) {
    return null; // This will be brief before redirection happens
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="flex items-center mb-8 text-sm">
          <Link to="/" className="text-gray-600 hover:text-primary">Beranda</Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="text-gray-600 hover:text-primary">Produk</Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-primary">{animal.name}</span>
        </div>
        
        {/* Back button */}
        <div className="mb-6">
          <Link 
            to="/products" 
            className="inline-flex items-center text-secondary hover:text-secondary-dark"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Kembali ke Katalog</span>
          </Link>
        </div>
        
        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <ProductDetailCarousel images={animal.images} name={animal.name} />
            </div>
            
            {/* Product Info */}
            <div>
              <div className="flex items-center mb-2">
                <span className="badge bg-primary text-white mr-2">
                  {animal.class}
                </span>
                {animal.stock <= 2 && (
                  <span className="badge bg-red-600 text-white">
                    Stok Terbatas
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{animal.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-secondary/10 text-secondary font-medium rounded-full px-3 py-1">
                  {formatWeight(animal.weight)}
                </div>
                <span className="text-gray-600">{animal.age}</span>
              </div>
              
              <div className="text-3xl font-bold text-primary mb-6">
                {formatPrice(animal.price)}
              </div>
              
              <p className="text-gray-600 mb-6">{animal.description}</p>
              
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Manfaat & Kualitas:</h3>
                <ul className="space-y-2">
                  {animal.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={18} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex items-center space-x-4">
                <Link
                  to={`/order?productId=${animal.id}`}
                  className="btn btn-primary flex-grow"
                >
                  Pesan Sekarang
                </Link>
                <button 
                  className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
                  aria-label="Add to cart"
                >
                  <ShoppingCart size={20} className="text-gray-700" />
                </button>
              </div>
              
              <div className="border-t border-gray-200 mt-8 pt-6">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-2">Kategori:</span>
                  <Link to={`/products?type=${animal.type}`} className="text-secondary hover:underline">
                    {animal.type === 'sapi' ? 'Sapi Qurban' : 'Kambing Qurban'}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Info Tabs */}
          <div className="border-t border-gray-200">
            <div className="p-6">
              <h2 className="text-xl font-bold mb-4">Informasi Tambahan</h2>
              <div className="prose max-w-none">
                <h3>Spesifikasi</h3>
                <table className="min-w-full divide-y divide-gray-200 border mb-8">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-3 bg-gray-50 text-sm font-medium text-gray-500">Jenis</td>
                      <td className="px-6 py-3 text-sm text-gray-700">
                        {animal.type === 'sapi' ? 'Sapi' : 'Kambing'}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 bg-gray-50 text-sm font-medium text-gray-500">Kelas</td>
                      <td className="px-6 py-3 text-sm text-gray-700">{animal.class}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 bg-gray-50 text-sm font-medium text-gray-500">Bobot</td>
                      <td className="px-6 py-3 text-sm text-gray-700">{formatWeight(animal.weight)}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 bg-gray-50 text-sm font-medium text-gray-500">Umur</td>
                      <td className="px-6 py-3 text-sm text-gray-700">{animal.age}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3 bg-gray-50 text-sm font-medium text-gray-500">Stok</td>
                      <td className="px-6 py-3 text-sm text-gray-700">{animal.stock} ekor</td>
                    </tr>
                  </tbody>
                </table>
                
                <h3>Keterangan</h3>
                <p>
                  Semua hewan qurban kami telah melalui pemeriksaan kesehatan oleh dokter hewan terakreditasi dan memenuhi syarat-syarat syariat untuk ibadah qurban.
                </p>
                <p>
                  Kami menjamin kondisi hewan dalam keadaan sehat, terawat, dan siap untuk dijadikan hewan qurban. Pengiriman dapat dilakukan sesuai dengan jadwal yang disepakati.
                </p>
                
                <h3>Syarat dan Ketentuan</h3>
                <ul>
                  <li>Pembayaran dapat dilakukan melalui transfer bank atau tunai</li>
                  <li>Harga sewaktu-waktu dapat berubah tanpa pemberitahuan sebelumnya</li>
                  <li>Spesifikasi hewan dapat berubah sesuai dengan ketersediaan stok</li>
                  <li>Pengiriman dilakukan sesuai dengan jadwal yang disepakati</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedAnimals.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Produk Terkait</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedAnimals.map((animal) => (
                <ProductCard key={animal.id} animal={animal} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;