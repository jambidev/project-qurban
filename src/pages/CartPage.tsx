import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { formatPrice } from '../utils/formatters';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  
  const subtotal = getTotalPrice();

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Keranjang Belanja</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-700 mb-3">Keranjang Anda Kosong</h2>
            <p className="text-gray-600 mb-6">
              Sepertinya Anda belum menambahkan produk apapun ke keranjang.
            </p>
            <Link to="/products" className="btn btn-primary">
              Lihat Produk
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Produk dalam Keranjang</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-4 pr-4">Produk</th>
                          <th className="text-center py-4 px-4">Harga</th>
                          <th className="text-center py-4 px-4">Jumlah</th>
                          <th className="text-right py-4 pl-4">Subtotal</th>
                          <th className="text-right py-4 pl-4">Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id} className="border-b">
                            <td className="py-4 pr-4">
                              <div className="flex items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded overflow-hidden mr-4">
                                  <img
                                    src={item.type === 'sapi' 
                                      ? "/assets/sapi-bali-1.jpg" 
                                      : "/assets/kambing-1.jpg"
                                    }
                                    alt={item.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div>
                                  <h3 className="font-semibold">{item.name}</h3>
                                  <p className="text-gray-600 text-sm">
                                    {item.weight} Kg • {item.age}
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td className="text-center py-4 px-4">
                              {formatPrice(item.price)}
                            </td>
                            <td className="text-center py-4 px-4">
                              <div className="flex items-center justify-center">
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 flex items-center justify-center border rounded-l"
                                >
                                  -
                                </button>
                                <span className="w-12 h-8 flex items-center justify-center border-t border-b">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center border rounded-r"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="text-right py-4 pl-4 font-semibold">
                              {formatPrice(item.price * item.quantity)}
                            </td>
                            <td className="text-right py-4 pl-4">
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700"
                                aria-label="Remove item"
                              >
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-24">
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-4">Ringkasan Pesanan</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pengiriman</span>
                      <span className="text-green-600">Gratis</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span className="text-primary">{formatPrice(subtotal)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Link to="/order" className="btn btn-primary w-full mb-4">
                    Lanjutkan ke Pembayaran
                  </Link>
                  
                  <Link to="/products" className="block text-center text-secondary hover:text-secondary-dark">
                    Lanjutkan Belanja
                  </Link>
                </div>
                
                <div className="bg-gray-50 p-4 border-t">
                  <h3 className="font-semibold mb-2">Informasi Pengiriman</h3>
                  <p className="text-gray-600 text-sm">
                    Pengiriman gratis untuk area Kota Jambi. Untuk area lainnya, biaya pengiriman akan dihitung berdasarkan lokasi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;