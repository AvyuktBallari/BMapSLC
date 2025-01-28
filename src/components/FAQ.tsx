"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
}

const faqList: FAQItemProps[] = [
  {
    question: "What is BMap and how does it work?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        BMap is a navigation tool designed to help you get to your destination faster. It provides real-time traffic updates, crowd density maps, and optimized routes to save you time.
      </div>
    ),
  },
  {
    question: "How accurate is the real-time traffic data?",
    answer: (
      <p>
        BMap leverages advanced algorithms and live data sources to ensure high accuracy in real-time traffic information. Updates are refreshed frequently to keep you informed.
      </p>
    ),
  },
  {
    question: "Can I use BMap offline?",
    answer: (
      <p>
        While BMap is optimized for online use to provide real-time updates, you can download specific maps for offline use. However, traffic and crowd data require an active internet connection.
      </p>
    ),
  },
  {
    question: "Does BMap support multi-stop route planning?",
    answer: (
      <p>
        Yes, BMap allows you to add multiple stops to your journey. Simply select your destinations in the app, and BMap will calculate the most efficient route.
      </p>
    ),
  },
  {
    question: "How does BMap ensure my data privacy?",
    answer: (
      <p>
        BMap is committed to user privacy. Your location data is anonymized and encrypted to ensure it is secure and used solely for improving navigation services.
      </p>
    ),
  },
  {
    question: "What platforms is BMap available on?",
    answer: (
      <p>
        BMap is available on both iOS and Android devices. You can download it from the App Store or Google Play Store.
      </p>
    ),
  },
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef<HTMLDivElement>(null); // Explicitly typed ref
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="font-inter">
      <button
        className="relative flex gap-2 items-center w-full py-5 text-gray-400 font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-gray-400" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${isOpen ? "rotate-180" : ""}`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${isOpen ? "rotate-180 hidden" : ""}`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion.current?.scrollHeight || 0, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed text-gray-400">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQ = () => {
  return (
    <section className="font-inter" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-gray-400 mb-4">FAQ</p>
          <p className="sm:text-4xl font-inter text-[#cdd3d1] text-3xl font-extrabold text-base-content">
            Common Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
