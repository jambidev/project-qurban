import React from 'react';
import { Check, Award, Truck, ShieldCheck } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-12 h-12 text-primary" />,
      title: 'Kualitas Terbaik',
      description: 'Hewan yang kami sediakan memiliki kondisi kesehatan yang prima, telah lulus pemeriksaan dokter hewan, dan memenuhi standar untuk ibadah qurban.'
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-primary" />,
      title: 'Sesuai Syariat',
      description: 'Semua hewan qurban kami telah memenuhi syarat dan ketentuan syariat Islam untuk ibadah qurban.'
    },
    {
      icon: <Truck className="w-12 h-12 text-primary" />,
      title: 'Pengiriman Tepat Waktu',
      description: 'Kami berkomitmen untuk mengantarkan hewan qurban Anda tepat waktu sesuai dengan jadwal yang telah disepakati.'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mengapa Memilih <span className="text-primary">Surya Ternak</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              Sejak 1993, Surya Ternak telah menjadi penyedia hewan qurban terpercaya di Jambi. Kami berkomitmen untuk memberikan hewan qurban berkualitas premium dengan pelayanan terbaik.
            </p>
            
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg hover:shadow-md transition-shadow hover:border-primary border border-transparent">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
            
            <div className="bg-primary text-white p-8 rounded-lg shadow-md h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-3">Pengalaman 30+ Tahun</h3>
              <p className="opacity-90">
                Dipercaya masyarakat Jambi sejak tahun 1993 dalam menyediakan hewan qurban berkualitas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;