import { CDN_URL } from "../utills/constants";
import { MdDeliveryDining } from "react-icons/md";

const RestaurantCard = (props) => {
    const { restaurantData } = props;
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } =
        restaurantData?.info;
    const { deliveryTime } = restaurantData?.info.sla;
    const offerData = restaurantData?.info?.aggregatedDiscountInfoV3;
    const header = offerData?.header;
    const subHeader = offerData?.subHeader;

    return (
        <div className="res-card inline-block cursor-pointer md:w-[273px] w-[150px] md:h-[300px] h-[180px] m-4 border-none rounded-xl ease-in-out hover:scale-105 duration-200 transform relative">
            <div className="relative w-full h-36 md:h-44">
                <img
                    src={CDN_URL + cloudinaryImageId}
                    alt="res-logo"
                    className="object-cover w-full h-full res-logo rounded-xl"
                />
                <span className="absolute bottom-0 left-0 flex flex-col justify-end w-full p-2 font-bold text-white h-1/2 bg-gradient-to-t from-black to-transparent font-txtFont rounded-b-xl">
                    <h1 className="md:text-2xl text-sm text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                        {header} {subHeader}
                    </h1>
                </span>
            </div>
            <div className="px-2 card-info font-txtFont">
                <h3 className="overflow-hidden text-base font-semibold md:text-lg text-nowrap text-ellipsis">
                    {name}
                </h3>
                <h3 className="text-sm font-semibold text-slate-700 font-txtFont md:text-lg">
                    <i className="text-green-500 fa-solid fa-star-half-stroke"></i>{" "}
                    {avgRating} ~{deliveryTime} mins
                </h3>
                <h4 className="overflow-hidden text-[13px] font-medium text-gray-500 md:text-base text-nowrap text-ellipsis">
                    {cuisines.join(", ")}
                </h4>
                <h4 className="text-sm font-medium text-gray-600 md:text-base">
                    {costForTwo}
                </h4>
            </div>
        </div>
    );
};

export default RestaurantCard;

// Higher order component:
// -- input -> restaurantCard => RestaurantCard with offer

// export const withOfferCards = (RestaurantCard) => {
//   return (props) => {
//     const { restaurantData } = props;

//     // Accessing the offer data correctly
//     const offerData = restaurantData?.info?.aggregatedDiscountInfoV3;

//     // Extracting header and subHeader
//     const header = offerData?.header;
//     const subHeader = offerData?.subHeader;

//     return (
//       <div className="relative duration-200 hover:scale-105">
//         <span className="absolute w-[273px] z-10 left-4 top-1/2 -my-4 text-[#f4f4f4] text-2xl bg-gradient-to-t from-slate-600 to-transparent font-extrabold font-txtFont px-2 pt-3 rounded-md drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
//           {header} {subHeader}
//         </span>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

// export default RestaurantCard;
