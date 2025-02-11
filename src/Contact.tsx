import React from "react";
import contactImage from "/src/assets/contact.svg"; // Ensure this asset exists in your project
import { RoughNotation } from "react-rough-notation";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ContactSection: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-6xl mx-auto font-inter text-[#cdd3d1] px-6 py-12 md:py-20 lg:py-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Section - Contact Form */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Let&apos;s{" "}
              <RoughNotation
                animate={false}
                type="highlight"
                show={true}
                color="#141f35"
              >
                Connect
              </RoughNotation>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
              We&apos;d love to hear from you! Drop us a message below and we&apos;ll get back to you as soon as possible.
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none bg-[#141f35] text-[#cdd3d1]"
              />
              
              <input
  type="tel"
  placeholder="Your Phone Number"
  required
  maxLength={10}
  pattern="[0-9]{10}"
  onChange={(e) => {
    e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10);
  }}
  className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none bg-[#141f35] text-[#cdd3d1]"
/>

              <textarea
                placeholder="Your Message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-700 rounded-lg focus:outline-none bg-[#141f35] text-[#cdd3d1]"
              />
              <button
                type="submit"
                className="bg-white hover:cursor-pointer text-black px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section - Contact Image */}
          <div className="relative">
            <img
              src={contactImage}
              alt="Illustration for contact us"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactSection;
