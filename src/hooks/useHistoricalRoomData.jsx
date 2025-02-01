import React, { useState, useEffect } from 'react';

const useHistoricalRoomData = (url, minutesAgo) => {
    const [deviationRooms, setDeviationRooms] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (!url || minutesAgo === 0) return;
  
      const fetchHistoricalData = async () => {
        try {
          const response = await fetch(url+minutesAgo);
          const data = await response.json();
          setDeviationRooms(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching historical data:', error);
        }
      };
  
      fetchHistoricalData();
    }, [url, minutesAgo]);
  
    return { deviationRooms, loading };
};

export default useHistoricalRoomData;
  