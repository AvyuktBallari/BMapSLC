import React from 'react';

// Updated config object for BMap
const config = {
  appName: 'BMap',
  appDescription: 'Discover and visualize the world like never before.',
  mailgun: {
    supportEmail: 'support@bmap.com',
  },
};

// Replace this with your actual logo path

const Footer: React.FC = () => {
  return (
    <footer className="text-gray-400">
      <div className="max-w-7xl mx-auto px-8 py-24 font-inter">
        <div className="flex flex-col items-center text-center">
          {/* Logo and App Name */}
          <div className="mb-8">
            <a
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center items-center"
            >
              <strong className="font-extrabold tracking-tight text-gray-400 text-2xl md:text-3xl">
                {config.appName}
              </strong>
            </a>
            <p className="mt-3 text-sm text-gray-400">
              {config.appDescription}
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div>
              <div className="font-semibold text-gray-400 tracking-widest text-sm mb-3">
                LINKS
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link link-hover text-gray-400"
                  aria-label="Contact Support"
                >
                  Contact
                </a>
                <a href="/pricing" className="link link-hover text-gray-400">
                  Pricing
                </a>
              </div>
            </div>

            <div>
              <div className="font-semibold text-gray-400 tracking-widest text-sm mb-3">
                LEGAL
              </div>
              <div className="flex flex-col gap-2 text-sm">
                <a href="/tos" className="link link-hover text-gray-400">
                  Terms of Service
                </a>
                <a href="/privacy-policy" className="link link-hover text-gray-400">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <p className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} - Avyukt Ballari & Nicholas Karneyenka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;