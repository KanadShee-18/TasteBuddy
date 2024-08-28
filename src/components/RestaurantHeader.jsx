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
    <div>
        <p className="text-slate-600 text-[10px] font-txtFont">
            Home/{city}/{name}
        </p>
        <h1 className="w-full pt-5 text-2xl font-semibold bg-white resName top-20 font-txtFont">
            {name}
        </h1>
        <p className="text-slate-500 text-[12px] font-medium font-txtFont">
            {add}
        </p>

        <div className="px-4 pb-4 rounded-2xl bg-gradient-to-t from-gray-200 to-transparent mt-14">
            <div className="w-full h-auto p-4 bg-white border border-gray-200 border-solid rounded-2xl">
                <h3 className="text-xl font-medium resAbout font-txtFont">
                    <i className="pr-1 text-green-600 fa-solid fa-star-half-stroke"></i>
                    {avgRating}&nbsp;({totalRatingsString}) -{" "}
                    {costForTwoMessage}
                </h3>
                <a
                    href="#"
                    className="underline font-txtFont text-[#ff5d0d] font-medium text-sm pl-3 my-5"
                >
                    {cuisines?.join(", ")}
                </a>
                <div className="flex justify-start pl-5 mt-2 item-center">
                    <p className="mr-2 text-[14px] font-txtFont font-medium">
                        Outlet &nbsp;{" "}
                    </p>
                    <p className="text-[14px] font-txtFont font-medium text-gray-500 mr-2">
                        {areaName}
                    </p>
                    <i className="fa-solid fa-caret-down mt-0.5 text-[#ff5d0d] cursor-pointer"></i>
                </div>
                <p className="text-[14px] font-txtFont font-medium pl-5 my-2 text-gray-900 hover:underline underline-offset-2">
                    <i className="mr-2 text-gray-400 fa-solid fa-timeline"></i>
                    {sla.slaString}
                </p>
                <div className="w-full h-0.5 bg-slate-100"></div>
                <div className="flex items-center mt-2">
                    <MdDeliveryDining className="mr-2 text-gray-700 text-[25px]" />
                    <p
                        className="flex items-center justify-center text-sm font-normal text-gray-500 font-txtFont"
                        dangerouslySetInnerHTML={{ __html: feesDetails }}
                    />
                </div>
            </div>
        </div>
    </div>
);

export default RestaurantHeader;
