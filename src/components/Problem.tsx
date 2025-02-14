import { RoughNotation } from "react-rough-notation";
import traffic from "../assets/traffic.svg";
import CongestionStats from "./Congestion";

function Problem() {
  return (
    <div id="problem" className="bg-[#171212]">
      {/* Glaring Problem Section */}
      <div className="items-center mt-20 font-inter text-center justify-center">
        <h1 className="lg:text-6xl text-5xl font-bold text-[#cdd3d1]">
          There is a <br className="lg:hidden" />
          <RoughNotation
            animate={false}
            type="highlight"
            show={true}
            color="#1e2f53"
          >
            <span className="text-[#cdd3d1]">Glaring Problem</span>
          </RoughNotation>
        </h1>
        <p className="lg:text-lg text-gray-400 text-md max-w-2xl mx-auto mt-5">
          Each year, millions of people experience delays in reaching their
          destinations due to congestion and the busy nature of transportation
          and crowded locations.
        </p>
        <CongestionStats />
      </div>

      <div className="bg-[#201919] mt-12 p-12 mx-auto">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">
          {/* Text Content */}
          <div className="text-[#cdd3d1] font-inter lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              We couldn't believe it either.
            </h2>
            <p className="mb-6 max-w-xl mx-auto lg:mx-0">
              The issue of congestion isn't just an inconvenience—it's a major
              challenge affecting our daily lives. With more people traveling,
              working, and commuting than ever before, the strain on our systems
              has grown exponentially.
            </p>
            <p className="mb-6 max-w-xl mx-auto lg:mx-0">
              Imagine a system where transportation hubs could better adapt to
              peak times and redirect flows. This vision isn’t just ideal—it’s
              achievable with the right planning and tools.
            </p>
            <p className="mb-6 max-w-xl mx-auto lg:mx-0">
              From smarter traffic systems to crowd-monitoring technologies, the
              solutions are at our fingertips. Together, we can build a future
              with less congestion and smoother commutes.
            </p>
            <button className="mt-4 px-6 py-3 bg-white text-green-900 font-bold rounded-lg hover:bg-gray-200">
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={traffic}
              alt="Illustration of congestion and busyness"
              className="w-full h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Problem;
