import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const Activities = () => {
  const events = [
    {
      id: 1,
      title: "Annual Charity Dinner 2024",
      date: "March 15, 2024",
      location: "London Convention Center",
      image: "/event-place.jpg",
      slug: "annual-charity-dinner-2024",
    },
    {
      id: 2,
      title: "Medical Camp",
      date: "April 20, 2024",
      location: "Birmingham Community Center",
      image: "/event-place.jpg",
      slug: "medical-camp-2024",
    },
    {
      id: 3,
      title: "Youth Leadership Summit",
      date: "May 1, 2024",
      location: "Manchester Conference Hall",
      image: "/event-place.jpg",
      slug: "youth-leadership-2024",
    },
    {
      id: 4,
      title: "Community Health Fair",
      date: "May 15, 2024",
      location: "Liverpool Public Square",
      image: "/event-place.jpg",
      slug: "health-fair-2024",
    },
    {
      id: 5,
      title: "Education Outreach Program",
      date: "June 5, 2024",
      location: "Bristol Education Center",
      image: "/event-place.jpg",
      slug: "education-outreach-2024",
    },
    {
      id: 6,
      title: "Environmental Cleanup Drive",
      date: "June 20, 2024",
      location: "Glasgow Green Park",
      image: "/event-place.jpg",
      slug: "cleanup-drive-2024",
    },
    {
      id: 7,
      title: "Tech Innovation Workshop",
      date: "July 1, 2024",
      location: "Newcastle Tech Hub",
      image: "/event-place.jpg",
      slug: "tech-workshop-2024",
    },
    {
      id: 8,
      title: "Arts & Culture Festival",
      date: "July 15, 2024",
      location: "Oxford Arts Center",
      image: "/event-place.jpg",
      slug: "arts-festival-2024",
    },
  ];

  const workshops = [
    {
      id: 1,
      title: "Healthcare Professional Training",
      date: "May 5, 2024",
      location: "Manchester Medical Institute",
      image: "/event-place.jpg",
      slug: "healthcare-training-2024",
    },
    {
      id: 2,
      title: "Community Service Workshop",
      date: "June 10, 2024",
      location: "Leeds Community Hall",
      image: "/event-place.jpg",
      slug: "community-service-2024",
    },
    {
      id: 3,
      title: "Digital Skills for Seniors",
      date: "June 25, 2024",
      location: "Edinburgh Tech Hub",
      image: "/event-place.jpg",
      slug: "digital-skills-2024",
    },
    {
      id: 4,
      title: "Mental Health First Aid",
      date: "July 5, 2024",
      location: "Cardiff Wellness Center",
      image: "/event-place.jpg",
      slug: "mental-health-2024",
    },
  ];

  return (
    <div className="pt-16">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-b from-blue-950 to-blue-950 py-48">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-hand font-bold text-center text-white mb-4">
            Activities
          </h2>
          <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in making a difference through our events and workshops
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        {/* Events Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold font-hand text-blue-950">
              Events
            </h3>
            <Link
              href="/events"
              className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
            >
              View all events →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {" "}
            {/* Changed to grid-cols-4 */}
            {events.map((event) => (
              <Link href={`/events/${event.slug}`} key={event.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="flex flex-col h-full">
                    <div className="relative h-36">
                      {" "}
                      {/* Slightly reduced height for 4-column layout */}
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-3 flex-grow">
                      {" "}
                      {/* Reduced padding further */}
                      <h4 className="text-lg font-semibold text-blue-950 mb-1">
                        {event.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">{event.date}</p>
                      <p className="text-sm text-gray-600">{event.location}</p>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Workshops Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-bold font-hand text-blue-950">
              Workshops
            </h3>
            <Link
              href="/workshops"
              className="text-blue-600 hover:text-blue-800 transition-colors font-semibold"
            >
              View all workshops →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {" "}
            {/* Changed to grid-cols-4 */}
            {workshops.map((workshop) => (
              <Link href={`/workshops/${workshop.slug}`} key={workshop.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-full">
                  <div className="flex flex-col h-full">
                    <div className="relative h-36">
                      {" "}
                      {/* Slightly reduced height for 4-column layout */}
                      <Image
                        src={workshop.image}
                        alt={workshop.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-3 flex-grow">
                      {" "}
                      {/* Reduced padding further */}
                      <h4 className="text-lg font-semibold text-blue-950 mb-1">
                        {workshop.title}
                      </h4>
                      <p className="text-sm text-gray-600 mb-1">
                        {workshop.date}
                      </p>
                      <p className="text-sm text-gray-600">
                        {workshop.location}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
