import { useState, useEffect } from "react";

const useFetchRestaurants = (url) => {
  const [imageOfFoods, setImageOfFood] = useState([]);
  const [listOfTopRes, setListOfTopRes] = useState([]);
  const [filteredTopRes, setFilteredTopRes] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        setImageOfFood(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
        setListOfTopRes(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredTopRes(
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setListOfRestaurants(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    imageOfFoods,
    listOfTopRes,
    filteredTopRes,
    listOfRestaurants,
    setFilteredTopRes,
    setListOfRestaurants,
    loading,
  };
};

export default useFetchRestaurants;
