// DataProvider.js (Context Provider)
import React, { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/');
        if (response.status === 200) {
          setData(response.data);
          setIsLoading(false)
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{data,isLoading}}>
      {children}
    </DataContext.Provider>
  );
};
