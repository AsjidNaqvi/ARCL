import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-white py-26 bg-bl">
      <section className="relative bg-blue-950 text-white h-[500px] flex items-center justify-center">
        <Image
          src="/hero-image.jpg"
          alt="Admissions Hero"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-hand font-bold mb-4">About Autism</h1>
          <p className="text-lg">
            Begin your journey with the first step in the right direction.
          </p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* What is Autism */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold font hand text-blue-950 mb-4">
            What is Autism
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Autism is a complex developmental disability that typically appears
            during the first three years of life and affects a person’s ability
            to communicate and interact with others. It is defined by a certain
            set of behaviors and is a "spectrum disorder" that affects
            individuals differently and to varying degrees.
          </p>
        </div>

        {/* Causes */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Causes</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            There is no known single cause for autism, but genetics,
            environment, and biological traits are generally considered key
            factors. Research is ongoing, and while a cure is not yet available,
            timely intervention through tested techniques can help individuals
            cope with the challenges associated with autism.
          </p>
        </div>

        {/* Incidence */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Incidence</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Since the mid-1990s, the number of children diagnosed with Autism
            Spectrum Disorder (ASD) has increased significantly. Although
            diagnostic facilities and records are limited in some regions, the
            prevalence of ASD is comparable worldwide.
          </p>
        </div>

        {/* Diagnosis */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">Diagnosis</h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Diagnosing autism requires careful observation by an experienced
            professional, as there are no medical or genetic tests that can
            detect it. Several screening instruments have been developed to aid
            in diagnosis, including:
          </p>
          <ul className="list-disc pl-5 text-gray-700 font-nunito leading-relaxed">
            <li>Autism Diagnostic Observation Scale (ADOS)</li>
            <li>Autism Diagnostic Interview – Revised (ADI-R)</li>
            <li>Childhood Autism Rating Scale (CARS)</li>
            <li>The Checklist for Autism in Toddlers (CHAT)</li>
            <li>Diagnostic Statistical Manual – IV (DSM-IV)</li>
          </ul>
        </div>

        {/* Common Characteristics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold  text-blue-950 mb-4">
            Common Characteristics of Autism
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Individuals with autism may exhibit a range of characteristics,
            including challenges with social interactions, communication
            difficulties, repetitive behaviors, and unique strengths and
            differences. It's important to recognize that autism manifests
            differently in each individual.
          </p>
        </div>

        {/* Autism and Society */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-blue-950 mb-4">
            Autism and Society
          </h2>
          <p className="text-gray-700 font-nunito leading-relaxed">
            Understanding and acceptance of autism have grown over the years,
            leading to better support and resources for individuals and families
            affected by the disorder. Early intervention and inclusive practices
            are essential in helping individuals with autism lead fulfilling
            lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
