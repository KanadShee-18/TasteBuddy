import RestaurantCard from "./RestaurantCards";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [imageOfFoods, setImageOfFood] = useState([]);
  const [listOfTopRes, setListOfTopRes] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);
    setImageOfFood(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setListOfTopRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (
    listOfTopRes.length === 0 ||
    listOfRestaurants.length === 0 ||
    imageOfFoods.length === 0
  ) {
    return <Shimmer />;
  }

  return (
    <div className="main">
      <h2 className="woym_heading">What's on your mind?</h2>
      <div className="foodContainer">
        {imageOfFoods.map((eachFoodItem) => (
          <Banner key={eachFoodItem.id} foodData={eachFoodItem} />
        ))}
      </div>
      <div className="line1"></div>
      <h2 className="restaurantChainHeading">
        Top restaurant chains in Kolkata
      </h2>
      <div className="filterBtn">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredTopRes = listOfTopRes.filter(
              (topRes) => topRes.info.avgRating >= 4
            );
            setListOfTopRes(filteredTopRes);
          }}
        >
          Top Rated &gt;= 4 Star
        </button>
      </div>
      <div className="restaurantChainContainer">
        {listOfTopRes.map((eachRestaurant) => (
          <RestaurantCard
            key={eachRestaurant.info.id}
            restaurantData={eachRestaurant}
          />
        ))}
      </div>
      <h2 className="allRestaurantListHeading">
        Restaurants with online food delivery in Kolkata
      </h2>
      <div className="filterBtn">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated &gt;4star
        </button>
      </div>
      <div className="allRestaurantContainer">
        {listOfRestaurants.map((eachRes) => (
          <RestaurantCard key={eachRes.info.id} restaurantData={eachRes} />
        ))}
      </div>
    </div>
  );
};

export default Body;
