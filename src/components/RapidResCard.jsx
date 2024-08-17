import React from "react";

const RapidResCard = (props) => {
  const { restaurantsList } = props;
  return (
    <div className="res-card inline-block cursor-pointer w-[273px] h-[300px] m-4 border-none rounded-xl ease-in-out hover:scale-105 duration-200 relative">
      <div className="relative w-full h-44">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
          className="res-logo w-full h-full object-cover rounded-xl"
        />
        <span className="flex flex-col justify-end absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent text-white font-bold font-txtFont p-2 rounded-b-xl">
          <h1 className="text-2xl text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {header} {subHeader}
          </h1>
        </span>
      </div>
      <div className="card-info px-2 font-txtFont">
        <h3 className="font-semibold text-lg text-nowrap overflow-hidden text-ellipsis">
          {name}
        </h3>
        <h3 className="font-semibold">
          <i className="fa-solid fa-star-half-stroke text-green-500"></i>{" "}
          {avgRating} ~{deliveryTime} mins
        </h3>
        <h4 className="text-gray-500 font-medium text-nowrap overflow-hidden text-ellipsis">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-gray-600 font-medium">{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RapidResCard;
