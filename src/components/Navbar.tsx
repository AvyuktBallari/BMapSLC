import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#140f0f]">
      <nav className="flex items-center font-inter justify-between px-8 py-4 max-w-6xl mx-auto">
        {/* Logo on the left */}
        <div className="text-xl font-bold text-white">BMap</div>

        {/* Centered navigation links */}
        <div className="flex-grow flex justify-center">
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-400 hover:text-white">
              Home
            </a>
            <a href="/problem" className="text-gray-400 hover:text-white">
              Problem
            </a>
            <a href="/about" className="text-gray-400 hover:text-white">
              About
            </a>
            <a href="/installation" className="text-gray-400 hover:text-white">
              Installation
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
          } md:hidden absolute top-16 left-0 w-full z-[999999] bg-white shadow-md`}
        >
          <a href="/home" className="block px-6 py-2 text-gray-600 hover:text-black">
            Home
          </a>
          <a href="/problem" className="block px-6 py-2 text-gray-600 hover:text-black">
            Problem
          </a>
          <a href="/about" className="block px-6 py-2 text-gray-600 hover:text-black">
            About
          </a>
          <a href="/installation" className="block px-6 py-2 text-gray-600 hover:text-black">
            Installation
          </a>
          <a href="/contact" className="block px-6 py-2 text-gray-600 hover:text-black">
            Contact
          </a>
          <div className="block px-6 mt-4 space-y-2">
            <a
              href="/contact"
              className="w-full px-6 hover:cursor-pointer py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Book a Demo button on the right */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/contact"
            className="px-4 py-2 hover:cursor-pointer font-inter text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-800"
          >
            Book a Demo
          </a>
        </div>
      </nav>
    </div>
  );
}