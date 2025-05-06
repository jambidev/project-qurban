// Format price to Indonesian Rupiah
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Format weight with Kg suffix
export const formatWeight = (weight: number): string => {
  return `${weight} Kg`;
};