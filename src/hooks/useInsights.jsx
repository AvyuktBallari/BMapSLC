import { useState, useEffect } from 'react';

const useInsights = (url) => {
    const [insightList, setInsightList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!url) return;

        const fetchFloors = async () => {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                
                if (Array.isArray(jsonData)) {
                    setInsightList(jsonData); 
                } else {
                    console.error("Unexpected API response format:", jsonData);
                }
            } catch (error) {
                console.error('Error fetching floor data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchFloors();
    }, [url]);

    return { insightList, loading };
};

export default useInsights;
