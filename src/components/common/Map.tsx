import React, { useEffect, useRef } from "react";

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to initialize the map
    const initMap = () => {
      // Check if the map container exists
      if (mapRef.current) {
        // Create an iframe with Google Maps embed
        const iframe = document.createElement("iframe");
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "0";
        iframe.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Jl.+Ibrahim+Ripin+No.2,+Kenali+Asam+Bawah,+Kec.+Kota+Baru,+Kota+Jambi,+Jambi+36129&zoom=16&maptype=roadmap&language=id`;
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("loading", "lazy");
        iframe.setAttribute("referrerpolicy", "no-referrer-when-downgrade");

        // Clear any existing content and append the iframe
        if (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild);
        }
        mapRef.current.appendChild(iframe);
      }
    };

    // Initialize the map
    initMap();

    // Clean up function
    return () => {
      if (mapRef.current && mapRef.current.firstChild) {
        mapRef.current.removeChild(mapRef.current.firstChild);
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="bg-gray-200 h-96 w-full rounded-lg overflow-hidden shadow-md animate__animated animate__fadeIn"
      aria-label="Google Map showing Surya Ternak location"
    >
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        <p>Loading map...</p>
      </div>
    </div>
  );
};

export default Map;
