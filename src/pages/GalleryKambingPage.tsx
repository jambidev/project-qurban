import React, { useState } from "react";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
}

const galleryItems: GalleryItem[] = [
  {
    id: "kambing-etawa",
    title: "Kambing Etawa",
    description: "Kambing Etawa berkualitas tinggi dari peternakan kami.",
    thumbnail:
      "https://images.unsplash.com/photo-1560695979-a252bba4f542?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1560695979-a252bba4f542?w=1200&q=90",
      "https://images.unsplash.com/photo-1587283413134-4b4d95c4b5e8?w=1200&q=90",
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=1200&q=90",
      "https://images.unsplash.com/photo-1559309106-ed14040fd35d?w=1200&q=90",
    ],
  },
  {
    id: "kambing-lokal",
    title: "Kambing Lokal",
    description: "Kambing lokal dengan kualitas terjamin.",
    thumbnail:
      "https://images.unsplash.com/photo-1587283413134-4b4d95c4b5e8?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1587283413134-4b4d95c4b5e8?w=1200&q=90",
      "https://images.unsplash.com/photo-1560695979-a252bba4f542?w=1200&q=90",
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=1200&q=90",
    ],
  },
  {
    id: "kambing-premium",
    title: "Kambing Premium",
    description: "Kambing premium dengan kualitas unggul.",
    thumbnail:
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=1200&q=90",
      "https://images.unsplash.com/photo-1559309106-ed14040fd35d?w=1200&q=90",
      "https://images.unsplash.com/photo-1560695979-a252bba4f542?w=1200&q=90",
    ],
  },
];

const GalleryKambingPage: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openModal = (item: GalleryItem, imageIndex: number = 0) => {
    setSelectedItem(item);
    setSelectedImageIndex(imageIndex);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedItem) return;

    const totalImages = selectedItem.images.length;
    if (direction === "next") {
      setSelectedImageIndex((prev) => (prev + 1) % totalImages);
    } else {
      setSelectedImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    }
  };

  return (
    <div className="container mx-auto px-4 py-24 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8">Galeri Kambing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="rounded-lg overflow-hidden shadow-lg bg-white"
          >
            <div
              className="relative cursor-pointer overflow-hidden"
              onClick={() => openModal(item)}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="text-white font-medium px-4 py-2 rounded-full bg-black bg-opacity-50">
                  Lihat Album
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-3">{item.description}</p>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {item.images.map((image, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 hover:border-primary"
                    onClick={() => openModal(item, index)}
                  >
                    <img
                      src={image}
                      alt={`${item.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4 animate__animated animate__fadeIn animate__faster">
          <div className="relative w-full max-w-4xl mx-auto animate__animated animate__zoomIn">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10 animate__animated animate__pulse animate__infinite"
              aria-label="Close modal"
            >
              <div className="bg-primary rounded-full p-2 shadow-lg transform transition-transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </button>

            <div className="relative flex items-center justify-center h-[70vh] md:h-[80vh] w-full">
              <img
                src={selectedItem.images[selectedImageIndex]}
                alt={`${selectedItem.title} - ${selectedImageIndex + 1}`}
                className="max-w-full max-h-full object-contain mx-auto animate__animated animate__fadeIn my-0 left-0 right-0 absolute m-auto"
              />

              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-r-md text-white hover:bg-opacity-70"
                aria-label="Previous image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-l-md text-white hover:bg-opacity-70"
                aria-label="Next image"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="flex justify-center mt-4 space-x-2 overflow-x-auto px-2">
              {selectedItem.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 ${selectedImageIndex === index ? "border-white" : "border-gray-600 opacity-70"}`}
                >
                  <img
                    src={image}
                    alt={`${selectedItem.title} - ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryKambingPage;
