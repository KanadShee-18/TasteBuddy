import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantDeals from "./RestaurantDeals";
import useRestaurantMenu from "../utills/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import leftMenu from "./leftMenu.png";
import rightMenu from "./rightMenu.png";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  const resInfo = useRestaurantMenu(resId);

  if (!resInfo) return <Shimmer />;
  console.log("resInfo = ", resInfo);

  const {
    name,
    areaName,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
    expectationNotifiers,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  const itemDeals =
    resInfo?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];

  const enrichedText = expectationNotifiers
    ? stripHtmlTags(expectationNotifiers[0].enrichedText)
    : "";

  return (
    <div className="menu lg:w-1/2 md:w-2/3 m-auto pt-5 sm:w-3/4">
      <RestaurantHeader
        name={name}
        avgRating={avgRating}
        totalRatingsString={totalRatingsString}
        costForTwoMessage={costForTwoMessage}
        cuisines={cuisines}
        areaName={areaName}
        sla={sla}
        enrichedText={enrichedText}
      />
      <RestaurantDeals itemDeals={itemDeals} />
      <div className="my-8 flex flex-wrap justify-center items-center">
        <span>
          <img className="w-[40px] mr-2" src={leftMenu} alt="" />
        </span>
        <p className="font-txtFont">M E N U</p>
        <span>
          <img className="w-[40px] ml-2" src={rightMenu} alt="" />
        </span>
      </div>
      <div className="flex flex-col mb-8">
        <div className="w-full h-[45px] m-auto border-1 border-black rounded-md flex justify-center items-center shadow-[0px_8px_19px_0px_#718096] ">
          <input
            type="text"
            placeholder="Search your food item here"
            className="w-full px-2 border-none outline-none font-txtFont text-base text-center"
          />
        </div>
      </div>
      {categories.map((c, index) => (
        <RestaurantCategory
          key={c?.card?.card?.title}
          data={c?.card?.card}
          isExpanded={index === showIndex}
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
