import React, { useState, useEffect } from 'react';

const useRealTimeRoomData = (url) => {
  const [deviationRooms, setDeviationRooms] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;

    const eventSource = new EventSource(url);
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.deviation_rooms) setDeviationRooms(data.deviation_rooms);
        setLoading(false);
      } catch (error) {
        console.error('Error parsing SSE data:', error);
      }
    };

    eventSource.onerror = () => eventSource.close();
    return () => eventSource.close();
  }, [url]);

  return { deviationRooms, loading };
};

export default useRealTimeRoomData;