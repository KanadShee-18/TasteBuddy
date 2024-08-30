import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import RestaurantCard from "./RestaurantCards";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utills/useOnliineStatus";
import useFetchRestaurants from "../utills/useFetchRestaurants";
import Offline from "./Offline";
import { MdClose } from "react-icons/md";
import Slider from "./Slider";
import TopResSlider from "./TopResSlider";
import { IoSearch } from "react-icons/io5";
import CuisinesCard from "./CuisinesCard";
import ShimmerCuisines from "./ShimmerCuisines";
import ShimmerResCard from "./ShimmerResCard";
import ShimmerBanner from "./ShimmerBanner";
import { IoFilter } from "react-icons/io5";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredTopRes, setFilteredTopRes] = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [isSortedByDeliveryTime, setIsSortedByDeliveryTime] = useState(false);
    const [isSortedByCost, setIsSortedByCost] = useState(false);
    const [isTopRated, setIsTopRated] = useState(false);

    const dispatch = useDispatch();
    const location = useSelector((store) => store.location?.locationDetails);
    const [district, setDistrictState] = useState(location?.district);
    const [lat, setLat] = useState(location?.lat);
    const [lng, setLng] = useState(location?.lng);

    useEffect(() => {
        if (location) {
            setDistrictState(location.district);
            setLat(location.lat);
            setLng(location.lng);
        }
    }, [location]);

    const {
        imageOfFoods,
        cuisines,
        listOfTopRes: fetchedTopRes,
        listOfRestaurants: fetchedListOfRestaurants,
        setFilteredTopRes: setFetchedFilteredTopRes,
        setListOfRestaurants: setFetchedListOfRestaurants,
        loading,
    } = useFetchRestaurants(lat, lng);

    const handleTopRatedSort = () => {
        if (isTopRated) {
            setListOfRestaurants(fetchedListOfRestaurants);
        } else {
            const sortedList = [...fetchedListOfRestaurants].filter(
                (res) => res.info.avgRating >= 4.5
            );
            setListOfRestaurants(sortedList);
        }
        setIsTopRated(!isTopRated);
    };

    const handleDeliveryTimeSort = () => {
        if (isSortedByDeliveryTime) {
            // Remove sorting
            setListOfRestaurants(fetchedListOfRestaurants);
        } else {
            // Apply sorting by delivery time in decreasing order
            const sortedList = [...fetchedListOfRestaurants].sort(
                (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
            );
            setListOfRestaurants(sortedList);
        }
        // Toggle the sorting state
        setIsSortedByDeliveryTime(!isSortedByDeliveryTime);
    };

    const handleCostSort = () => {
        if (isSortedByCost) {
            // Remove sorting
            setListOfRestaurants(fetchedListOfRestaurants);
        } else {
            // Apply sorting by cost in decreasing order
            const sortedList = [...fetchedListOfRestaurants].sort((a, b) => {
                const costA = parseInt(
                    a.info.costForTwo
                        .replace(/₹| for two/g, "")
                        .replace(/,/g, "")
                        .trim()
                );
                const costB = parseInt(
                    b.info.costForTwo
                        .replace(/₹| for two/g, "")
                        .replace(/,/g, "")
                        .trim()
                );
                return costA - costB; // Sort in decreasing order
            });
            setListOfRestaurants(sortedList);
        }
        // Toggle the sorting state
        setIsSortedByCost(!isSortedByCost);
    };

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) return <Offline />;

    useEffect(() => {
        if (fetchedTopRes) setFilteredTopRes(fetchedTopRes);
        if (fetchedListOfRestaurants)
            setListOfRestaurants(fetchedListOfRestaurants);
    }, [fetchedTopRes, fetchedListOfRestaurants]);

    // Display Shimmer until all data is loaded
    if (loading) {
        return <Shimmer />;
    }

    return (
        <div className="main my-2 md:mx-[calc(10%+36px)] mx-[calc(7%)] min-h-screen">
            {/* Your existing code for rendering the body content */}
            <h2 className="mt-3 text-lg font-semibold md:text-2xl text-slate-700 woym_heading font-txtFont">
                What's on your mind?
            </h2>

            {imageOfFoods && imageOfFoods.length > 0 ? (
                <Slider data={imageOfFoods} />
            ) : (
                <ShimmerBanner num={6} />
            )}

            {/* <Slider data={imageOfFoods} /> */}

            <h2 className="mt-8 mb-4 text-lg font-semibold md:text-2xl md:mt-14 text-slate-700 restaurantChainHeading font-txtFont">
                Top restaurant chains in {district}
            </h2>
            <div className="flex flex-wrap items-center mb-3">
                <div className="w-2/3 h-8 md:h-[45px] ml-4 flex rounded-md items-center shadow-md md:w-1/2 lg:w-1/4">
                    <input
                        type="text"
                        placeholder="Search your fav food"
                        value={searchText}
                        onChange={(event) => {
                            setSearchText(event.target.value);
                        }}
                        className="w-full px-2 text-sm font-medium text-center border-none outline-none text-slate-500 font-txtFont"
                    />
                    <button
                        className="searchBtn h-8 md:h-[45px] ml-2 flex justify-center items-center border border-none text-slate-700 rounded-r-md px-5 active:scale-y-105 duration-200"
                        onClick={() => {
                            const filterRes = fetchedTopRes.filter((eachData) =>
                                eachData.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            );
                            setFilteredTopRes(filterRes);
                        }}
                    >
                        <IoSearch className="p-1 duration-200 ease-in-out rounded-full text-slate-400 hover:text-slate-600 md:size-9 size-6 hover:bg-slate-200 hover:scale-110" />
                    </button>
                </div>
            </div>
            {filteredTopRes && filteredTopRes.length > 0 ? (
                <TopResSlider data={filteredTopRes} />
            ) : (
                <ShimmerResCard num={4} />
            )}

            <h2 className="mt-16 mb-4 text-lg font-semibold md:text-2xl text-slate-700 allRestaurantListHeading font-txtFont">
                Restaurants with online food delivery in {district}
            </h2>
            <div className="flex filterBtn gap-x-3">
                <button className="flex items-center justify-between w-auto h-10 md:px-4 px-2 mt-3 md:ml-10 ml-3 text-[12px] md:text-base font-semibold border-none md:mr-7 mr:4 text-slate-600 rounded-tl-3xl rounded-br-3xl rounded-tr-md rounded-bl-md bg-gradient-to-r from-slate-300 to-zinc-100 font-txtFont">
                    Filters
                    <IoFilter className="ml-3 text-slate-500 md:size-6 size-4" />
                </button>
                <button
                    className={`w-auto h-10 md:text-base text-[12px] px-2 mt-3 font-semibold border border-slate-300 rounded-md font-txtFont ${
                        isTopRated
                            ? "text-slate-700 bg-gradient-to-br from-slate-300 to-slate-100"
                            : "text-slate-500 bg-gradient-to-br from-slate-200 to-slate-10"
                    } hover:bg-gradient-to-bl hover:from-slate-50 hover:to-slate-300`}
                    onClick={handleTopRatedSort} // Updated handler for Top Rated
                >
                    {isTopRated ? (
                        <span className="flex items-center">
                            Rated 4.0+ <MdClose className="ml-2" />
                        </span>
                    ) : (
                        "Rated 4.0+"
                    )}
                </button>
                <button
                    className={`w-auto h-10 md:text-base text-[12px] px-2 mt-3 font-semibold border border-slate-300 rounded-md font-txtFont ${
                        isSortedByDeliveryTime
                            ? "text-slate-700 bg-gradient-to-br from-slate-300 to-slate-100"
                            : "text-slate-500 bg-gradient-to-br from-slate-200 to-slate-10"
                    } hover:bg-gradient-to-bl hover:from-slate-50 hover:to-slate-300`}
                    onClick={handleDeliveryTimeSort}
                >
                    {isSortedByDeliveryTime ? (
                        <span className="flex items-center">
                            Fast Delivery <MdClose className="ml-2" />
                        </span>
                    ) : (
                        "Fast Delivery"
                    )}
                </button>
                <button
                    className={`hidden xsm:block w-auto h-10 md:text-base text-[12px] px-2 mt-3 font-semibold border border-slate-300 rounded-md font-txtFont ${
                        isSortedByCost
                            ? "text-slate-700 bg-gradient-to-br from-slate-300 to-slate-100"
                            : "text-slate-500 bg-gradient-to-br from-slate-100 to-slate-50"
                    } hover:bg-gradient-to-bl hover:from-slate-50 hover:to-slate-300`}
                    onClick={handleCostSort}
                >
                    {isSortedByCost ? (
                        <span className="flex items-center">
                            Cost Low to High <MdClose className="ml-2" />
                        </span>
                    ) : (
                        "Cost Low to High"
                    )}
                </button>
            </div>
            <div className="flex flex-wrap justify-around allRestaurantContainer mt-15">
                {listOfRestaurants && listOfRestaurants.length > 0 ? (
                    listOfRestaurants.map((eachRes) => (
                        <Link
                            key={eachRes.info.id}
                            to={"/restaurants/" + eachRes.info.id}
                        >
                            <RestaurantCard restaurantData={eachRes} />
                        </Link>
                    ))
                ) : (
                    <ShimmerResCard num={8} />
                )}
            </div>

            <h2 className="mt-10 mb-4 text-lg font-semibold md:text-2xl allRestaurantListHeading font-txtFont">
                Best Cuisines Near Me
            </h2>
            <div className="flex flex-wrap allCuisines mt-15 justify-evenly">
                {cuisines && cuisines.length > 0 ? (
                    cuisines.map((eachCuisine) => (
                        <CuisinesCard
                            key={eachCuisine.text}
                            text={eachCuisine.text}
                        />
                    ))
                ) : (
                    <ShimmerCuisines />
                )}
            </div>

            <h2 className="mt-6 mb-4 text-lg font-semibold md:text-2xl allRestaurantListHeading font-txtFont">
                Explore Every Restaurants Near Me
            </h2>
            <div className="flex flex-wrap mx-8 md:gap-x-6 gap-x-3">
                <div className="md:w-[320px] w-[150px] lg:w-[350px] mb-3 font-txtFont md:text-base text-[12px] flex justify-center rounded-xl items-center font-medium text-slate-700 flex-wrap text-center px-3 py-5 bg-gradient-to-bl from-slate-100 to-neutral-100 ease-in-out hover:cursor-pointer hover:scale-95 duration-150 hover:bg-gradient-to-bl hover:from-neutral-200 hover:to-slate-200">
                    Explore restaurants near me
                </div>
                <div className="md:w-[320px] w-[150px] lg:w-[350px] mb-3 font-txtFont md:text-base text-[12px] flex justify-center rounded-xl items-center font-medium text-slate-700 flex-wrap text-center px-3 py-5 bg-gradient-to-bl from-slate-100 to-neutral-100 ease-in-out hover:cursor-pointer hover:scale-95 duration-150 hover:bg-gradient-to-bl hover:from-neutral-200 hover:to-slate-200">
                    <h4>Explore top rated restaurants near me</h4>
                </div>
            </div>
        </div>
    );
};

export default Body;
