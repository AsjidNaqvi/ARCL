"use client";

import { useEffect, useState } from "react";
import MemberCard from "./Member";
import Link from "next/link";
import FinancialStatements from "@/components/ui/FinancialStatements";
import Image from "next/image";
import Organogram from "./Organogram";
import CertificationsSlider from "./Certifications";
import Audits from "@/components/ui/Audits";

const AboutUs = () => {
  const images = ["/test2.jpg", "/test-1.jpg", "/test2.jpg", "/test-1.jpg"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  const governingBodyMembers = [
    {
      imageSrc: "/faraz.jpg",
      name: "Dr Ahmad Faraz Bhatti",
      position: "President",
    },
    {
      imageSrc: "/younas.jpg",
      name: "Muhammad Younas Mehrose",
      position: "Vice President",
    },
    {
      imageSrc: "/ahmadshehzad.jpg",
      name: "Mr Ahmad Shahzad Bhatti",
      position: "General Secretary",
    },
    {
      imageSrc: "/arshadmehmood.jpg",
      name: "Arshad Mehmood",
      position: "Treasurer",
    },
    {
      imageSrc: "/sherazraza.jpg",
      name: "Sheraz Raza Civil Society",
      position: "Coordinator",
    },
    {
      imageSrc: "/ahmadsaeed.jpg",
      name: "Ahmad Saeed Bhatti",
      position: "Joint Secretary",
    },
    {
      imageSrc: "/muhammadramzan.jpg",
      name: "Dr Muhammad Ramzan",
      position: "Member",
    },
  ];

  const executiveMembers = [
    {
      imageSrc: "/team-1.jpg",
      name: "Syeda Mahwish Raees",
      position: "Director",
    },
    {
      imageSrc: "/team-1.jpg",
      name: "Iqra Ashraf",
      position: "Assistant Director",
    },
    {
      imageSrc: "/team-1.jpg",
      name: "Syeda Saher Shoaib",
      position: "Associate Director",
    },
    {
      imageSrc: "/team-1.jpg",
      name: "Laiba Iqbal",
      position: "Accounts Manager",
    },
    {
      imageSrc: "/team-1.jpg",
      name: "Shaina Safdar",
      position: "Administrator and HR Head",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-28">
      <div className="max-w-9xl mx-auto px-6">
        <section className="relative mb-12 text-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/centre-1.jpg"
              alt="Background"
              fill
              className="z-0"
              style={{ objectFit: "fill", objectPosition: "center" }}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 py-28 px-28">
            <h1 className="text-5xl font-extrabold text-white font-hand mb-6">
              About Us
            </h1>
            <p className="text-base text-white max-w-3xl mx-auto mb-8">
              Autism Resource Centre Lahore (ARCL) is a dedicated non-profit
              organization committed to enhancing the lives of children with
              autism and related developmental disorders. Established with the
              mission to provide specialized care, therapy, and education, ARCL
              strives to create a supportive and inclusive environment for both
              children and their families. We offer a wide range of therapeutic
              services, including occupational therapy, speech therapy,
              physiotherapy, behaviour management, and Applied Behaviour
              Analysis (ABA), all under one roof.
            </p>
          </div>
        </section>

        <section className="mb-16 mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 border border-gray-300 rounded-lg bg-gray-50 text-blue-950 shadow-md hover:bg-blue-950 hover:text-white hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-4xl font-extrabold font-hand mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-base leading-relaxed text-left">
              Our mission is not just about providing therapeutic services, but
              also about creating long-term positive change in the lives of
              children with autism. Through advocacy, education, and ongoing
              support, ARCL aims to foster a community where every child has the
              opportunity to thrive and reach their highest potential.
            </p>
          </div>

          <div className="p-8 border border-gray-300 rounded-lg bg-gray-50 text-blue-950 shadow-md hover:bg-blue-950 hover:text-white hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-4xl font-extrabold font-hand mb-6 text-center">
              Our Vision
            </h2>
            <p className="text-base leading-relaxed text-left">
              At ARCL, we believe in empowering children to reach their full
              potential through individualized care plans and interventions
              tailored to their specific needs. Our highly trained team of
              professionals works closely with families to ensure the best
              possible outcomes for every child.
            </p>
          </div>

          <div className="p-8 border border-gray-300 rounded-lg bg-gray-50 text-blue-950 shadow-md hover:bg-blue-950 hover:text-white hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-4xl font-extrabold font-hand mb-6 text-center">
              Our Goals
            </h2>
            <ul className="list-disc list-inside space-y-3 text-left">
              <li>To offer specialist assessments and diagnosis</li>
              <li>To provide consultancy services for Autism professionals</li>
              <li>To encourage research in the field of Autism</li>
              <li>To support local groups and families around the country</li>
              <li>
                To raise awareness and promote better understanding of Autism
              </li>
            </ul>
          </div>

          <div className="p-8 border border-gray-300 rounded-lg bg-gray-50 text-blue-950 shadow-md hover:bg-blue-950 hover:text-white hover:shadow-xl hover:scale-105 transition-transform duration-300">
            <h2 className="text-4xl font-extrabold font-hand mb-6 text-center">
              Our Objectives
            </h2>
            <ul className="list-disc list-inside space-y-3 text-left">
              <li>To develop trained staff for Autism Resource Centres</li>
              <li>To provide services for children and families</li>
              <li>
                To create a team for diagnosis, assessment, and Individual
                Support Plans
              </li>
              <li>To support parents through education and support services</li>
              <li>To work towards inclusive education in mainstream schools</li>
            </ul>
          </div>
        </section>

        {/* <section className="mb-16 text-center">
          <h2 className="text-3xl font-semibold font-hand text-blue-950 mb-4">
            Constitution
          </h2>
          <p className="text-lg text-gray-700">
            Read our constitution to understand our guiding principles.
          </p>
          <Button
            variant="ghost"
            size="lg"
            as="a"
            href="/path-to-your-constitution.pdf"
            className="py-2 mt-4 font-nunito text-lg text-white bg-blue-950 hover:bg-blue-400"
            target="_blank"
          >
            View Constitution
          </Button>
        </section> */}

        <section className="mb-16">
          <h2 className="text-3xl font-semibold font-hand text-blue-950 mb-8 text-center">
            Governing Body Members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {governingBodyMembers.map((member, index) => (
              <MemberCard
                key={index}
                imageSrc={member.imageSrc}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold font-hand text-blue-950 mb-8 text-center">
            Executive Body Members
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {executiveMembers.map((member, index) => (
              <MemberCard
                key={index}
                imageSrc={member.imageSrc}
                name={member.name}
                position={member.position}
              />
            ))}
          </div>
        </section>

        <section>
          <Organogram />
        </section>

        <section>
          <Audits />
        </section>

        <section>
          <FinancialStatements />
        </section>

        <section>
          <CertificationsSlider />
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
