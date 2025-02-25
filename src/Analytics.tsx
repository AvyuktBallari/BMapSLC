import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import Navbar from './components/Navbar';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [selectedRoom, setSelectedRoom] = useState('Room #1');

  // Sample data for charts
  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Activity",
        data: [12, 19, 3, 5, 2, 7, 9],
        fill: false,
        borderColor: "#cdd3d1",
        backgroundColor: "#cdd3d1",
        tension: 0.4,
      },
    ],
  };

  const barData = {
    labels: ["Morning", "Afternoon", "Evening"],
    datasets: [
      {
        label: "Peak Hours",
        data: [65, 90, 45],
        backgroundColor: "#1e2f53",
        borderColor: "#cdd3d1",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: "#cdd3d1" },
        grid: { color: "#332a2a" },
      },
      y: {
        ticks: { color: "#cdd3d1" },
        grid: { color: "#332a2a" },
      },
    },
    plugins: {
      legend: {
        labels: { color: "#cdd3d1" },
      },
    },
  };

  const rooms = [
    { id: 1, name: "Room #1", status: "Available", utilization: 85 },
    { id: 2, name: "Room #2", status: "In Use", utilization: 62 },
    { id: 3, name: "Room #3", status: "Maintenance", utilization: 45 },
  ];

  return (
    <div className="font-inter text-white min-h-screen">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl text-[#cdd3d1] font-bold">
            <span className="relative">
              <span className="relative z-10">Analytics</span>
              <span className="absolute inset-0 bg-secondary opacity-30 transform -rotate-2"></span>
            </span>{" "}
            Dashboard
          </h1>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar: Room Status */}
            <div className="bg-[#201a1a] border border-[#332a2a] rounded-lg max-h">
              <div className="p-6 border-b border-[#332a2a]">
                <h2 className="text-xl font-semibold text-[#cdd3d1]">Floors</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {rooms.map((room) => (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoom(room.name)}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedRoom === room.name
                          ? "bg-midnight"
                          : "bg-[#332a2a] hover:bg-[#1e2f53]/50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{room.name}</span>
                        <span className="text-sm opacity-75">{room.status}</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex-1 h-2 bg-[#332a2a] rounded-full">
                          <div
                            className="h-2 bg-[#cdd3d1] rounded-full"
                            style={{ width: `${room.utilization}%` }}
                          />
                        </div>
                        <span className="text-sm">{room.utilization}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          {/* Main Content */}
            {/* Activity Overview */}
            <div className="bg-[#201a1a] border border-[#332a2a] rounded-lg col-span-3 max-h">
              <div className="p-6 border-b border-[#332a2a] flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#cdd3d1]">Activity Overview</h2>
              </div>
              <div className="p-6">
                <div className="h-72">
                  <Line data={lineData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1  gap-8 max-w-7xl my-8">

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6">
              {/* Peak Hours Card */}
              <div
                className="bg-[#201a1a] border border-[#332a2a] rounded-lg col-span-1"
              >
                <div className="p-6 border-b border-[#332a2a] flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-[#cdd3d1]">Peak Hours</h2>
                </div>
                <div className="p-6">
                  <div className="h-64">
                    <Bar data={barData} options={chartOptions} />
                  </div>
                </div>
              </div>

              {/* Key Insights Card */}
              <div className="bg-[#201a1a] border border-[#332a2a] rounded-lg">
                <div className="p-6 border-b border-[#332a2a] col-span-3">
                  <h2 className="text-xl font-semibold text-[#cdd3d1]">Key Insights</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-[#332a2a] rounded-lg">
                      <h4 className="font-medium mb-2">Peak Usage Times</h4>
                      <p className="text-sm text-[#cdd3d1]">
                        Highest activity observed between 2PM - 4PM on weekdays
                      </p>
                    </div>
                    <div className="p-4 bg-[#332a2a] rounded-lg">
                      <h4 className="font-medium mb-2">Utilization Trend</h4>
                      <p className="text-sm text-[#cdd3d1]">
                        15% increase in room bookings compared to last month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
