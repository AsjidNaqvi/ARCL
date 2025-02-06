// pages/therapies/awareness-campaigns.jsx
import Link from "next/link";
import React from "react";

const AwarenessCampaigns = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-blue-950 text-center mb-8 font-hand">
          Awareness Campaigns
        </h1>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            What are Awareness Campaigns?
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Awareness campaigns aim to educate and inform the community about
            critical issues, promote understanding, and encourage positive
            action to address social, health, and educational challenges.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Benefits of Awareness Campaigns
          </h2>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Increased knowledge on key issues</li>
            <li>Encourages community engagement</li>
            <li>Reduces stigma around sensitive topics</li>
            <li>Promotes healthier lifestyles and behaviors</li>
            <li>Empowers individuals to make informed decisions</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            How Awareness Campaigns Work
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Awareness campaigns use diverse methods such as workshops,
            multimedia presentations, and community events to spread
            information. They focus on creating accessible resources and
            fostering open discussions.
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

export default AwarenessCampaigns;
