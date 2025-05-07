import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  ShoppingCart,
  CreditCard,
  Truck,
  CheckCircle,
  HelpCircle,
} from "lucide-react";
import "animate.css";

const OrderGuidePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24 bg-white">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 animate__animated animate__fadeInDown">
        Cara Pembelian
      </h1>

      <div className="max-w-4xl mx-auto">
        {/* Hero section */}
        <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-8 rounded-lg shadow-lg mb-12 animate__animated animate__fadeIn">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Proses Pembelian yang Mudah
              </h2>
              <p className="text-lg">
                Kami menyediakan proses pembelian yang sederhana dan transparan
                untuk memastikan Anda mendapatkan hewan ternak berkualitas
                dengan cara yang nyaman.
              </p>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1560695979-a252bba4f542?w=600&q=80"
                alt="Hewan Ternak Berkualitas"
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Step by step guide */}
        <div className="space-y-16">
          <div className="animate__animated animate__fadeInUp">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                1
              </div>
              <h2 className="text-2xl font-semibold text-primary">
                Pilih Produk
              </h2>
            </div>
            <div className="pl-16">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <img
                      src="https://images.unsplash.com/photo-1584935358346-2d43b1d158ce?w=500&q=80"
                      alt="Pilih Produk"
                      className="rounded-lg shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-6">
                    <p className="text-gray-700 mb-4">
                      Pilih produk hewan ternak yang Anda inginkan dari halaman
                      produk kami. Anda dapat melihat detail produk, harga, dan
                      ketersediaan stok.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
                      <h3 className="font-medium text-gray-800 mb-2">
                        Tips Memilih:
                      </h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Perhatikan berat dan usia hewan</li>
                        <li>Lihat foto detail untuk memastikan kualitas</li>
                        <li>Baca deskripsi produk dengan seksama</li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <Link
                        to="/products"
                        className="inline-flex items-center text-primary hover:text-primary-dark font-medium"
                      >
                        <ShoppingCart size={18} className="mr-2" />
                        Lihat Produk Kami
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-1s">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                2
              </div>
              <h2 className="text-2xl font-semibold text-primary">
                Tambahkan ke Keranjang
              </h2>
            </div>
            <div className="pl-16">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 md:pr-6 order-2 md:order-1">
                    <p className="text-gray-700 mb-4">
                      Klik tombol "Tambah ke Keranjang" pada produk yang Anda
                      pilih. Anda dapat menambahkan beberapa produk ke keranjang
                      sekaligus.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-secondary">
                      <h3 className="font-medium text-gray-800 mb-2">
                        Fitur Keranjang:
                      </h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Ubah jumlah pembelian dengan mudah</li>
                        <li>Hapus produk yang tidak diinginkan</li>
                        <li>Lihat total harga secara real-time</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/3 mb-4 md:mb-0 order-1 md:order-2">
                    <img
                      src="https://images.unsplash.com/photo-1557821552-17105176677c?w=500&q=80"
                      alt="Tambah ke Keranjang"
                      className="rounded-lg shadow-sm w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                3
              </div>
              <h2 className="text-2xl font-semibold text-primary">Checkout</h2>
            </div>
            <div className="pl-16">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <img
                      src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80"
                      alt="Checkout"
                      className="rounded-lg shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-6">
                    <p className="text-gray-700 mb-4">
                      Setelah selesai memilih produk, klik ikon keranjang di
                      pojok kanan atas untuk melihat keranjang belanja Anda.
                      Klik tombol "Lanjutkan ke Pembayaran" untuk melanjutkan
                      proses pembelian.
                    </p>
                    <div className="flex items-center bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                      <CheckCircle size={24} className="text-green-500 mr-3" />
                      <p className="text-green-800">
                        Proses checkout kami aman dan terenkripsi untuk
                        melindungi data Anda
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                4
              </div>
              <h2 className="text-2xl font-semibold text-primary">
                Isi Formulir Pemesanan
              </h2>
            </div>
            <div className="pl-16">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 md:pr-6 order-2 md:order-1">
                    <p className="text-gray-700 mb-4">
                      Isi formulir pemesanan dengan data diri Anda yang valid,
                      termasuk nama, alamat, nomor telepon, dan metode
                      pembayaran yang diinginkan.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-500">
                      <h3 className="font-medium text-gray-800 mb-2">
                        Informasi Penting:
                      </h3>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Pastikan alamat pengiriman sudah benar</li>
                        <li>Berikan nomor telepon yang aktif</li>
                        <li>Pilih metode pembayaran yang tersedia</li>
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/3 mb-4 md:mb-0 order-1 md:order-2">
                    <img
                      src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&q=80"
                      alt="Isi Formulir"
                      className="rounded-lg shadow-sm w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-4s">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                5
              </div>
              <h2 className="text-2xl font-semibold text-primary">
                Konfirmasi Pembayaran
              </h2>
            </div>
            <div className="pl-16">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 mb-4 md:mb-0">
                    <img
                      src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500&q=80"
                      alt="Konfirmasi Pembayaran"
                      className="rounded-lg shadow-sm w-full h-auto"
                    />
                  </div>
                  <div className="md:w-2/3 md:pl-6">
                    <p className="text-gray-700 mb-4">
                      Setelah menyelesaikan pemesanan, Anda akan menerima
                      informasi rekening untuk transfer pembayaran. Lakukan
                      pembayaran sesuai dengan total yang tertera dan
                      konfirmasikan pembayaran Anda melalui WhatsApp atau
                      telepon ke nomor yang tercantum.
                    </p>
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center bg-blue-50 p-3 rounded-lg">
                        <CreditCard size={20} className="text-blue-500 mr-2" />
                        <span className="text-blue-800 text-sm">
                          Transfer Bank
                        </span>
                      </div>
                      <div className="flex items-center bg-green-50 p-3 rounded-lg">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png"
                          alt="WhatsApp"
                          className="w-5 h-5 mr-2"
                        />
                        <span className="text-green-800 text-sm">WhatsApp</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-5s">
            <div className="flex items-center mb-4">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mr-4">
                6
              </div>
              <h2 className="text-2xl font-semibold text-primary">
                Pengiriman
              </h2>
            </div>
            <div className="pl-16">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 md:pr-6 order-2 md:order-1">
                    <p className="text-gray-700 mb-4">
                      Setelah pembayaran dikonfirmasi, kami akan memproses
                      pesanan Anda dan mengirimkan hewan ternak sesuai dengan
                      alamat yang Anda berikan. Untuk pembelian hewan qurban,
                      kami juga menyediakan layanan penyembelihan sesuai
                      syariat.
                    </p>
                    <div className="flex items-center bg-primary-light bg-opacity-20 p-4 rounded-lg">
                      <Truck size={24} className="text-primary mr-3" />
                      <p className="text-primary-dark">
                        Pengiriman aman dengan armada khusus hewan ternak
                      </p>
                    </div>
                  </div>
                  <div className="md:w-1/3 mb-4 md:mb-0 order-1 md:order-2">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
                      alt="Pengiriman"
                      className="rounded-lg shadow-sm w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help section */}
        <div className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-200 animate__animated animate__fadeIn animate__delay-5s">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
              <div className="bg-secondary text-white p-5 rounded-full">
                <HelpCircle size={48} />
              </div>
            </div>
            <div className="md:w-3/4 md:pl-6">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Butuh Bantuan?
              </h3>
              <p className="text-gray-700 mb-6">
                Jika Anda memiliki pertanyaan atau membutuhkan bantuan dalam
                proses pembelian, jangan ragu untuk menghubungi kami melalui:
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a
                  href="tel:08127821339"
                  className="flex items-center bg-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full sm:w-auto justify-center"
                >
                  <Phone size={20} className="text-secondary mr-3" />
                  <span className="font-medium">0812-7821-339</span>
                </a>
                <a
                  href="https://wa.me/628127821339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-green-500 text-white px-5 py-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full sm:w-auto justify-center"
                >
                  <svg
                    viewBox="0 0 32 32"
                    className="w-5 h-5 mr-3"
                    fill="currentColor"
                  >
                    <path d="M16.1,0C7.4,0,0.3,7.1,0.3,15.8c0,3,0.8,5.9,2.4,8.4L0,32l8-2.5c2.4,1.3,5.1,2,7.9,2c8.7,0,15.8-7.1,15.8-15.8 C31.7,7.1,24.8,0,16.1,0z M25.2,22.4c-0.5,1.4-2.5,2.5-4.1,2.8c-1.1,0.2-2.5,0.3-7.3-1.6c-6.1-2.4-10.1-8.2-10.4-8.6 c-0.3-0.4-2.4-3.2-2.4-6.1c0-2.9,1.5-4.3,2.1-4.9c0.5-0.5,1.3-0.8,2.1-0.8c0.3,0,0.5,0,0.7,0c0.6,0,0.9,0.1,1.4,1.1 c0.5,1.3,1.7,4.5,1.9,4.8c0.1,0.3,0.3,0.7,0.1,1.1c-0.2,0.4-0.3,0.6-0.6,1c-0.3,0.3-0.6,0.6-0.9,1c-0.3,0.3-0.6,0.6-0.3,1.2 c0.3,0.6,1.5,2.5,3.1,4c2.1,1.9,3.9,2.5,4.5,2.8c0.6,0.2,0.9,0.2,1.2-0.1c0.4-0.4,1.5-1.8,1.9-2.4c0.4-0.6,0.8-0.5,1.3-0.3 c0.5,0.2,3.5,1.6,4.1,1.9c0.6,0.3,1,0.5,1.1,0.7C25.7,20.3,25.7,21.1,25.2,22.4z" />
                  </svg>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center animate__animated animate__fadeInUp animate__delay-5s">
          <h3 className="text-2xl font-bold mb-6">Siap untuk memesan?</h3>
          <Link
            to="/products"
            className="btn btn-primary inline-flex items-center px-8 py-4 text-lg"
          >
            <ShoppingCart size={20} className="mr-2" />
            Lihat Produk Kami
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderGuidePage;
