import { useState, useEffect } from 'react';

const useRoomAnalytics = (baseUrl) => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json(); 
        data.forEach(element => { //format dates
          const dateFormat = { hour : 'numeric', minute: '2-digit', hour12: true };
          element.busiest_time = new Date(element.busiest_time).toLocaleTimeString("en-US", dateFormat);
          element.least_busy_time = new Date(element.least_busy_time).toLocaleTimeString("en-US", dateFormat);
          element.peak_times = element.peak_times.map(time => new Date(time).toLocaleTimeString("en-US", dateFormat));
        });
        setAnalytics(data);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };
    fetchData();
  }, []); // fetches once on component mount

  return { analytics};
};

export default useRoomAnalytics;
