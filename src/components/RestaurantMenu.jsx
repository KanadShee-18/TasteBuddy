import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantDeals from "./RestaurantDeals";
import RestaurantItems from "./RestaurantItems";
import useRestaurantMenu from "../utills/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [isExpanded, setIsExpanded] = useState(false);

  const [showIndex, setShowIndex] = useState(0);

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

  console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

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
      {categories.map((c, index) => (
        // Controlled Component
        <RestaurantCategory
          key={c?.card?.card?.title}
          data={c?.card?.card}
          isExpanded={index === showIndex && true}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
