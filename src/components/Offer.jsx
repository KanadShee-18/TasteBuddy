import { OFFER_URL } from "../utills/constants";
import "./offer.css";

const Offer = (props) => {
  const { dealData } = props;
  const { offerLogo, header, couponCode } = dealData?.info;

  return (
    <div className="cursor-pointer p-3 flex-shrink-0 w-[calc(50%-0.5rem)] sm:w-[250px] h-[75px] mx-2 border-2 border-gray-200 rounded-xl ease-in-out hover:scale-105 duration-200 bg-gradient-to-t from-gray-200 to-gray-50">
      <div className="flex">
        <img
          className="w-11 h-11 object-cover rounded-l-xl"
          src={OFFER_URL + offerLogo}
          alt="offer"
        />
        <div className="flex flex-col justify-center pl-4">
          <h3 className="text-base font-bold font-txtFont">{header}</h3>
          <h3 className="text-sm text-gray-500 font-txtFont font-semibold">
            {couponCode}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Offer;
