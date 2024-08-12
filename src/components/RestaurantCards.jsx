import { CDN_URL } from "../utills/constants";
import { MdDeliveryDining } from "react-icons/md";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    restaurantData?.info;
  const { deliveryTime } = restaurantData?.info.sla;
  return (
    <div className="res-card cursor-pointer w-[273px] h-[300px] m-4 border-none rounded-xl ease-in-out hover:scale-105 duration-200 relative">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo w-full h-44 object-cover rounded-xl"
        style={{
          boxShadow: "inset 0 -20px 20px -10px rgba(0, 0, 0, 0.6)",
        }}
      ></img>
      <div className="card-info px-2 font-txtFont">
        <h3 className="font-semibold text-lg text-nowrap overflow-hidden text-ellipsis">
          {name}
        </h3>
        <h3 className="font-semibold">
          <i className="fa-solid fa-star-half-stroke text-green-500"></i>{" "}
          {avgRating} ~{deliveryTime} mins
        </h3>
        <h4 className="text-gray-500  font-medium text-nowrap overflow-hidden text-ellipsis">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-gray-600 font-medium">{costForTwo}</h4>
      </div>
    </div>
  );
};

// Higher order component:
// -- input -> restaurantCard => RestaurantCard with offer

export const withOfferCards = (RestaurantCard) => {
  return (props) => {
    const { restaurantData } = props;

    // Accessing the offer data correctly
    const offerData = restaurantData?.info?.aggregatedDiscountInfoV3;

    // Extracting header and subHeader
    const header = offerData?.header;
    const subHeader = offerData?.subHeader;

    return (
      <div className="relative hover:scale-105 duration-200">
        <span className="absolute z-10 left-4 top-1/2 -my-4 bg-transparent text-[#f4f4f4] text-2xl font-extrabold font-txtFont px-2 py-1 rounded-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {header} {subHeader}
        </span>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
