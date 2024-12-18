"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleImages, setVisibleImages] = useState(4);

  const images = [
    "/img/snow.jpg",
    "/img/leaf.jpg",
    "/img/water.jpg",
    "/img/profile.jpg",
    "/img/snow.jpg",
    "/img/leaf.jpg",
    "/img/water.jpg",
    "/img/profile.jpg",
  ];

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedIndex(null);
  };

  const showNextImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return (prevIndex + 1) % images.length;
    });
  };

  const showPreviousImage = () => {
    setSelectedIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return (prevIndex - 1 + images.length) % images.length;
    });
  };

  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 4);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.slice(0, visibleImages).map((imageSrc, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal(i)}
          >
            <Image
              src={imageSrc}
              alt={`Gallery Image ${i + 1}`}
              width={2000}
              height={2000}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-75"
            />
          </div>
        ))}
      </div>
      {visibleImages < images.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={loadMoreImages}
            className="px-6 py-2 bg-cyan-700 text-primary rounded-full hover:bg-cyan-500 transition-all mb-10"
          >
            Ladda mer
          </button>
        </div>
      )}
      {isModalOpen && selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative max-w-3xl max-h-full p-4 flex items-center">
            <button
              onClick={showPreviousImage}
              className="absolute left-4 text-white text-3xl bg-black/50 rounded-full p-2 hover:bg-black/75"
            >
              &#8592;
            </button>
            <Image
              src={images[selectedIndex]}
              alt={`Selected Image ${selectedIndex + 1}`}
              width={800}
              height={800}
              className="w-full h-[1000px] object-contain rounded-md"
            />
            <button
              onClick={showNextImage}
              className="absolute right-4 text-white text-3xl bg-black/50 rounded-full p-2 hover:bg-black/75"
            >
              &#8594;
            </button>
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 text-primary text-xl bg-black/50 p-2 rounded-full hover:bg-black"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
