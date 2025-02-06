// pages/therapies/physical-therapy.jsx
import Link from "next/link";
import React from "react";

const PhysicalTherapy = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Physical Therapy
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Physical Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Physical therapy focuses on improving movement, strength, and
            flexibility for individuals facing physical challenges due to
            injuries, illnesses, or developmental conditions. It aims to reduce
            pain, improve functionality, and promote overall physical
            well-being.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of Physical Therapy
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Increased mobility and flexibility</li>
            <li>Improved posture and body alignment</li>
            <li>Strengthening of muscles and joints</li>
            <li>Enhanced balance and coordination</li>
            <li>Pain relief and injury prevention</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How Physical Therapy Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Physical therapists assess individual needs and design personalized
            treatment plans that include exercises, stretches, and hands-on
            techniques. Sessions may focus on improving strength, mobility, and
            balance, as well as teaching proper movement techniques to avoid
            future injuries.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            When Should a Student Receive Physical Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Students with physical challenges, such as difficulty walking, poor
            posture, or limited mobility, can benefit from physical therapy. It
            is particularly helpful for those recovering from injuries or
            dealing with conditions like cerebral palsy or muscular dystrophy.
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

export default PhysicalTherapy;
