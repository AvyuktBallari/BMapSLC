import { useState, useEffect } from 'react';

const useRoomAnalytics = (baseUrl, timeZone = 'America/New_York') => {
  const [analytics, setAnalytics] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        const data = await response.json(); 
        data.forEach(element => { //format dates
          const dateFormat = { 
            hour: 'numeric', 
            minute: '2-digit', 
            hour12: true, 
            timeZone: 'America/New_York' //est
          };

          element.busiest_time = new Intl.DateTimeFormat("en-US", dateFormat).format(new Date(element.busiest_time));
          element.least_busy_time = new Intl.DateTimeFormat("en-US", dateFormat).format(new Date(element.least_busy_time));
          element.peak_times = element.peak_times.map(time => 
            new Intl.DateTimeFormat("en-US", dateFormat).format(new Date(time))
          );
        });

        setAnalytics(data);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };
    fetchData();
  }, [baseUrl, timeZone]); // Depend on baseUrl and timeZone

  return { analytics };
};

export default useRoomAnalytics;
