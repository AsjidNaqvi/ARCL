import Image from "next/image";
import Link from "next/link";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3">
              <Image
                src="/arcl logo.jpg"
                alt="Arcl Logo"
                className="rounded-lg"
                width={50}
                height={50}
              />
              <h1 className="text-white text-2xl font-bold font-nunito">
                ARCL
              </h1>
            </div>
            <p className="text-sm mt-4">
              Autism Resource Centre Lahore (ARCL) was established in 2014 as a
              Not for Profit Company under section 42 of the Companies Act 2017.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="#"
                className="p-2 bg-primary text-white rounded-full hover:bg-blue-600"
              >
                <FaTwitter />
              </Link>
              <Link
                href="#"
                className="p-2 bg-primary text-white rounded-full hover:bg-blue-600"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="p-2 bg-primary text-white rounded-full hover:bg-blue-600"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="#"
                className="p-2 bg-primary text-white rounded-full hover:bg-blue-600"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-2xl font-bold font-hand mb-4">
              Get In Touch
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-primary">
                  <i className="fa fa-map-marker-alt"></i>
                </span>
                <div>
                  <h5 className="text-2xl font-bold font-hand">Address</h5>
                  <p className="text-sm">Location, City, Country</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary">
                  <i className="fa fa-envelope"></i>
                </span>
                <div>
                  <h5 className="text-2xl font-bold font-hand">Email</h5>
                  <p className="text-sm">info@example.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-primary">
                  <i className="fa fa-phone-alt"></i>
                </span>
                <div>
                  <h5 className="text-2xl font-bold font-hand">Phone</h5>
                  <p className="text-sm">+012 345 67890</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-2xl font-bold font-hand mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  {">"}Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  {">"}About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  {">"}Our Classes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  {">"}Our Teachers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  {">"}Our Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm hover:text-primary">
                  {">"}Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-2xl font-hand font-bold mb-4">
              Newsletter
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded bg-gray-300 text-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded bg-gray-300 text-black"
              />
              <button className="w-full p-3 bg-red-600 text-white rounded hover:bg-blue-800 hover:text-black">
                Submit Now
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white mt-10 pt-5">
          <p className="text-sm">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="#" className="text-white hover:text-blue-100">
              ARCL
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
