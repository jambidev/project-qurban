import React from 'react';
import { Animal } from '../../types';
import { formatPrice } from '../../utils/formatters';

const PriceListTable: React.FC<{ animals: Animal[]; type: 'sapi' | 'kambing' }> = ({ animals, type }) => {
  const filteredAnimals = animals.filter(animal => animal.type === type);
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Kelas
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Bobot
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Umur (Tahun)
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Harga
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredAnimals.map((animal) => (
            <tr key={animal.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{animal.class}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{animal.weight} Kg</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{animal.age}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-semibold text-primary">{formatPrice(animal.price)}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href={`/products/${animal.id}`} className="text-secondary hover:text-secondary-dark mr-4">
                  Detail
                </a>
                <a href={`/order?productId=${animal.id}`} className="text-primary hover:text-primary-dark">
                  Pesan
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceListTable;