import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utills/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      const data = await fetch(MENU_URL + resId);
      const json = await data.json();
      setResInfo(json?.data);
    } catch (error) {
      console.error("Error fetching menu data:", error);
    }
  };

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

  return (
    <div className="menu w-1/2 m-auto pt-5">
      <h1 className="resName text-2xl font-txtFont font-semibold pb-5">
        {name}
      </h1>
      <div className="w-full h-52 border-8 border-gray-200 rounded-xl border-solid bg-slate-300 p-4">
        <h3 className="resAbout text-xl font-txtFont font-medium">
          {cuisines?.join(", ")} - {costForTwoMessage}
        </h3>
      </div>

      {itemCards.length > 0 ? (
        <>
          <h2 className="font-txtFont font-medium text-lg pt-4 pl-2 mb-4">
            Recommended ({itemCards.length})
          </h2>
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>
                <div className="w-full h-auto p-3 mb-4 bg-green-100 rounded-md border-solid border-2 border-blue-200">
                  <h3 className="text-md text-gray-600 font-txtFont font-bold">
                    {item.card.info.name}
                  </h3>
                  <h2 className="text-md text-gray-600 font-txtFont font-semibold">
                    <i className="fa-solid fa-indian-rupee-sign"></i>&nbsp;
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                    <br />
                  </h2>
                  <h2 className="text-md text-gray-500 font-txtFont font-semibold">
                    <i className="fa-solid fa-star-half-stroke pr-1 text-green-600"></i>
                    {item.card.info.ratings?.aggregatedRating?.rating}
                  </h2>
                </div>
                <div className="w-full h-4px bg-gray-500"></div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          <h2 className="font-txtFont font-medium text-lg pt-4 pl-2 mb-4">
            Recommended (0)
          </h2>
          <ul>
            <li>No items found</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RestaurantMenu;
