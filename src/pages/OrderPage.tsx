import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { getAnimalById, animals } from '../data/animals'; // Used for stock management
import { formatPrice } from '../utils/formatters';
import { OrderFormData, Animal } from '../types';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const OrderPage: React.FC = () => {
  const { reduceStockAfterOrder } = useCart();
  const { user } = useAuth();
  const [searchParams] = useSearchParams();
  const productId = searchParams.get('productId');
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);
  const { cart, addToCart, clearCart, getTotalPrice } = useCart();
  
  // Initialize form data
  const initialFormData: OrderFormData = {
    fullName: user?.name || '',
    phone: user?.phone || '',
    address: user?.address || '',
    animalType: '',
    animalId: productId || '',
    quantity: 1, // Default to 1 for direct order
    paymentMethod: 'transfer', // Default payment method
    deliveryDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
    notes: '',
  };
  
  const [formData, setFormData] = useState<OrderFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Load product data if productId is provided
  useEffect(() => {
    if (productId) {
      const animal = getAnimalById(productId);
      if (animal) {
        setSelectedAnimal(animal);
        setFormData(prev => ({
          ...prev,
          animalType: animal.type,
          animalId: animal.id,
        }));
      }
    }
  }, [productId]);
  
  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  // Send WhatsApp message
  const sendWhatsAppMessage = () => {
    const phoneNumber = '6281366653939';
    
    // Calculate total price based on cart items
    const totalPrice = cart.reduce((total, item) => {
      const animal = getAnimalById(item.id);
      return total + (animal ? animal.price * item.quantity : 0);
    }, 0);
    
    // Create detailed cart item list
    const cartItemsList = cart.map(item => {
      const animal = getAnimalById(item.id);
      return `• ${animal?.name || 'Hewan'}: ${item.quantity} ekor (${formatPrice(animal ? animal.price * item.quantity : 0)})`;
    }).join('\n');
    
    const message = `🐄 *PESANAN BARU SURYA TERNAK* 🐐

*INFORMASI PELANGGAN*
• Nama: ${formData.fullName}
• Telepon: ${formData.phone}
• Alamat: ${formData.address}

*RINGKASAN PESANAN*
${cartItemsList}
• Total Harga: ${formatPrice(totalPrice)}

*METODE PEMBAYARAN*
• ${formData.paymentMethod.toUpperCase()}

*TANGGAL PENGIRIMAN*
• ${formData.deliveryDate}

*CATATAN TAMBAHAN*
${formData.notes || 'Tidak ada catatan tambahan'}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  
  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Reduce stock and send WhatsApp message
    setTimeout(() => {
      // Send WhatsApp message
      sendWhatsAppMessage();
      
      // Reduce stock
      reduceStockAfterOrder();
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setTimeout(() => {
        setFormData(initialFormData);
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Formulir Pemesanan
          </h1>
          <p className="text-gray-600">
            Isi formulir berikut untuk memesan hewan qurban pilihan Anda. Kami akan segera menghubungi Anda untuk konfirmasi pemesanan.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={40} className="text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-800 mb-3">Pemesanan Berhasil!</h2>
              <p className="text-green-700 mb-6">
                Terima kasih telah memesan hewan qurban di Surya Ternak. Tim kami akan segera menghubungi Anda untuk konfirmasi pemesanan.
              </p>
              <div className="flex justify-center space-x-4">
                <Link to="/" className="btn btn-outline">
                  Kembali ke Beranda
                </Link>
                <Link to="/products" className="btn btn-primary">
                  Lihat Produk Lainnya
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <form onSubmit={handleSubmit} className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Contact Information */}
                  <div className="md:col-span-2">
                    <h2 className="text-xl font-bold mb-4">Informasi Kontak</h2>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Masukkan nama lengkap Anda"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Nomor Telepon</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="Contoh: 08123456789"
                    />
                  </div>
                  
                  <div className="md:col-span-2 mb-4">
                    <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Alamat Lengkap</label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="input"
                      placeholder="Masukkan alamat lengkap pengiriman">
                    </textarea>
                  </div>
                  
                  {/* Order Information */}
                  <div className="md:col-span-2 border-t pt-6 mt-2">
                    <h2 className="text-xl font-bold mb-4">Informasi Pesanan</h2>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="animalType" className="block text-gray-700 font-medium mb-2">Jenis Hewan</label>
                    <select
                      id="animalType"
                      name="animalType"
                      value={formData.animalType}
                      onChange={handleChange}
                      required
                      className="input"
                    >
                      <option value="">Pilih Jenis Hewan</option>
                      <option value="sapi">Sapi</option>
                      <option value="kambing">Kambing</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="quantity" className="block text-gray-700 font-medium mb-2">Jumlah</label>
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      min={1}
                      className="input"
                    />
                  </div>
                  
                  {/* Selected Product */}
                  {selectedAnimal && (
                    <div className="md:col-span-2 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold mb-2">Produk yang Dipilih:</h3>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="w-16 h-16 bg-gray-200 rounded-md overflow-hidden mr-4">
                              <img
                                src={selectedAnimal.type === 'sapi' 
                                  ? "https://images.pexels.com/photos/422218/pexels-photo-422218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                  : "https://images.pexels.com/photos/162336/sheep-lamb-goats-goat-162336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                }
                                alt={selectedAnimal.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold">{selectedAnimal.name}</h4>
                              <p className="text-gray-600 text-sm">
                                {selectedAnimal.weight} Kg • {selectedAnimal.age}
                              </p>
                            </div>
                          </div>
                          <div className="text-lg font-bold text-primary">
                            {formatPrice(selectedAnimal.price)}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <label htmlFor="paymentMethod" className="block text-gray-700 font-medium mb-2">Metode Pembayaran</label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      required
                      className="input"
                    >
                      <option value="">Pilih Metode Pembayaran</option>
                      <option value="transfer">Transfer Bank</option>
                      <option value="cash">Tunai</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="deliveryDate" className="block text-gray-700 font-medium mb-2">Tanggal Pengiriman</label>
                    <input
                      type="date"
                      id="deliveryDate"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleChange}
                      required
                      className="input"
                    />
                  </div>
                  
                  <div className="md:col-span-2 mb-4">
                    <label htmlFor="notes" className="block text-gray-700 font-medium mb-2">Catatan Tambahan (Opsional)</label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      rows={3}
                      className="input"
                      placeholder="Masukkan catatan tambahan jika ada"
                    ></textarea>
                  </div>
                </div>
                
                <div className="border-t pt-6 mt-6">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                      <p className="text-gray-600 text-sm mb-1">
                        Dengan menekan tombol "Kirim Pesanan", Anda menyetujui syarat dan ketentuan yang berlaku.
                      </p>
                      <p className="text-gray-600 text-sm">
                        Kami akan menghubungi Anda untuk konfirmasi pemesanan dan pembayaran.
                      </p>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-primary min-w-[200px]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Memproses...' : 'Kirim Pesanan'}
                    </button>
                  </div>
                </div>
              </form>

              {/* Order Summary Section */}
              <div className="bg-gray-50 p-6 border-t">
                <h2 className="text-xl font-bold mb-4">Ringkasan Pesanan</h2>
                {cart.length === 0 ? (
                  <p className="text-gray-600">Keranjang kosong</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center border-b pb-2">
                        <div className="flex items-center space-x-4">
                          <img 
                            src={item.type === 'sapi' ? "/assets/img/sapi.jpg" : "/assets/img/kambing.jpg"} 
                            alt={item.name} 
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-gray-600 text-sm">{item.type === 'sapi' ? 'Sapi' : 'Kambing'}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{item.quantity} ekor</p>
                          <p className="text-secondary font-bold">{formatPrice(item.price * item.quantity)}</p>
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between items-center font-bold text-lg">
                      <span>Total Pesanan</span>
                      <span className="text-secondary">{formatPrice(getTotalPrice())}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;