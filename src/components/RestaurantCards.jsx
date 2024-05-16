import { CDN_URL } from "../utills/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    restaurantData?.info;
  const { deliveryTime } = restaurantData?.info.sla;
  return (
    <div className="res-card cursor-pointer w-[273px] h-auto m-4 border-none rounded-xl bg-gray-200 hover:shadow-lg">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo w-full h-44 object-cover rounded-t-xl "
      ></img>
      <div className="card-info px-2">
        <h3 className="font-bold text-lg">{name}</h3>
        <h3 className="font-bold">
          <i className="fa-solid fa-star-half-stroke text-green-500"></i>{" "}
          {avgRating} ~{deliveryTime} mins
        </h3>
        <h4 className="text-gray-500 font-[600]">{cuisines.join(", ")}</h4>
        <h4 className="text-gray-600 font-[600]">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
