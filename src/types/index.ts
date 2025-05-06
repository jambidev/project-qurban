export type NavLink = {
  name: string;
  path: string;
};

export type Animal = {
  id: string;
  type: 'sapi' | 'kambing';
  name: string;
  class: string;
  weight: number;
  age: string;
  price: number;
  description: string;
  benefits: string[];
  images: string[];
  featured: boolean;
  stock: number;
};

export type CartItem = Animal & {
  quantity: number;
};

export type Testimonial = {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  image?: string;
};

export type OrderFormData = {
  fullName: string;
  phone: string;
  address: string;
  animalType: 'sapi' | 'kambing' | '';
  animalId: string;
  quantity: number;
  paymentMethod: 'transfer' | 'cash' | '';
  deliveryDate: string;
  notes: string;
};