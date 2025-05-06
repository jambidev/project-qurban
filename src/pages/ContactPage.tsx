import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Map from '../components/common/Map';
import 'animate.css';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      // Hide success message after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-16">
      <div 
        className="relative py-24 bg-cover bg-center mb-16" 
        style={{ 
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxAjd-yagSt3o4oCYlC_Q5xtIIGhAz9l2RFA&s')",
        }}
      >
        <div className="absolute inset-0 bg-secondary/90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">Hubungi Kami</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto animate__animated animate__fadeInUp">
            Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan tentang produk atau layanan kami.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Telepon & WhatsApp</h3>
            <p className="text-gray-600 mb-4">Hubungi kami via telepon atau WhatsApp</p>
            <a href="tel:08127821339" className="block text-primary font-semibold hover:underline">
              0812-7821-339
            </a>
            <a href="https://wa.me/6281366653939" className="block text-primary font-semibold hover:underline">
              WhatsApp: 0813-6665-3939
            </a>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Alamat</h3>
            <p className="text-gray-600 mb-4">Kunjungi peternakan kami</p>
            <p className="text-gray-800">
              Jl. Ibrahim Ripin No.2, Kenali Asam Bawah, <br />
              Kec. Kota Baru, Kota Jambi, <br />
              Jambi 36129
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="text-primary w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">Jam Operasional</h3>
            <p className="text-gray-600 mb-4">Kami buka setiap hari</p>
            <p className="text-gray-800">
              Senin - Jumat: 08.00 - 17.00 <br />
              Sabtu: 08.00 - 15.00 <br />
              Minggu: 09.00 - 14.00
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>
            
            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p className="text-green-700">
                  Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.
                </p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="Masukkan alamat email Anda"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Nomor Telepon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input"
                  placeholder="Masukkan nomor telepon Anda"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input"
                  placeholder="Tulis pesan Anda di sini"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </form>
          </div>
          
          {/* Map */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Lokasi Kami</h2>
            <Map />
          </div>
        </div>
        
        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Pertanyaan Umum</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">Bagaimana cara memesan hewan qurban?</h3>
              <p className="text-gray-600">
                Anda dapat memesan hewan qurban melalui website kami, WhatsApp, atau datang langsung ke peternakan kami. Kami akan membantu Anda dalam proses pemesanan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">Apakah ada biaya pengiriman?</h3>
              <p className="text-gray-600">
                Kami menyediakan layanan pengiriman gratis untuk area Kota Jambi. Untuk area di luar Kota Jambi, biaya pengiriman akan disesuaikan dengan jarak lokasi.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">Kapan waktu terbaik untuk memesan hewan qurban?</h3>
              <p className="text-gray-600">
                Kami menyarankan untuk memesan hewan qurban minimal 1 bulan sebelum Hari Raya Idul Adha untuk mendapatkan pilihan terbaik dan memastikan ketersediaan.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-lg font-semibold mb-3">Apakah hewan qurban memenuhi syarat syariat?</h3>
              <p className="text-gray-600">
                Ya, semua hewan qurban kami telah dipastikan memenuhi syarat dan ketentuan syariat Islam untuk ibadah qurban. Kami juga menyediakan sertifikat kesehatan hewan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;