import RestaurantCard from "./RestaurantCards";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useOnlineStatus from "../utills/useOnliineStatus";
import useFetchRestaurants from "../utills/useFetchRestaurants";
import { SampleNextArrow, SamplePrevArrow } from "../utills/slickArrows";
import Offline from "./Offline";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { imageOfFoods, listOfTopRes, filteredTopRes, listOfRestaurants } =
    useFetchRestaurants(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 8,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <Offline />;

  return listOfTopRes.length === 0 ||
    listOfRestaurants.length === 0 ||
    imageOfFoods.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main my-2 mx-32">
      <h2 className="woym_heading text-3xl mt-3 font-txtFont font-md">
        What's on your mind?
      </h2>
      <div className="foodContainer mt-15 mx-10">
        <Slider {...settings}>
          {imageOfFoods.map((eachFoodItem) => (
            <Banner key={eachFoodItem.id} foodData={eachFoodItem} />
          ))}
        </Slider>
      </div>
      <div className="line1"></div>
      <h2 className="restaurantChainHeading text-3xl mt-10 font-txtFont font-semibold">
        Top restaurant chains in Kolkata
      </h2>
      <div className="filters flex justify-start items-center px-3">
        <div className="filterBtn">
          <button
            className="filter-btn border border-none text-gray-200 font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-md w-[100px] h-10 px-2 hover:scale-110 duration-200"
            onClick={() => {
              const filteredTopRes = listOfTopRes.filter(
                (topRes) => topRes.info.avgRating >= 4
              );
              setListOfTopRes(filteredTopRes);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="searchBox m-2 p-2">
          <input
            type="text"
            placeholder="Search your fav food"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            className="border border-solid border-black rounded-md md:w-[350px] sm:w-[200px] h-10 px-3 "
          />
          <button
            className="searchBtn mx-2 border border-none text-white bg-gradient-to-r from-blue-400 to-purple-500 rounded-md w-[70px] h-8 px-2 active:scale-y-110 duration-200"
            onClick={() => {
              // Filter restaurants according to search and update the UI
              console.log(searchText);
              const filterRes = listOfTopRes.filter((eachData) =>
                eachData.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredTopRes(filterRes);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurantChainContainer mt-15 mx-2 flex flex-wrap justify-start">
        {filteredTopRes.map((eachRestaurant) => (
          <Link
            key={eachRestaurant.info.id}
            to={"/restaurants/" + eachRestaurant.info.id}
          >
            <RestaurantCard restaurantData={eachRestaurant} />
          </Link>
        ))}
      </div>
      <h2 className="allRestaurantListHeading text-3xl mt-2 font-txtFont font-semibold">
        Restaurants with online food delivery in Kolkata
      </h2>
      <div className="filterBtn">
        <button
          className="filter-btn border border-none text-white bg-black rounded-xl w-[100px] h-10 px-2 my-3"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="allRestaurantContainer mt-15 mx-2 flex flex-wrap justify-start">
        {listOfRestaurants.map((eachRes) => (
          <Link key={eachRes.info.id} to={"/restaurants/" + eachRes.info.id}>
            <RestaurantCard restaurantData={eachRes} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
