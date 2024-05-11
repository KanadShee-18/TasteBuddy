import { CDN_URL } from "../utills/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
    restaurantData?.info;
  const { deliveryTime } = restaurantData?.info.sla;
  return (
    <div className="res-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      ></img>
      <div className="card-info">
        <h3>{name}</h3>
        <h3>
          <i className="fa-solid fa-star-half-stroke"></i> {avgRating} ~
          {deliveryTime} mins
        </h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
