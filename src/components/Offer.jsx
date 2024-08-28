import { OFFER_URL } from "../utills/constants";
import "./offer.css";

const Offer = (props) => {
    const { dealData } = props;
    const { offerLogo, header, couponCode } = dealData?.info;

    return (
        <div className="cursor-pointer py-3 md:px-3 px-2 inline-block flex-shrink-0 w-auto h-[75px] mx-2 border-2 border-gray-200 rounded-2xl ease-in-out hover:scale-105 duration-200 bg-gradient-to-t from-gray-200 to-gray-50">
            <div className="flex">
                <img
                    className="object-cover w-11 h-11 rounded-l-xl"
                    src={OFFER_URL + offerLogo}
                    alt="offer"
                />
                <div className="flex flex-col justify-center pl-4">
                    <h3 className="md:text-base text-[13px] font-bold font-txtFont">
                        {header}
                    </h3>
                    <h3 className="text-sm font-semibold text-gray-500 font-txtFont">
                        {couponCode}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Offer;
