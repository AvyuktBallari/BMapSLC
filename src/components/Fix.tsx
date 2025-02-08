import mapExample from '../assets/mapExample.svg';
import raspberry from '../assets/server.svg';
import { RoughNotation } from 'react-rough-notation';

function Fix() {
  return (
    <div className="mt-20 max-w-6xl font-inter mx-auto space-y-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#cdd3d1]">Our{" "} 
            <RoughNotation
                animate={false}
                type="box"
                show={true}
                color="#141f35"
            >
                Innovative Solution
            </RoughNotation>
            </h1>
        <p className="text-lg mt-5 text-gray-400 max-w-xl mx-auto">
          After months of thinking, we were able to figure out a unique, easy way to help with this major issue.
        </p>
      </div>

      <div className="flex bg-[#1c1616] p-7 sm:p-[50px] rounded-xl flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-10">
        <div className="lg:w-1/2 text-left space-y-6">
          <h2 className="text-4xl font-bold text-[#cdd3d1]">A Crowded Map.</h2>
          <p className="text-lg text-gray-400">
            A crowded map dynamically shows areas of congestion in real-time. This provides actionable insights into congested hotspots, crowded zones, and potential delays, helping individuals and organizations make informed decisions.
          </p>
          <p className="text-lg text-gray-400">
            By visualizing real-time congestion data, it becomes easier to identify and address problems quickly. For example, transportation authorities can reroute traffic, event organizers can manage crowd flow, and businesses can optimize delivery schedules.
          </p>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <img
            src={mapExample}
            alt="Crowded map visualization"
            className="max-w-sm"
          />
        </div>
      </div>

    <div className="flex bg-[#1c1616] p-7 sm:p-[50px] rounded-xl flex-col lg:flex-row-reverse lg:items-center lg:justify-between gap-10">
    <div className="lg:w-1/2 text-left space-y-6">
        <h2 className="text-4xl font-bold text-[#cdd3d1]">How It's Done.</h2>
        <p className="text-lg text-gray-400">
        We use Raspberry Pi Picos to scan for Bluetooth devices. This data is sent to a Raspberry Pi server, where MQTT processes the data and creates a server-side API.
        </p>
        <p className="text-lg text-gray-400">
        The API is then used to highlight or darken more congested areas on the map, providing an accurate and real-time visualization of congestion.
        </p>
    </div>

    <div className="lg:w-1/2 flex justify-center">
        <img
        src={raspberry}
        alt="How it works visualization"
        className="max-w-sm"
        />
    </div>
    </div>

    </div>
  );
}

export default Fix;
