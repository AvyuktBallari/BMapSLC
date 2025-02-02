import React from 'react';

const CallToActionSection: React.FC = () => {
  return (
    <div className="bg-[#110d0d] text-center flex flex-col justify-center items-center h-[500px] !font-inter px-4 md:px-8">
      <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
        Ready to Transport Better?
      </h1>
      <p className="text-gray-400 text-lg md:text-xl mb-8">
        Stop going the long way around and start saving time and money.
        <br className="hidden lg:block" /> 
        With BMap you can get to your destination faster and safer. 
      </p>
      <div className="flex flex-col space-y-4 items-center">
        <a href='/contact' className="bg-white text-black font-inter px-6 py-3 rounded-full text-lg md:text-xl">
          Schedule a Demo
        </a>
        <button className="text-gray-400 text-lg md:text-xl">
          Cancel anytime
        </button>
      </div>
    </div>
  );
};

export default CallToActionSection;