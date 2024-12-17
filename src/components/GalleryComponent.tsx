"use client";

import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
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
            onClick={() => openModal(imageSrc)}
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
            className="px-6 py-2 bg-cyan-700 text-white rounded-full hover:bg-cyan-500 transition-all mb-10"
          >
            Ladda mer
          </button>
        </div>
      )}

      {isModalOpen && selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative max-w-3xl max-h-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-8 right-8 text-white text-xl bg-black/10 p-2 rounded-full hover:bg-black"
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Selected Image"
              width={800}
              height={800}
              className="w-full h-[1000px] object-contain rounded-md"
            />
          </div>
        </div>
      )}
    </div>
  );
}
