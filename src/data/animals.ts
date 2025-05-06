import { Animal } from '../types';

export const animals: Animal[] = [
  // Sapi Bali
  {
    id: 'sapi-bali-190',
    type: 'sapi',
    name: 'Sapi Bali',
    class: 'Bali',
    weight: 190,
    age: '2-3 Tahun',
    price: 18000000,
    description: 'Sapi Bali dengan bobot 190 kg. Sapi ini memiliki kondisi kesehatan yang prima dan telah lulus pemeriksaan dokter hewan. Cocok untuk ibadah qurban dan memenuhi syarat syariat.',
    benefits: [
      'Daging berkualitas tinggi',
      'Sehat dan terawat',
      'Memenuhi syarat syariat',
      'Sertifikat kesehatan',
    ],
    images: ['/assets/sapi-bali-1.jpg', '/assets/sapi-bali-2.jpg'],
    featured: false,
    stock: 5,
  },
  {
    id: 'sapi-bali-210',
    type: 'sapi',
    name: 'Sapi Bali',
    class: 'Bali',
    weight: 210,
    age: '2-3 Tahun',
    price: 19000000,
    description: 'Sapi Bali dengan bobot 210 kg. Sapi ini memiliki kondisi kesehatan yang prima dan telah lulus pemeriksaan dokter hewan. Cocok untuk ibadah qurban dan memenuhi syarat syariat.',
    benefits: [
      'Daging berkualitas tinggi',
      'Sehat dan terawat',
      'Memenuhi syarat syariat',
      'Sertifikat kesehatan',
    ],
    images: ['/assets/sapi-bali-1.jpg', '/assets/sapi-bali-2.jpg'],
    featured: false,
    stock: 4,
  },
  {
    id: 'sapi-bali-250',
    type: 'sapi',
    name: 'Sapi Bali',
    class: 'Bali',
    weight: 250,
    age: '2-3 Tahun',
    price: 21500000,
    description: 'Sapi Bali dengan bobot 250 kg. Sapi ini memiliki kondisi kesehatan yang prima dan telah lulus pemeriksaan dokter hewan. Cocok untuk ibadah qurban dan memenuhi syarat syariat.',
    benefits: [
      'Daging berkualitas tinggi',
      'Sehat dan terawat',
      'Memenuhi syarat syariat',
      'Sertifikat kesehatan',
    ],
    images: ['/assets/sapi-bali-1.jpg', '/assets/sapi-bali-2.jpg'],
    featured: true,
    stock: 3,
  },
  {
    id: 'sapi-bali-300',
    type: 'sapi',
    name: 'Sapi Bali',
    class: 'Bali',
    weight: 300,
    age: '2-3 Tahun',
    price: 23000000,
    description: 'Sapi Bali dengan bobot 300 kg. Sapi ini memiliki kondisi kesehatan yang prima dan telah lulus pemeriksaan dokter hewan. Cocok untuk ibadah qurban dan memenuhi syarat syariat.',
    benefits: [
      'Daging berkualitas tinggi',
      'Sehat dan terawat',
      'Memenuhi syarat syariat',
      'Sertifikat kesehatan',
    ],
    images: ['/assets/sapi-bali-1.jpg', '/assets/sapi-bali-2.jpg'],
    featured: true,
    stock: 4,
  },
  {
    id: 'sapi-bali-350',
    type: 'sapi',
    name: 'Sapi Bali',
    class: 'Bali',
    weight: 350,
    age: '2-3 Tahun',
    price: 24500000,
    description: 'Sapi Bali dengan bobot 350 kg. Sapi ini memiliki kondisi kesehatan yang prima dan telah lulus pemeriksaan dokter hewan. Cocok untuk ibadah qurban dan memenuhi syarat syariat.',
    benefits: [
      'Daging berkualitas tinggi',
      'Sehat dan terawat',
      'Memenuhi syarat syariat',
      'Sertifikat kesehatan',
    ],
    images: ['/assets/sapi-bali-1.jpg', '/assets/sapi-bali-2.jpg'],
    featured: false,
    stock: 3,
  },
  
  // Premium Sapi (top tier)
  {
    id: 'sapi-premium-500',
    type: 'sapi',
    name: 'Sapi Premium',
    class: 'Premium',
    weight: 500,
    age: '2-3 Tahun',
    price: 35000000,
    description: 'Sapi Premium dengan bobot 500 kg. Sapi ini memiliki kondisi kesehatan yang prima dan telah lulus pemeriksaan dokter hewan. Cocok untuk ibadah qurban dan memenuhi syarat syariat. Daging sapi premium memiliki marbling yang lebih baik untuk citarasa yang lebih lezat.',
    benefits: [
      'Daging premium dengan marbling terbaik',
      'Kesehatan terjamin oleh dokter hewan',
      'Memenuhi syarat syariat',
      'Sertifikat kesehatan lengkap',
      'Perawatan intensif',
    ],
    images: ['/assets/sapi-premium-1.jpg', '/assets/sapi-premium-2.jpg'],
    featured: true,
    stock: 2,
  },
  
  // VIP Sapi (highest tier)
  {
    id: 'sapi-vip-700',
    type: 'sapi',
    name: 'Sapi VIP',
    class: 'VIP',
    weight: 700,
    age: '2-3 Tahun',
    price: 50400000,
    description: 'Sapi VIP dengan bobot 700 kg. Sapi ini memiliki kondisi kesehatan yang prima dan telah lulus pemeriksaan dokter hewan. Cocok untuk ibadah qurban dan memenuhi syarat syariat. Sapi VIP menawarkan ukuran terbesar dengan daging berkualitas tertinggi.',
    benefits: [
      'Daging berkualitas super premium',
      'Performa fisik terbaik',
      'Pemeriksaan rutin dokter hewan',
      'Memenuhi syarat syariat',
      'Sertifikat kesehatan lengkap',
      'Perawatan VIP',
    ],
    images: ['/assets/sapi-vip-1.jpg', '/assets/sapi-vip-2.jpg'],
    featured: true,
    stock: 1,
  },
  
  // Kambing
  {
    id: 'kambing-standar',
    type: 'kambing',
    name: 'Kambing Standar',
    class: 'Standar',
    weight: 25,
    age: '1-2 Tahun',
    price: 2500000,
    description: 'Kambing dengan bobot sekitar 25 kg. Kambing ini memiliki kondisi kesehatan yang prima dan telah lulus pemeriksaan dokter hewan. Cocok untuk ibadah qurban dan memenuhi syarat syariat.',
    benefits: [
      'Daging berkualitas baik',
      'Sehat dan terawat',
      'Memenuhi syarat syariat',
      'Sertifikat kesehatan',
    ],
    images: ['/assets/kambing-1.jpg', '/assets/kambing-2.jpg'],
    featured: true,
    stock: 10,
  },
  {
    id: 'kambing-premium',
    type: 'kambing',
    name: 'Kambing Premium',
    class: 'Premium',
    weight: 35,
    age: '2 Tahun',
    price: 6000000,
    description: 'Kambing Premium dengan bobot sekitar 35 kg. Kambing ini memiliki kondisi kesehatan yang prima dan telah lulus pemeriksaan dokter hewan. Cocok untuk ibadah qurban dan memenuhi syarat syariat.',
    benefits: [
      'Daging berkualitas premium',
      'Performa fisik terbaik',
      'Pemeriksaan rutin dokter hewan',
      'Memenuhi syarat syariat',
      'Sertifikat kesehatan lengkap',
    ],
    images: ['/assets/kambing-premium-1.jpg', '/assets/kambing-premium-2.jpg'],
    featured: true,
    stock: 5,
  },
];

export const getFeaturedAnimals = (): Animal[] => {
  return animals.filter(animal => animal.featured);
};

export const getAnimalById = (id: string): Animal | undefined => {
  return animals.find(animal => animal.id === id);
};

export const getAnimalsByType = (type: 'sapi' | 'kambing'): Animal[] => {
  return animals.filter(animal => animal.type === type);
};

export const getAllAnimals = (): Animal[] => {
  return animals;
};