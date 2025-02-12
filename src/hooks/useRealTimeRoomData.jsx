import React, { useState, useEffect } from 'react';

const useRealTimeRoomData = (url) => {
  const [deviationRooms, setDeviationRooms] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!url) return;
    const eventSource = new EventSource(url);

    eventSource.addEventListener("update", (event) => {
                try {
        const data = JSON.parse(event.data);
        if (data){
          setDeviationRooms(data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error parsing SSE data:', error);
        setLoading(false);
      }
    }); 

    eventSource.onerror = () => eventSource.close();
    return () => eventSource.close();
  }, [url]);

  return { deviationRooms, loading };
};

export default useRealTimeRoomData;
