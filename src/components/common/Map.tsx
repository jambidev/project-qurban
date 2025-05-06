import React, { useEffect, useRef } from 'react';

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // This would normally load a map from a service like Google Maps or Leaflet
    // For this example, we'll create a placeholder that would be replaced with actual map implementation
    
    const initMap = () => {
      if (mapRef.current) {
        const mapPlaceholder = document.createElement('div');
        mapPlaceholder.className = 'w-full h-full flex items-center justify-center bg-gray-200 rounded-lg';
        mapPlaceholder.innerHTML = `
          <div class="text-center p-4">
            <h3 class="font-semibold text-lg mb-2">Surya Ternak</h3>
            <p class="text-gray-600 text-sm">Jl. Ibrahim Ripin No.2, Kenali Asam Bawah, Kec. Kota Baru, Kota Jambi, Jambi 36129</p>
            <div class="mt-4">
              <a href="https://maps.google.com/?q=Jl. Ibrahim Ripin No.2, Kenali Asam Bawah, Kec. Kota Baru, Kota Jambi, Jambi 36129" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors">
                Buka di Google Maps
              </a>
            </div>
          </div>
        `;
        
        mapRef.current.innerHTML = '';
        mapRef.current.appendChild(mapPlaceholder);
      }
    };
    
    initMap();
    
    // In a real implementation, you would add cleanup for map instances
    return () => {
      // Cleanup map resources if needed
    };
  }, []);
  
  return (
    <div ref={mapRef} className="h-96 w-full bg-gray-100 rounded-lg"></div>
  );
};

export default Map;