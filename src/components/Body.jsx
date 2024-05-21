import RestaurantCard from "./RestaurantCards";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [imageOfFoods, setImageOfFood] = useState([]);
  const [listOfTopRes, setListOfTopRes] = useState([]);
  const [filteredTopRes, setFilteredTopRes] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#ff5d0d",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#ff5d0d",
        }}
        onClick={onClick}
      />
    );
  }

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    // Optional Chaining:

    setImageOfFood(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setListOfTopRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredTopRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering:
  // if (
  //   listOfTopRes.length === 0 ||
  //   listOfRestaurants.length === 0 ||
  //   imageOfFoods.length === 0
  // ) {
  //   return <Shimmer />;
  // }

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
      <h2 className="restaurantChainHeading text-3xl mt-10">
        Top restaurant chains in Kolkata
      </h2>
      <div className="filters flex justify-start items-center px-3">
        <div className="filterBtn">
          <button
            className="filter-btn border border-none text-white bg-black rounded-xl w-[100px] h-10 px-2 "
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
            className="border border-solid border-black rounded-xl w-[350px] h-10 px-3"
          />
          <button
            className="searchBtn mx-2 border border-none text-white bg-black rounded-xl w-[70px] h-8 px-2 hover:bg-blue-950 active:bg-teal-950"
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
          <RestaurantCard
            key={eachRestaurant.info.id}
            restaurantData={eachRestaurant}
          />
        ))}
      </div>
      <h2 className="allRestaurantListHeading text-3xl mt-2">
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
          <RestaurantCard key={eachRes.info.id} restaurantData={eachRes} />
        ))}
      </div>
    </div>
  );
};

export default Body;
