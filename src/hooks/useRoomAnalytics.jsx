import { useState } from 'react';

const useRoomAnalytics = (baseUrl) => {
  const [analytics, setAnalytics] = useState(null);

  const fetchAnalytics = async (room) => {
    try {
      const response = await fetch(baseUrl);
      let data = await response.json();
      data = data["first floor"][room];
      data["busiest_time"] = new Date(data["busiest_time"]).toLocaleTimeString();
      data["quietest_time"] = new Date(data["quietest_time"]).toLocaleTimeString();
      
      setAnalytics(data);
    } catch (error) {
      console.error('Error fetching analytics:', error);
    }
  };

  return { analytics, fetchAnalytics };
};

export default useRoomAnalytics;