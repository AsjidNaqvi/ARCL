import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section className="py-8 bg-gray-100 mb-10 mt-6">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-950 mb-10 font-hand">
          Contact Us
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="p-4">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                {" "}
                {/* Reduced spacing */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="How can we help?"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    className="w-full min-h-[100px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-950 hover:bg-blue-800 text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Map */}
          <Card className="h-full">
            <CardContent className="p-0 h-full min-h-[300px]">
              {" "}
              {/* Reduced map height */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d435905.4420382967!2d74.284617!3d31.400037!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391900eb3219ff09%3A0x2c6e5f9511fbca1c!2sAutism%20Resource%20Center%20Lahore!5e0!3m2!1sen!2sus!4v1738164805379!5m2!1sen!2sus"
                width="100%"
                height="100%"
                className="border-0 rounded-lg"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
