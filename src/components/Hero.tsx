import React from "react";
import hero from "../assets/hero.svg";
import { Star } from "lucide-react";
import { RoughNotation } from "react-rough-notation";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#171212]">
      <div className="max-w-6xl mx-auto font-inter text-[#cdd3d1] px-6 py-12 md:py-20 lg:py-24">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Never be{" "}
            <RoughNotation
              animate={false}
              type="highlight"
              show={true}
              color="#141f35"
            >
              late.
            </RoughNotation>
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto md:mx-0">
            BMap is a web application that helps you find the best route to your
            destination. No more getting lost or stuck in traffic. Plan your trips
            efficiently and save time.
          </p>

          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="relative w-full md:w-2/3">
              <input
                type="email"
                placeholder="Enter work email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none pr-24"
              />
              <a href="/contact" className="absolute text-black top-0 right-0 bg-white px-6 py-2 rounded-r-lg h-full">
                Book a demo
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-8 grid grid-cols-2 gap-6 relative">
            {/* Vertical Line */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-gray-200"></div>

            {/* First Column */}
            <div className="text-center pr-6 mb-8">
              <p className="text-4xl font-bold">99%</p>
              <p className="text-gray-500 mt-2">Average Accuracy</p>
            </div>

            {/* Second Column */}
            <div className="text-center pl-6 mb-8">
              <p className="text-4xl font-bold">~20k</p>
              <p className="text-gray-500 mt-2">Average daily users</p>
            </div>

            {/* Horizontal Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gray-200 mt-10"></div>
          </div>

          {/* Rating Section (Left-Aligned) */}
          <div className="mt-6 flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-[#cdd3d1]"
                  fill="currentColor" // Ensures solid black fill
                />
              ))}
            </div>
            <p className="text-gray-400 text-sm">4.5 Average user rating</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
          {/* Placeholder for Image */}
          <img
            src={hero}
            alt="Abstract representation of mobile app UI"
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
