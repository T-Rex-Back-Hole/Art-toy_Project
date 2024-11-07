import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [artToyData, setArtToyData] = useState([]);
  const [heroData, setHeroData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://672c3f511600dda5a9f7accc.mockapi.io/category"
        );
        const artToyProducts = response.data.filter(
          (product) => product.category === "Art Toy"
        );
        const heroProducts = response.data.filter(
          (product) => product.category === "Hero"
        );
        setArtToyData(artToyProducts);
        setHeroData(heroProducts);
        setLoading(false);
      } catch (err) {
        setError("Error fetching data" + err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <DataContext.Provider value={{ artToyData, heroData }}>
      {children}
    </DataContext.Provider>
  );
};
