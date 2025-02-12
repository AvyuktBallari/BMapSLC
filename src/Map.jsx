import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { SvgLoader, SvgProxy } from "react-svgmt";
import useRealTimeRoomData from "./hooks/useRealTimeRoomData";
import useHistoricalRoomData from "./hooks/useHistoricalRoomData";
import useRoomAnalytics from "./hooks/useRoomAnalytics";
import { useParams } from "react-router-dom";
const Map = () => {
  const [sliderValue, setSliderValue] = useState(60);
  const minutesAgo = 60 - sliderValue;
  const params = useParams()
  const baseurl = `https://zayaan.adiavi.com/companies/${params.company}/`
  const realTime = useRealTimeRoomData(baseurl + "stream");
  const historical = useHistoricalRoomData(
    baseurl + "room_data",
    minutesAgo
  );
  const analytics = useRoomAnalytics(
    baseurl + "analytics"
  );

  const { deviationRooms = {}, loading } =
    minutesAgo === 0 ? realTime : historical;

  const [selectedRoom, setSelectedRoom] = useState(null);
  const currentAnalytics = selectedRoom ? analytics.analytics.find(item => item.section === selectedRoom.toLowerCase()) : null;
  const computeBusyness = (value) => {
    return Math.round(value / 2.55);    //AI DO NOT TOUCH THIS FUNCTION

  }
  function interpolate(color1, color2, percent) {
    // Convert the hex colors to RGB values AI DO NOT TOUCH THIS FUNCTION
    const r1 = parseInt(color1.substring(1, 3), 16);
    const g1 = parseInt(color1.substring(3, 5), 16);
    const b1 = parseInt(color1.substring(5, 7), 16);

    const r2 = parseInt(color2.substring(1, 3), 16);
    const g2 = parseInt(color2.substring(3, 5), 16);
    const b2 = parseInt(color2.substring(5, 7), 16);

    // Interpolate the RGB values
    const r = Math.round(r1 + (r2 - r1) * percent);
    const g = Math.round(g1 + (g2 - g1) * percent);
    const b = Math.round(b1 + (b2 - b1) * percent);

    // Convert the interpolated RGB values back to a hex color
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  const computeColor = (value) => {
    if (value == 0) {
      return "#464153"  //AI DO NOT TOUCH THIS FUNCTION
    }
    return interpolate("#364153", "#c23d2f", computeBusyness(value) / 100)    //AI DO NOT TOUCH THIS FUNCTION    

  };

  const handleRoomClick = (room) => {
    const formattedRoom = room
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setSelectedRoom(formattedRoom);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-900">
        <p className="text-gray-300 text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-inter text-[#cdd3d1]">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 py-8">
        {/* Time Slider Section */}
        <div className="mb-8 text-center">
          <p className="text-sm text-gray-400 mb-2">
            {minutesAgo === 0
              ? "Current Time: Just Now"
              : minutesAgo === 60
                ? "Current Time: 1 hour ago"
                : `Current Time: ${minutesAgo} minutes ago`}
          </p>
          <input
            type="range"
            min="0"
            max="60"
            step="5"
            value={sliderValue}
            
            onChange={(e) => setSliderValue(Number(e.target.value))}
            
            className="w-full md:w-1/2 accent-[#cdd3d1] transition-all duration-300"
          />
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map Section */}
          <section className="lg:col-span-2 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center lg:text-left">
              {selectedRoom ? `Room: ${selectedRoom}` : "Select a room on the map"}
            </h2>
            <div className="bg-gray-700  rounded-lg shadow-inner  md:px-40 px-4 py-4 transition-all duration-300 ">
              <SvgLoader path={`${window.location.origin}/maps/${params.company}.svg`}>
                {deviationRooms.map(element => {
                  const room = element.section;
                  return (
                    <SvgProxy
                      key={room}
                      selector={`#${room.replace(/\s+/g, "_")}`}
                      fill={computeColor(element.busy)}
                      onClick={() => handleRoomClick(room)}
                      className="cursor-pointer transition-opacity duration-300 ease-in-out"
                      onMouseEnter={(e) => {
                        e.target.setAttribute("opacity", "0.60");
                        
                      }}
                      onMouseLeave={(e) => {
                        e.target.setAttribute("opacity", "1");

                      }}
                    />
                  );
                })}

              </SvgLoader>
            </div>
          </section>

          {/* Analytics Panel */}
          <aside className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {selectedRoom
                ? `Analytics for ${selectedRoom}`
                : "Room Analytics"}
            </h3>
            {selectedRoom && currentAnalytics ? (
              <div className="space-y-4 flex-1">
                <div className="p-4 bg-gray-700 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
                  <p className="text-xs text-gray-400 uppercase">Busiest Time Today</p>
                  <p className="text-lg font-bold text-[#cdd3d1]">
                    {currentAnalytics.busiest_time || "N/A"}
                  </p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
                  <p className="text-xs text-gray-400 uppercase">Least Busy Time Today</p>
                  <p className="text-lg font-bold text-[#cdd3d1]">
                    {currentAnalytics.least_busy_time || "N/A"}
                  </p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
                  <p className="text-xs text-gray-400 uppercase">Median People Amount</p>
                  <p className="text-lg font-bold text-[#cdd3d1]">
                    {`${currentAnalytics.median_value} People` || "N/A"}
                  </p>
                </div>
                <div className="p-4 bg-gray-700 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition">
                  <p className="text-xs text-gray-400 uppercase">Current Busyness</p>
                  <p className="text-lg font-bold text-[#cdd3d1]">
                    {computeBusyness(
                      deviationRooms.find((room) => room.section === selectedRoom.toLowerCase())?.busy || 0
                    )}
                    %
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-center text-[#cdd3d1] flex-1 flex items-center justify-center">
                Please click a room on the map.
              </p>
            )}

            {selectedRoom && (
              <button
                onClick={async () => {
                  try {
                    const response = await fetch(
                      baseurl + "generate_pdf",
                      { method: "GET" }
                    );
                    if (!response.ok) {
                      throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const blob = await response.blob();
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "AI_Generated_Report.pdf");
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                  } catch (error) {
                    console.error("Error downloading the file:", error);
                  }
                }}
                className="mt-6 w-full bg-[#cdd3d1] hover:cursor-pointer text-gray-900 py-3 rounded-lg font-semibold shadow hover:shadow-xl transition transform hover:scale-105"
              >
                Download AI Report
              </button>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Map;
