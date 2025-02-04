// pages/therapies/speech-therapy.jsx
import React from "react";
import Link from "next/link";

const SpeechTherapy = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Speech Therapy
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What is Speech Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Speech therapy helps students improve their communication skills,
            focusing on speech sound production, language development, fluency,
            and social communication. It includes exercises and activities
            designed to enhance speech and language abilities.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of Speech Therapy
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Improved articulation and speech clarity</li>
            <li>Better understanding and use of language</li>
            <li>Increased confidence in communication</li>
            <li>Enhanced social interaction and conversation skills</li>
            <li>Addressing stuttering and fluency issues</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How Speech Therapy Works
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Speech therapy involves one-on-one sessions with a licensed
            speech-language pathologist (SLP). The therapist will assess the
            student’s speech and language abilities, identify specific
            challenges, and develop a personalized treatment plan. Sessions may
            include articulation exercises, language games, and strategies for
            fluency and social communication.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            When Should a Student Receive Speech Therapy?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Students who have difficulty speaking clearly, understanding
            language, or using language in social situations may benefit from
            speech therapy. It can also be helpful for students with speech
            disorders such as stuttering or voice issues.
          </p>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/"
            className="bg-blue-600 text-white py-3 px-6 rounded-full shadow-lg hover:bg-yellow-300 hover:text-black transition-colors"
          >
            Back to Therapies List
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpeechTherapy;
