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
import useChartData from './hooks/useChartData';
import { useParams } from 'react-router-dom';
import useFloors from './hooks/useFloors';

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
  const [selectedRoom, setSelectedRoom] = useState('first_floor');    
  const params = useParams()
  const baseurl = `https://zayaan.adiavi.com/companies/${params.company}/`
  const chartData = useChartData(
    baseurl + "chart_data",
    selectedRoom
  ); 
  const floorList = useFloors(
    baseurl + "floors"
  )
  console.log(floorList)
  const stringToColour = (str: string) => {
    let hash = 0;
    str.split('').forEach(char => {
      hash = char.charCodeAt(0) + ((hash << 5) - hash)
    })
    let colour = '#'
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff
      colour += value.toString(16).padStart(2, '0')
    }
    return colour
  }
  const capitalizeWords = (str: string) => {
    return str.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
  const replaceUnderscores = (str: string) => {
    return str.replace(/_/g, ' ');
  }
  
  let datasets = []
  for(const [key,value] of Object.entries(chartData.chartData)){
    datasets.push({
      label:capitalizeWords(key),
      data:value,
      
      fill:false,
      unit:"devices",
      borderColor: stringToColour(key),
      backgroundColor: stringToColour(key),
      tension: 0.4,
    })
  }
  const generateTimeLabels = () => {
    const labels = [];
    for (let hour = 0; hour < 24; hour++) {
      const period = hour < 12 ? "AM" : "PM";
      const displayHour = hour % 12 === 0 ? 12 : hour % 12;
      labels.push(`${displayHour}:00 ${period}`);
      if (hour !== 23) labels.push(`${displayHour}:30 ${period}`);
    }
    return labels;
  };
  const lineData = {
    labels: generateTimeLabels(),
    datasets: datasets
  };

  const barData = {
    labels: ["Morning", "Afternoon", "Evening"],
    datasets: [
      {
        label: "Peak Hours",
        data: [65, 90, 45],
        backgroundColor: "#2C446F",
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

  

  return (
    <div className="font-inter text-white min-h-screen">
      <Navbar />
      <main className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl text-[#cdd3d1] font-bold">
            <span className="relative">
              <span className="relative z-10">Analytics Dashboard</span>
              <span className="absolute inset-0 bg-secondary opacity-30 transform -rotate-2"></span>
            </span>
            
          </h1>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar: Room Status */} 
            <div className="bg-[#201a1a] border border-[#332a2a] rounded-lg max-h col-span-3 md:col-span-1">
              <div className="p-6 border-b border-[#332a2a]">
                <h2 className="text-xl font-semibold text-[#cdd3d1]">Floors</h2>
              </div>
              { floorList.floorList.map( (item) => (
                <div className="p-6" key={item}>
                <div className="space-y-4">
                    <div
                      onClick={() => setSelectedRoom(item)}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        selectedRoom === item
                          ? "bg-midnight"
                          : "bg-[#332a2a] hover:bg-[#1e2f53]/50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{capitalizeWords(replaceUnderscores(item))}</span>
                      </div>
                      
                    </div>
                  
                </div>
              </div>
              ))} 
            </div>

          {/* Main Content */}
            {/* Activity Overview */}
            <div className="bg-[#201a1a] border border-[#332a2a] rounded-lg col-span-3 max-h">
              <div className="p-6 border-b border-[#332a2a] flex justify-between items-center">
                <h2 className="text-xl font-semibold text-[#cdd3d1]">Yesterday's Activity (# of devices)</h2>
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
