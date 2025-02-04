import Image from "next/image";

const PresidentialMessage = () => {
  return (
    <section className="py-16 bg-gray-100 w-full">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Message Content */}
          <div className="px-6 lg:max-w-[55%]">
            <h2 className="text-4xl font-bold font-hand text-blue-950 mb-4">
              Presidential Message
            </h2>
            <p className="text-lg text-gray-700 mb-6">Dear Nishtarians,</p>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to the Nishtarian Society UK. Our mission is to unite
              Nishtarians globally and advance healthcare locally. We are
              committed to creating a brighter tomorrow through various
              initiatives and collaborations.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Together, we can make a significant impact in the medical
              community and beyond. I encourage you to explore our website,
              participate in our events, and join us in our mission to empower
              NMU alumni for a healthier tomorrow.
            </p>
            <p className="text-lg text-gray-700 mb-6">Sincerely,</p>
            <p className="text-lg text-gray-700 font-semibold">
              Dr. Ahmad faraz bhatti
            </p>
            <p className="text-lg text-gray-700">
              President, Nishtarian Society UK
            </p>
          </div>
          {/* President's Image */}
          <div className="mt-8 lg:mt-0 lg:ml-auto">
            <div className="relative h-[500px] w-[400px]">
              <Image
                src="/message.jpg"
                alt="President Name"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                priority
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresidentialMessage;
