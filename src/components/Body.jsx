import RestaurantCard, { withOfferCards } from "./RestaurantCards";
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
  const RestaurantCardWithOffer = withOfferCards(RestaurantCard);

  const {
    imageOfFoods,
    listOfTopRes,
    filteredTopRes,
    listOfRestaurants,
    setFilteredTopRes,
    setListOfTopRes,
    setListOfRestaurants,
  } = useFetchRestaurants(
    "https://foodfire.onrender.com/api/restaurants?lat=18.9486&lng=72.83662&page_type=DESKTOP_WEB_LISTING"
  );

  console.log("Body rendered", filteredTopRes);

  var settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 7,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  var restaurantSettings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 4, // Default for large screens
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1400, // large screens
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200, // large screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 824, // Small screens
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // Extra small screens
        settings: {
          slidesToShow: 1,
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
    <div className="main my-2 mx-[calc(10%+36px)]">
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
      <h2 className="restaurantChainHeading text-2xl mt-10 mb-4 font-txtFont font-semibold">
        Top restaurant chains in Kolkata
      </h2>
      <div className="flex flex-wrap items-center mb-3">
        <div className="filterBtn">
          <button
            className="filter-btn border border-none text-gray-200 font-semibold bg-gradient-to-r from-purple-500 to-pink-500 rounded-md w-[100px] h-10 px-2 hover:scale-110 duration-200"
            onClick={() => {
              const topRatedRestaurants = listOfTopRes.filter(
                (topRes) => topRes.info.avgRating >= 4.5
              );
              setFilteredTopRes(topRatedRestaurants); // Update the filtered list, not the original list
            }}
          >
            Top Rated
          </button>
        </div>

        <div className="w-2/3 h-[45px] ml-4 border-1 flex border-black rounded-md items-center shadow-lg md:w-2/6">
          <input
            type="text"
            placeholder="Search your fav food"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            className="w-full px-2 border-none outline-none text-center font-txtFont text-base"
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
      <Slider {...restaurantSettings}>
        {filteredTopRes.map((eachRestaurant) => (
          <div key={eachRestaurant.info.id}>
            <Link to={"/restaurants/" + eachRestaurant.info.id}>
              {eachRestaurant.info?.aggregatedDiscountInfoV3 ? (
                <RestaurantCardWithOffer restaurantData={eachRestaurant} />
              ) : (
                <RestaurantCard restaurantData={eachRestaurant} />
              )}
            </Link>
          </div>
        ))}
      </Slider>
      <h2 className="allRestaurantListHeading text-2xl mt-2 font-txtFont font-semibold">
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
      <div className="allRestaurantContainer mt-15 mx-2 flex flex-wrap justify-evenly">
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
