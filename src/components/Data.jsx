import React, { useState, useEffect } from "react";
import axios from "axios";

export const Data = () => {
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
    <div>
      {heroData.map((hero) => (
        <div key={hero.id}>
          <div>{hero.name}</div>
          <div>{hero.price}</div>
          <div>{hero.category}</div>
          <img
            src={hero.image}
            alt={hero.name}
            className="h-48 object-cover rounded-lg mb-4"
          />
        </div>
      ))}
    </div>
  );
};
