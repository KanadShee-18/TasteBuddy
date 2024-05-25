import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utills/constants";
import { MdDeliveryDining, MdStars } from "react-icons/md";
import vegImg from "./vegImg.png";
import BSImg from "./BSImg.png";
import Offer from "./Offer";

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

  console.log(resInfo);

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

  console.log(itemDeals);

  const enrichedText = expectationNotifiers
    ? stripHtmlTags(expectationNotifiers[0].enrichedText)
    : "";

  return (
    <div className="menu lg:w-1/2 md:w-2/3 m-auto pt-5 sm:w-3/4">
      <h1 className="resName w-full top-20 fixed text-2xl font-txtFont font-semibold pb-5 pt-5 bg-white z-auto">
        {name}
      </h1>
      <div className="rounded-2xl p-4 bg-gradient-to-t from-gray-200 to-transparent mt-14">
        <div className="w-full h-auto bg-white border-gray-200 rounded-2xl border border-solid p-4">
          <h3 className="resAbout text-xl font-txtFont font-medium">
            <i className="fa-solid fa-star-half-stroke pr-1 text-green-600"></i>
            {avgRating}.({totalRatingsString}) - {costForTwoMessage}
          </h3>
          <a
            href="#"
            className="underline font-txtFont text-[#ff5d0d] font-medium text-sm pl-3 my-5"
          >
            {cuisines?.join(", ")}
          </a>
          <div className=" flex justify-start item-center pl-5 mt-2">
            <p className="mr-2 text-[14px] font-txtFont font-medium">
              Outlet &nbsp;{" "}
            </p>
            <p className="text-[14px] font-txtFont font-normal text-gray-500 mr-2">
              {areaName}
            </p>
            <i className="fa-solid fa-caret-down mt-0.5 text-[#ff5d0d] cursor-pointer"></i>
          </div>
          <p className="text-[14px] font-txtFont font-medium pl-5 my-2 text-gray-900 hover:underline underline-offset-2">
            <i className="fa-solid fa-timeline mr-2 text-gray-400"></i>
            {sla.slaString}
          </p>
          <div className="w-full h-0.5 bg-slate-100"></div>
          <div className="flex items-center mt-2">
            <MdDeliveryDining className="mr-2 text-gray-700 text-[25px]" />
            <p className="font-txtFont text-gray-500 font-normal text-sm">
              {enrichedText}
            </p>
          </div>
        </div>
      </div>

      {itemDeals.length > 0 ? (
        <div className="deals flex flex-wrap">
          <h2 className="w-full mt-5 mb-1 font-txtFont font-semibold text-xl">
            Deals for you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {itemDeals.map((each) => (
              <Offer dealData={each} key={each.info.restId} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2 className="font-txtFont font-medium text-lg pt-4 pl-2 mb-4">
            Deals for you
          </h2>
          <ul>
            <li>No items found</li>
          </ul>
        </div>
      )}

      {itemCards.length > 0 ? (
        <div>
          <h2 className="font-txtFont font-semibold text-xl pt-4 pl-2 mb-4">
            Recommended ({itemCards.length})
          </h2>
          <ul>
            {itemCards.map((item) => (
              <li key={item.card.info.id}>
                <div className="w-full h-auto p-3 mb-4">
                  <div className="flex flex-wrap">
                    <img className="h-[24px] pr-3" src={vegImg} alt="img" />
                    <MdStars className="text-[22px] text-[#ff5d0d]" />
                    <img className="h-[22px]" src={BSImg} alt="img" />
                  </div>
                  <h3 className="text-md text-gray-800 font-txtFont font-semibold">
                    {item.card.info.name}
                  </h3>
                  <h2 className="text-md text-gray-700 font-txtFont font-medium">
                    <i className="fa-solid fa-indian-rupee-sign text-[14px]"></i>
                    &nbsp;
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                    <br />
                  </h2>
                  <h2 className="text-sm text-gray-600 font-txtFont font-semibold">
                    <i className="fa-solid fa-star-half-stroke pr-1 text-green-600"></i>
                    {item.card.info.ratings?.aggregatedRating?.rating}(
                    {item.card.info.ratings?.aggregatedRating?.ratingCountV2})
                  </h2>
                  <p className="font-txtFont text-[13px] font-medium text-gray-700">
                    {item.card.info.description || ""}
                  </p>
                </div>
                <div className="w-full h-0.5 bg-slate-200 my-6"></div>
              </li>
            ))}
          </ul>
        </div>
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
