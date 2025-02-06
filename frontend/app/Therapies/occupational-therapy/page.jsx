// pages/therapies/occupational-therapy.jsx
import Link from "next/link";
import React from "react";

const OccupationalTherapy = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Occupational Therapy
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Occupational Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Occupational therapy helps individuals develop the skills needed for
            daily activities. This includes motor skills, self-care, and work
            skills to ensure independence and improve quality of life.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of Occupational Therapy
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Improved fine motor skills</li>
            <li>Enhanced coordination and strength</li>
            <li>Development of self-care abilities</li>
            <li>Improved social participation and independence</li>
            <li>Increased confidence in daily activities</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How Occupational Therapy Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Occupational therapists work with students to improve their motor
            skills, coordination, and cognitive abilities. Therapy may include
            activities like hand-eye coordination exercises, dressing practice,
            and sensory integration techniques to help students function more
            independently.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            When Should a Student Receive Occupational Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Students who struggle with fine motor skills, coordination, or
            sensory processing issues can benefit from occupational therapy. It
            can help with tasks like writing, dressing, or managing classroom
            activities.
          </p>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OccupationalTherapy;
