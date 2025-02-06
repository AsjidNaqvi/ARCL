// pages/therapies/behavioral-therapy.jsx
import Link from "next/link";
import React from "react";

const BehavioralTherapy = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Behavioral Therapy
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Behavioral Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Behavioral therapy focuses on identifying and changing negative
            behaviors by teaching individuals positive and adaptive ways to
            respond to various situations. It helps in managing emotional and
            social challenges effectively.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of Behavioral Therapy
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Improved emotional regulation</li>
            <li>Development of coping strategies</li>
            <li>Reduction in disruptive behaviors</li>
            <li>Enhanced social and communication skills</li>
            <li>Better understanding of emotions and triggers</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How Behavioral Therapy Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Behavioral therapists use techniques such as positive reinforcement,
            modeling, and cognitive-behavioral strategies to help individuals
            change their behavior patterns. Therapy may involve role-playing,
            goal-setting, and structured exercises to promote behavioral change.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            When Should a Student Receive Behavioral Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Students experiencing challenges such as anxiety, aggression, ADHD,
            or difficulties in managing emotions can benefit from behavioral
            therapy. It helps in addressing specific behaviors and improving
            overall functioning in school and social settings.
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

export default BehavioralTherapy;
