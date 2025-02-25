import mapExample from '../assets/mapExample.svg';
import raspberry from '../assets/server.svg';
import { RoughNotation } from 'react-rough-notation';

const Solution = () => {
  return (
    <div className="container font-inter mx-auto py-20 px-4 space-y-12 max-w-5xl">
      {/* Header Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-[#cdd3d1]">
          Our{" "}
          <RoughNotation
            animate={false}
            type="highlight"
            show={true}
            color="#19362d"
          >
            Innovative Solution
          </RoughNotation>
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          After months of thinking, we were able to figure out a unique, easy way to help with this major issue.
        </p>
      </div>

      {/* Map Section */}
      <div className="bg-[#1c1616] rounded-xl overflow-hidden">
        <div className="p-6 md:p-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#cdd3d1]">A Crowded Map.</h2>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-400">
                  A crowded map dynamically shows areas of congestion in real-time. This provides actionable insights into congested hotspots, crowded zones, and potential delays, helping individuals and organizations make informed decisions.
                </p>
                <p className="text-base md:text-lg text-gray-400">
                  By visualizing real-time congestion data, it becomes easier to identify and address problems quickly. For example, transportation authorities can reroute traffic, event organizers can manage crowd flow, and businesses can optimize delivery schedules.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-video w-full h-full flex items-center justify-center">
                <img
                  src={mapExample}
                  alt="Crowded map visualization"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-[#1c1616] rounded-xl overflow-hidden">
        <div className="p-6 md:p-12">
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-[#cdd3d1]">How It's Done.</h2>
              <div className="space-y-4">
                <p className="text-base md:text-lg text-gray-400">
                  We use Raspberry Pi Picos to scan for Bluetooth devices. This data is sent to a Raspberry Pi server, where MQTT processes the data and creates a server-side API.
                </p>
                <p className="text-base md:text-lg text-gray-400">
                  The API is then used to highlight or darken more congested areas on the map, providing an accurate and real-time visualization of congestion.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative aspect-video w-full h-full flex items-center justify-center">
                <img
                  src={raspberry}
                  alt="How it works visualization"
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;