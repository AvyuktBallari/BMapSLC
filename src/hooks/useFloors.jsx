import { useState, useEffect } from 'react';

const useFloors = (url) => {
    const [floorList, setFloorList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!url) return;

        const fetchFloors = async () => {
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                
                if (Array.isArray(jsonData)) {
                    // regex to replace spaces with _ (api-friendly)
                    const updatedFloorList = jsonData.map(floor => floor.replace(" ","_"));
                    setFloorList(updatedFloorList); 
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

    return { floorList, loading };
};

export default useFloors;
