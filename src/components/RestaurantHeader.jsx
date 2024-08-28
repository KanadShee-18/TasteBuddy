import { MdDeliveryDining } from "react-icons/md";
import parse from "html-react-parser";
import { MdCurrencyRupee } from "react-icons/md";

const RestaurantHeader = ({
    name,
    city,
    add,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    cuisines,
    areaName,
    sla,
    feesDetails,
}) => (
    <div className="mx-[calc(5%)] md:mx-0">
        <p className="text-slate-600 text-[10px] font-txtFont">
            Home/{city}/{name}
        </p>
        <h1 className="w-full pt-5 text-lg font-semibold bg-white md:text-2xl resName top-20 font-txtFont">
            {name}
        </h1>
        <p className="text-slate-500 md:text-[12px] text-[10px] font-medium font-txtFont">
            {add}
        </p>

        <div className="px-4 pb-4 rounded-2xl bg-gradient-to-t from-gray-200 to-transparent mt-14">
            <div className="w-full h-auto p-4 bg-white border border-gray-200 border-solid rounded-2xl">
                <h3 className="text-base font-medium md:text-xl resAbout font-txtFont">
                    <i className="pr-1 text-green-600 fa-solid fa-star-half-stroke"></i>
                    {avgRating}&nbsp;({totalRatingsString}) -{" "}
                    {costForTwoMessage}
                </h3>
                <a
                    href="#"
                    className="underline font-txtFont text-[#ff5d0d] font-medium md:text-sm text-[12px] pl-3 my-5"
                >
                    {cuisines?.join(", ")}
                </a>
                <div className="flex justify-start pl-5 mt-2 item-center">
                    <p className="mr-2 md:text-sm text-[13px] font-txtFont font-medium">
                        Outlet &nbsp;{" "}
                    </p>
                    <p className="md:text-sm text-[12px] font-txtFont font-medium text-gray-500 mr-2">
                        {areaName}
                    </p>
                    <i className="fa-solid fa-caret-down mt-0.5 text-[#ff5d0d] cursor-pointer"></i>
                </div>
                <p className="md:text-sm text-[13px] font-txtFont font-medium pl-5 my-2 text-gray-900 hover:underline underline-offset-2">
                    <i className="mr-2 text-gray-400 fa-solid fa-timeline"></i>
                    {sla.slaString}
                </p>
                <div className="w-full h-0.5 bg-slate-100"></div>
                <div className="flex items-center mt-2">
                    <MdDeliveryDining className="mr-2 text-gray-700 text-[25px]" />
                    <p
                        className="flex items-center justify-center md:text-sm text-[13px] font-normal text-gray-500 font-txtFont"
                        dangerouslySetInnerHTML={{ __html: feesDetails }}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default RestaurantHeader;
