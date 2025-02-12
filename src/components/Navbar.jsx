import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleNav = (section) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#140f0f]">
      <nav className="flex items-center font-inter justify-between px-8 py-4 max-w-6xl mx-auto">
        <a href="/" className="text-xl font-bold text-white">BMap</a>

        {/* Centered navigation links */}
        <div className="flex-grow flex justify-center">
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-400 hover:text-white">
              Home
            </a>
            <button
              onClick={() => handleNav("problem")}
              className="text-gray-400 hover:text-white cursor-pointer"
            >
              Problem
            </button>
            <button
              onClick={() => handleNav("pricing")}
              className="text-gray-400 hover:text-white cursor-pointer"
            >
              Pricing
            </button>
            <a href="/map" className="text-gray-400 hover:text-white">
              Current Maps
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white">
              Contact
            </a>

          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:cursor-pointer focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:hidden absolute top-16 left-0 w-full z-[999999] bg-[#181515] shadow-md`}
        >
          <a href="/" className="block px-6 py-2 mt-5 text-gray-600 hover:text-black">
            Home
          </a>
          <button
            onClick={() => {
              handleNav("problem");
              setIsOpen(false);
            }}
            className="block px-6 py-2 text-gray-600 hover:text-black cursor-pointer"
          >
            Problem
          </button>
          <button
            onClick={() => {
              handleNav("pricing");
              setIsOpen(false);
            }}
            className="block px-6 py-2 text-gray-600 hover:text-black cursor-pointer"
          >
            Pricing
          </button>
          <a href="/map" className="block px-6 py-2 text-gray-600 hover:text-black">
            Current Maps
          </a>
          <a href="/contact" className="block px-6 py-2 text-gray-600 hover:text-black">
            Contact
          </a>
          <div className="block px-6 mt-6 space-y-2 pb-6"> {/* Increased top margin and added bottom padding */}
  <a
    href="/contact"
    className="w-full px-6 py-3 hover:cursor-pointer text-sm font-medium text-black bg-[#cdd3d1] rounded-lg hover:bg-gray-800"
  >
    Book a Demo
  </a>
</div>

        </div>

        {/* Book a Demo button on the right */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/contact"
            className="px-4 py-2 hover:cursor-pointer font-inter text-sm font-medium text-black bg-white rounded-lg hover:scale-110 transition duration-1000"
          >
            Book a Demo
          </a>
        </div>
      </nav>
    </div>
  );
}
