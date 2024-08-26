import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCard from "./RestaurantCards";
import Banner from "./Banner";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utills/useOnliineStatus";
import useFetchRestaurants from "../utills/useFetchRestaurants";
import Offline from "./Offline";
import Slider from "./Slider";
import TopResSlider from "./TopResSlider";
import RapidResCard from "./RapidResCard";
import Footer from "./Footer";
import { IoSearch } from "react-icons/io5";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredTopRes, setFilteredTopRes] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const dispatch = useDispatch();
    const location = useSelector((store) => store.location?.locationDetails);
    const [district, setDistrictState] = useState(location?.district);
    const [lat, setLat] = useState(location?.lat);
    const [lng, setLng] = useState(location?.lng);

    // Update district, lat, and lng whenever they change in Redux store
    useEffect(() => {
        if (location) {
            setDistrictState(location.district);
            setLat(location.lat);
            setLng(location.lng);
        }
    }, [location]);

    const {
        imageOfFoods,
        listOfTopRes: fetchedTopRes,
        listOfRestaurants: fetchedListOfRestaurants,
        setFilteredTopRes: setFetchedFilteredTopRes,
        setListOfRestaurants: setFetchedListOfRestaurants,
        loading,
    } = useFetchRestaurants(lat, lng);

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <Offline />;

    useEffect(() => {
        if (fetchedTopRes) setFilteredTopRes(fetchedTopRes);
        if (fetchedListOfRestaurants)
            setListOfRestaurants(fetchedListOfRestaurants);
    }, [fetchedTopRes, fetchedListOfRestaurants]);

    if (loading) {
        return <Shimmer />;
    }

    return (
        <div className="main my-2 mx-[calc(10%+36px)]">
            <h2 className="mt-3 text-2xl woym_heading font-txtFont font-md">
                What's on your mind?
            </h2>

            <Slider data={imageOfFoods} />

            <div className="line1"></div>
            <h2 className="mt-10 mb-4 text-2xl font-semibold restaurantChainHeading font-txtFont">
                Top restaurant chains in {district}
            </h2>
            <div className="flex flex-wrap items-center mb-3">
                <div className="filterBtn">
                    <button
                        className="filter-btn border border-none text-slate-700 font-semibold font-txtFont bg-gradient-to-r from-slate-300 to-slate-100 rounded-md w-[100px] h-10 px-2 hover:scale-110 duration-200"
                        onClick={() => {
                            const topRatedRestaurants = fetchedTopRes.filter(
                                (topRes) => topRes.info.avgRating >= 4.5
                            );
                            setFilteredTopRes(topRatedRestaurants);
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
                        className="w-full px-2 text-base text-center border-none outline-none font-txtFont"
                    />
                    <button
                        className="searchBtn mx-2 flex justify-center items-center border border-none text-slate-700 bg-gradient-to-r from-slate-100 to-slate-300 rounded-md w-[70px] h-8 px-2 hover:bg-gradient-to-r hover:from-slate-300 hover:to-slate-100 active:scale-y-110 duration-200 "
                        onClick={() => {
                            const filterRes = fetchedTopRes.filter((eachData) =>
                                eachData.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            );
                            setFilteredTopRes(filterRes);
                        }}
                    >
                        <IoSearch />
                    </button>
                </div>
            </div>
            <TopResSlider data={filteredTopRes} />

            <h2 className="mt-2 text-2xl font-semibold allRestaurantListHeading font-txtFont">
                Restaurants with online food delivery in {district}
            </h2>
            <div className="filterBtn">
                <button
                    className="filter-btn border border-none text-white bg-black rounded-xl w-[100px] h-10 px-2 my-3"
                    onClick={() => {
                        const filteredList = fetchedListOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);
                    }}
                >
                    Top Rated
                </button>
            </div>
            <div className="flex flex-wrap mx-2 allRestaurantContainer mt-15 justify-evenly">
                {listOfRestaurants.map((eachRes) => (
                    <Link
                        key={eachRes.info.id}
                        to={"/restaurants/" + eachRes.info.id}
                    >
                        <RestaurantCard restaurantData={eachRes} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
