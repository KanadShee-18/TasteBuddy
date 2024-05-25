import { CDN_URL } from "../utills/constants";
import { MdDeliveryDining } from "react-icons/md";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    restaurantData?.info;
  const { deliveryTime } = restaurantData?.info.sla;
  return (
    <div className="res-card cursor-pointer w-[273px] h-auto m-4 border-none rounded-xl ease-in-out hover:scale-105 duration-200">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo w-full h-44 object-cover rounded-t-xl "
      ></img>
      <div className="card-info px-2 font-txtFont">
        <h3 className="font-semibold text-lg">{name}</h3>
        <h3 className="font-semibold">
          <i className="fa-solid fa-star-half-stroke text-green-500"></i>{" "}
          {avgRating} ~{deliveryTime} mins
        </h3>
        <h4 className="text-gray-500  font-medium">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-600 font-medium">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
