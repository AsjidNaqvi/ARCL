// pages/therapies/parent-training.jsx
import Link from "next/link";
import React from "react";

const ParentTraining = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Parent Training
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Parent Training?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Parent training equips caregivers with strategies to support their
            children’s development. It focuses on building skills to manage
            behaviors, foster learning, and enhance the parent-child
            relationship.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of Parent Training
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Improved communication with children</li>
            <li>Effective behavior management strategies</li>
            <li>Enhanced understanding of child development</li>
            <li>Strengthened parent-child bonds</li>
            <li>Empowerment to support children’s learning</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How Parent Training Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Parent training involves interactive sessions, practical
            demonstrations, and hands-on activities. Caregivers learn techniques
            like positive reinforcement, structured routines, and effective
            communication to support their child’s needs.
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

export default ParentTraining;
