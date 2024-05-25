import { OFFER_URL } from "../utills/constants";

const Offer = (props) => {
  const { dealData } = props;
  const { offerLogo, header, couponCode } = dealData?.info;
  console.log(offerLogo);
  console.log(header);
  return (
    <div className="cursor-pointer p-3 md:w-[280px] sm:w-[270px] h-auto mx-4 my-2 border-2 border-gray-200 rounded-xl ease-in-out hover:scale-105 duration-200 flex bg-gradient-to-t from-gray-200 to-gray-50">
      <div className="flex-shrink-0">
        <img
          className="w-11 h-11 object-cover rounded-l-xl"
          src={OFFER_URL + offerLogo}
          alt="offer"
        />
      </div>
      <div className="flex flex-col justify-center pl-4">
        <h2 className="text-lg font-bold font-txtFont">{header}</h2>
        <h2 className="text-sm text-gray-500 font-txtFont font-semibold">
          {couponCode}
        </h2>
      </div>
    </div>
  );
};

export default Offer;
