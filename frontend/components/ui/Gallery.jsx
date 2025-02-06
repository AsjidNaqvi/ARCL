"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const galleryImages = [
  { src: "/portfolio-1.jpg", category: "Playing" },
  { src: "/portfolio-2.jpg", category: "Drawing" },
  { src: "/portfolio-3.jpg", category: "Reading" },
  { src: "/portfolio-4.jpg", category: "Playing" },
  { src: "/portfolio-5.jpg", category: "Drawing" },
  { src: "/portfolio-6.jpg", category: "Reading" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState("All");

  const filteredImages =
    filter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === filter);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  return (
    <section className="bg-white py-16 ">
      {/* Full-width banner */}
      <div className="relative bg-gradient-to-b from-blue-950 to-blue-950 py-48">
        {" "}
        {/* Increased py-32 to py-48 */}
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-hand font-bold text-center text-white mb-4">
            Gallery
          </h2>
          <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in making a difference through our events and workshops
          </p>
        </div>
      </div>

      {/* Filters and Gallery Grid */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {/* Filters */}
        <div className="text-center my-8 font-nunito">
          {["All", "Playing", "Drawing", "Reading"].map((category) => (
            <button
              key={category}
              className={`m-2 px-4 py-2 rounded border ${
                filter === category
                  ? "bg-blue-950 text-white"
                  : "bg-white text-blue-950 hover:bg-blue-100"
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group overflow-hidden rounded-lg shadow-lg relative cursor-pointer"
                onClick={() => openModal(image.src)}
              >
                <Image
                  src={image.src}
                  alt={`Gallery Image ${index + 1}`}
                  width={500}
                  height={500}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white text-lg">View</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Selected Gallery Image"
                width={800}
                height={800}
                className="rounded-lg"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
