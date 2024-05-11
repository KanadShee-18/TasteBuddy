import RestaurantCard from "./RestaurantCards";
import Banner from "./Banner";
import { useState } from "react";
import { restaurantsObj } from "../utills/mockData";
import { allRestaurantsList } from "../utills/mockData";
import { info } from "../utills/mockData";

const Body = () => {
  const [listOfTopRes, setListOfTopRes] = useState(restaurantsObj);
  const [listOfRestaurants, setListOfRestaurants] =
    useState(allRestaurantsList);

  return (
    <div className="main">
      <h2 className="woym_heading">What's on your mind?</h2>
      <div className="foodContainer">
        {info.map((eachFoodItem) => (
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
