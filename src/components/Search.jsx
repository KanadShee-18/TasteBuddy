import useFetchRestaurants from "../utills/useFetchRestaurants";
import { IMG_URL, CDN_URL } from "../utills/constants.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const { imageOfFoods, listOfTopRes } = useFetchRestaurants(
    "https://foodfire.onrender.com/api/restaurants?lat=18.9486&lng=72.83662&page_type=DESKTOP_WEB_LISTING"
  );

  // console.log("Images Comes", imageOfFoods);
  console.log("Top Res", listOfTopRes);
  const limitFoodItems = imageOfFoods?.slice(0, 12);

  return (
    <div>
      <div className="flex flex-col">
        <h2 className="text-center font-txtFont text-[30px] font-semibold my-4 text-gray-600">
          Search your food item here:{" "}
        </h2>
        <div className="w-2/3 h-[45px] m-auto border-1 border-black rounded-md flex justify-center items-center shadow-lg md:w-2/6">
          <input
            onChange={(e) => setSearchItem(e.target.value)}
            type="text"
            placeholder="Type your item here:"
            className="w-full px-2 text-center border-none outline-none font-txtFont text-base"
          />
        </div>
        <h1 className="w-2/3 m-auto font-txtFont font-bold mt-7 pl-3 text-slate-600">
          Popular Cuisines
        </h1>
        <div className="flex flex-row w-2/3 m-auto mb-10">
          {limitFoodItems?.map((eachData) => (
            <div key={eachData.id} className="foodCard inline-block">
              <img
                src={IMG_URL + eachData.imageId}
                className="w-32 ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                alt={eachData.name}
              />
            </div>
          ))}
        </div>

        {searchItem &&
          listOfTopRes?.length > 0 &&
          listOfTopRes
            .filter((each) =>
              each?.info.name.toLowerCase().includes(searchItem.toLowerCase())
            )
            .map((eachItem) => (
              <div
                key={eachItem.info.id}
                className="w-2/3 m-auto items-center mt-5 flex justify-start flex-shrink-0 flex-grow"
              >
                <Link to={"/restaurants/" + eachItem?.info?.id}>
                  <img
                    src={CDN_URL + eachItem?.info?.cloudinaryImageId}
                    alt="search"
                    className="w-16 h-16 rounded-full"
                  />
                  <div className="font-txtFont ml-3">
                    <p className="font-medium text-[12px]">
                      {eachItem?.info.name}
                    </p>
                    <p className="text-[11px] font-semibold text-slate-700">
                      {eachItem?.info?.cuisines.join(", ")}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Search;
