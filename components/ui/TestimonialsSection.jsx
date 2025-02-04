import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Sample testimonials data
const testimonials = [
  {
    name: "John Doe",
    role: "Parent",
    message:
      "This therapy center has been a life-changer for my child. The staff is highly professional and caring.",
    avatar: "/team-1.jpg", // Replace with actual avatar images
  },
  {
    name: "Jane Smith",
    role: "Teacher",
    message:
      "I have seen incredible progress in my students after they attended the therapy sessions here.",
    avatar: "/team-2.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Doctor",
    message:
      "The therapies provided here are well-researched and truly effective. Highly recommended.",
    avatar: "/team-3.jpg",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Automatic slide every 8 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000); // Change the 8000 value for timing

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <section className="py-12 bg-blue-950">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-8 font-hand">
          Testimonials
        </h2>

        <div className="flex justify-center">
          <motion.div
            key={currentIndex}
            className="bg-blue-950 p-6 rounded-lg w-96"
            initial={{ x: 300, opacity: 0 }} // Start from right
            animate={{ x: 0, opacity: 1 }} // Slide in from right
            exit={{ x: -300, opacity: 0 }} // Slide out to left
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-sm text-white">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
            <p className="text-white italic">
              "{testimonials[currentIndex].message}"
            </p>
          </motion.div>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-2 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-black" : "bg-gray-400"
              } transition-colors`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
