import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utills/constants";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantDeals from "./RestaurantDeals";
import RestaurantItems from "./RestaurantItems";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

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

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card
      ?.card?.itemCards || [];

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
      <RestaurantItems itemCards={itemCards} />
    </div>
  );
};

export default RestaurantMenu;
