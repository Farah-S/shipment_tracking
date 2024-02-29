import { useEffect, useState } from 'react';

const DataFetcher = async ({id}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://tracking.bosta.co/shipments/track/'+id); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

 return {'data':data, 'loading':loading, 'error':error};
};

export default DataFetcher;