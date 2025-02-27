import { useState, useEffect } from 'react';

const useChartData = (url, floor) => {
    const [chartData, setChartData] = useState({});
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (!url || floor === 0) return;
  
      const fetchChartData = async () => {
        try {
          const response = await fetch(url+"/"+floor);
          const data = await response.json();
          setChartData(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching chart data:', error);
        }
      };
  
      fetchChartData();
    }, [url, floor]);
  
    return { chartData, loading };
};

export default useChartData;
  