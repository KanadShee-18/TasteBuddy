import useFetchRestaurants from "../utills/useFetchRestaurants";
import { IMG_URL, CDN_URL } from "../utills/constants.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
    const [searchItem, setSearchItem] = useState("");
    const location = useSelector((store) => store.location?.locationDetails);

    const [lat, setLat] = useState(location?.lat);
    const [lng, setLng] = useState(location?.lng);

    useEffect(() => {
        if (location) {
            setLat(location.lat);
            setLng(location.lng);
        }
    }, [location]);

    const { imageOfFoods, listOfTopRes } = useFetchRestaurants(lat, lng);

    const limitFoodItems = imageOfFoods?.slice(0, 12);

    // Filter the restaurants based on the search query
    const filteredResults = listOfTopRes?.filter((each) =>
        each?.info.name.toLowerCase().includes(searchItem.toLowerCase())
    );

    return (
        <div className="min-h-screen ">
            <div className="flex flex-col">
                <h2 className="text-center font-txtFont md:text-[30px] text-lg font-semibold my-4 text-gray-600">
                    Search your food item here:{" "}
                </h2>
                <div className="w-2/3 h-[45px] m-auto border-1 border-black rounded-md flex justify-center items-center shadow-lg md:w-2/6">
                    <input
                        onChange={(e) => setSearchItem(e.target.value)}
                        type="text"
                        placeholder="Type your item here:"
                        className="w-full px-2 text-sm text-center border-none outline-none md:text-base font-txtFont"
                    />
                </div>
                <h1 className="w-2/3 pl-3 m-auto font-bold font-txtFont mt-7 text-slate-600">
                    Popular Cuisines
                </h1>
                <div className="flex flex-row w-2/3 m-auto mb-10">
                    {limitFoodItems?.map((eachData) => (
                        <div
                            key={eachData.id}
                            className="inline-block foodCard"
                        >
                            <img
                                src={IMG_URL + eachData.imageId}
                                className="w-32 duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:scale-110"
                                alt={eachData.name}
                            />
                        </div>
                    ))}
                </div>

                {searchItem && filteredResults.length > 0 ? (
                    filteredResults.map((eachItem) => (
                        <div
                            key={eachItem.info.id}
                            className="flex items-center justify-start flex-grow flex-shrink-0 w-2/3 m-auto mt-5"
                        >
                            <Link to={"/restaurants/" + eachItem?.info?.id}>
                                <img
                                    src={
                                        CDN_URL +
                                        eachItem?.info?.cloudinaryImageId
                                    }
                                    alt="search"
                                    className="w-16 h-16 duration-200 ease-in-out rounded-tr-sm rounded-bl-sm rounded-tl-3xl rounded-br-3xl hover:scale-110"
                                />
                                <div className="ml-1 font-txtFont">
                                    <p className="text-sm font-semibold text-slate-600">
                                        {eachItem?.info.name}
                                    </p>
                                    <p className="text-[12px] font-semibold text-slate-500 italic">
                                        {eachItem?.info?.cuisines.join(", ")}
                                    </p>
                                </div>
                                <div className="w-full h-[1px] bg-slate-400"></div>
                            </Link>
                        </div>
                    ))
                ) : searchItem && filteredResults.length === 0 ? (
                    <div className="flex justify-center mt-10">
                        <p className="text-lg italic font-semibold text-gray-600 font-txtFont">
                            No items found with "{searchItem}"
                        </p>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Search;
