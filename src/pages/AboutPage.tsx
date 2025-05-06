import React from 'react';
import 'animate.css';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div 
        className="relative py-24 bg-cover bg-center mb-16" 
        style={{ 
          backgroundImage: "url('https://trubus.id/wp-content/uploads/2022/11/Menakar-Potensi-Sapi-Bali-Menjadi-Daging-Premium.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-secondary/90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInDown">Tentang Kami</h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto animate__animated animate__fadeInUp">
            Surya Ternak telah menyediakan hewan qurban berkualitas sejak tahun 1993, dengan fokus pada kesehatan hewan dan kepuasan pelanggan.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6">Kisah Kami</h2>
            <p className="text-gray-600 mb-4">
              Didirikan pada tahun 1993, Surya Ternak berawal dari peternakan kecil di Jambi dengan hanya beberapa ekor sapi dan kambing. Dengan tekad untuk memberikan hewan qurban berkualitas terbaik, kami tumbuh menjadi salah satu penyedia hewan qurban terpercaya di Jambi.
            </p>
            <p className="text-gray-600 mb-4">
              Selama lebih dari 30 tahun, kami telah melayani ribuan pelanggan yang mempercayakan ibadah qurban mereka kepada kami. Kami bangga dengan reputasi kami dalam menyediakan hewan qurban yang sehat, berkualitas, dan sesuai dengan syariat Islam.
            </p>
            <p className="text-gray-600">
              Kami berkomitmen untuk terus meningkatkan kualitas pelayanan kami dan memastikan bahwa setiap pelanggan mendapatkan pengalaman terbaik dalam beribadah qurban melalui Surya Ternak.
            </p>
          </div>
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover"
            >
              <source src="/videos/sapi.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        
        {/* Vision & Mission */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Visi & Misi</h2>
            <p className="text-gray-600">
              Kami memiliki tujuan yang jelas untuk membantu masyarakat dalam menunaikan ibadah qurban dengan mudah dan sesuai syariat.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Visi</h3>
              <p className="text-gray-600">
                Menjadi penyedia hewan qurban terpercaya yang mengutamakan kualitas dan kesesuaian syariat, serta memberikan kemudahan bagi masyarakat dalam menunaikan ibadah qurban.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Misi</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Menyediakan hewan qurban berkualitas yang memenuhi standar kesehatan</li>
                <li>• Memberikan pelayanan profesional dan terpercaya</li>
                <li>• Memastikan proses penyembelihan sesuai syariat Islam</li>
                <li>• Mengembangkan sistem pelayanan yang mudah dan efisien</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;