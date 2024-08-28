import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantHeader from "./RestaurantHeader";
import RestaurantDeals from "./RestaurantDeals";
import useRestaurantMenu from "../utills/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import leftMenu from "./leftMenu.png";
import rightMenu from "./rightMenu.png";
import ShimmerResMenu from "./ShimmerResMenu";
import { useSelector } from "react-redux";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(null);

    const location = useSelector((store) => store.location?.locationDetails);

    const [lat, setLat] = useState(location?.lat);
    const [lng, setLng] = useState(location?.lng);

    useEffect(() => {
        if (location) {
            setLat(location.lat);
            setLng(location.lng);
        }
    }, [location]);

    console.log("lat: ", lat, "lng: ", lng);

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

    const resInfo = useRestaurantMenu(lat, lng, resId);

    console.log("resInfo: ", resInfo);

    if (!resInfo) return <ShimmerResMenu />;

    const {
        name,
        city,
        areaName,
        cuisines,
        costForTwoMessage,
        avgRating,
        totalRatingsString,
        sla,
        expectationNotifiers,
        feeDetails,
    } = resInfo?.cards?.[2]?.card?.card?.info || {};

    const categories =
        resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (cat) =>
                cat.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) || [];

    const resAdd =
        resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (add) =>
                add.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
        ) || [];

    const itemDeals =
        resInfo?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers ||
        [];

    const enrichedText = expectationNotifiers
        ? stripHtmlTags(expectationNotifiers[0].enrichedText)
        : "";

    const feesDetails = feeDetails?.message;
    const completeAddress = resAdd?.[0]?.card?.card?.completeAddress;

    console.log("resadd: ", completeAddress);

    return (
        <div className="min-h-screen pt-5 m-auto menu lg:w-1/2 md:w-2/3 sm:w-3/4">
            <RestaurantHeader
                name={name}
                city={city}
                add={completeAddress}
                avgRating={avgRating}
                totalRatingsString={totalRatingsString}
                costForTwoMessage={costForTwoMessage}
                cuisines={cuisines}
                areaName={areaName}
                sla={sla}
                enrichedText={enrichedText}
                feesDetails={feesDetails}
            />
            <RestaurantDeals itemDeals={itemDeals} />
            <div className="flex flex-wrap items-center justify-center my-8">
                <span>
                    <img className="w-[40px] mr-2" src={leftMenu} alt="" />
                </span>
                <p className="font-txtFont">M E N U</p>
                <span>
                    <img className="w-[40px] ml-2" src={rightMenu} alt="" />
                </span>
            </div>
            {/* <div className="flex flex-col mb-8">
                <div className="w-full h-[45px] m-auto border-1 border-black rounded-md flex justify-center items-center shadow-[0px_8px_19px_0px_#718096] ">
                    <input
                        type="text"
                        placeholder="Search your food item here"
                        className="w-full px-2 text-base text-center border-none outline-none font-txtFont"
                    />
                </div>
            </div> */}
            {categories.map((c, index) => (
                <RestaurantCategory
                    key={c?.card?.card?.title}
                    data={c?.card?.card}
                    isExpanded={index === showIndex}
                    setShowIndex={() =>
                        setShowIndex(index === showIndex ? null : index)
                    }
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;
