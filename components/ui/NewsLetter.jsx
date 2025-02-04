// components/NewsLetter.jsx
"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const eventsData = [
  {
    title: "Newsletter Vol.1",
    date: "January 20, 2025",
    link: "/events/event-1",
    image: "/newsletter-placeholder.jpg",
  },
  {
    title: "Newsletter Vol. 2",
    date: "February 15, 2025",
    link: "/events/event-2",
    image: "/newsletter-placeholder.jpg",
  },
  {
    title: "Newsletter Vol. 3",
    date: "March 10, 2025",
    link: "/events/event-3",
    image: "/newsletter-placeholder.jpg",
  },
];

export const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Card className="p-6 bg-white shadow-lg rounded-lg">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Your Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone number"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone No.
            </label>
            <Input
              id="subject"
              type="text"
              placeholder="Phone No."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-950 hover:bg-blue-800 text-white py-3 px-6 rounded-lg text-lg font-semibold transition-all duration-300"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const NewsLetter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="relative bg-gradient-to-b from-blue-950 to-blue-950 py-48">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-hand font-bold text-center text-white mb-4">
            Newsletter
          </h2>
          <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in making a difference through our events and workshops
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event, index) => (
            <Card
              key={index}
              className="relative hover:shadow-lg transition-transform transform hover:scale-105 duration-300 overflow-hidden min-h-[340px]"
            >
              <div className="absolute inset-0 z-0">
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
              </div>
              <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                <h3 className="text-3xl font-semibold text-white mb-4">
                  {event.title}
                </h3>
                <p className="text-lg text-gray-200">{event.date}</p>
                <Button
                  variant="destructive"
                  className="hover:bg-blue-950 hover:text-black text-lg px-6 py-3"
                >
                  <Link href={event.link} className="text-white">
                    Read More
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-32 mb-32 bg-white p-12 text-blue-950 text-center shadow-md rounded-lg ring-1 ring-gray-200 ring-opacity-50 max-w-3xl mx-auto">
        <h2 className="text-3xl font-hand font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-8">
          Stay updated with our latest news, events, and community updates.
        </p>
        <ContactForm />
      </div>
    </section>
  );
};

export default NewsLetter;
