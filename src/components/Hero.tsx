import React from "react";
import hero from "../assets/hero.svg";
import { Star } from "lucide-react";
import { RoughNotation } from "react-rough-notation";

const HeroSection: React.FC = () => {
  const [email, setEmail] = React.useState("");
  return (
    <div>
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
            BMap is a web application that helps you see which places are more congested or busy then others. No more getting lost or stuck in long lines. Plan your trips
            efficiently and save time.
          </p>
        
          <div className="flex flex-col gap-4 items-center md:items-start ">
            <a href="/dashboard" className="bg-white text-black hover:cursor-pointer  py-3 px-6 rounded-lg w-2/3 text-center ">
              See existing maps
            </a>
          </div>
          <hr className="w-2/3 my-6 border-gray-400" />
          <div className="flex flex-col gap-4 items-center md:items-start">
            <div className="relative w-full md:w-2/3">
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Enter work email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none pr-24"
              />
              <a href={"/contact/"+email} className="absolute text-black top-0 right-0 bg-white px-6 py-2 rounded-r-lg h-full">
                Book a demo
              </a>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-8 grid grid-cols-2 gap-6 relative">
            {/* Vertical Line */}
            <div className="absolute inset-y-0 left-1/2 w-px bg-gray-200"></div>
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
            <p className="text-gray-400 text-sm">4.9 Average user rating</p>

          </div>
        </div>

        {/* Right Section */}
        <div className="relative">
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
