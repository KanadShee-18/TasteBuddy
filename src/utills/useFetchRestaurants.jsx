import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { swiggyAPI } from "./constants";

const useFetchRestaurants = (lat, lng) => {
    const [imageOfFoods, setImageOfFood] = useState([]);
    const [cuisines, setCuisines] = useState([]);
    const [listOfTopRes, setListOfTopRes] = useState([]);
    const [filteredTopRes, setFilteredTopRes] = useState([]);
    const [cities, setCities] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(swiggyAPI(lat, lng));
                const json = await response.json();

                console.log(json);

                setImageOfFood(
                    json?.data?.cards[0]?.card?.card?.imageGridCards?.info
                );
                setCuisines(json?.data?.cards[7]?.card?.card?.brands);
                setListOfTopRes(
                    json?.data?.cards[1]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants
                );
                setFilteredTopRes(
                    json?.data?.cards[1]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants
                );
                setListOfRestaurants(
                    json?.data?.cards[4]?.card?.card?.gridElements
                        ?.infoWithStyle?.restaurants
                );
                const cityArrays =
                    json?.data?.cards[10]?.card?.card?.cities || [];
                const allCities = cityArrays.flat().map((city) => city.text);
                setCities(allCities);
                console.log("All cities: ", allCities);

                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, [lat, lng]);

    console.log("Cuisines: ", cuisines);

    return {
        imageOfFoods,
        cuisines,
        listOfTopRes,
        filteredTopRes,
        listOfRestaurants,
        cities,
        setFilteredTopRes,
        setListOfTopRes,
        setListOfRestaurants,
        loading,
    };
};

export default useFetchRestaurants;
