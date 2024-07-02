import { MdDeliveryDining } from "react-icons/md";

const RestaurantHeader = ({
  name,
  avgRating,
  totalRatingsString,
  costForTwoMessage,
  cuisines,
  areaName,
  sla,
  enrichedText,
}) => (
  <div>
    <h1 className="resName w-full top-20 fixed text-2xl font-txtFont font-semibold pb-5 pt-5 bg-white z-10">
      {name}
    </h1>
    <div className="rounded-2xl p-4 bg-gradient-to-t from-gray-200 to-transparent mt-14">
      <div className="w-full h-auto bg-white border-gray-200 rounded-2xl border border-solid p-4">
        <h3 className="resAbout text-xl font-txtFont font-medium">
          <i className="fa-solid fa-star-half-stroke pr-1 text-green-600"></i>
          {avgRating}&nbsp;({totalRatingsString}) - {costForTwoMessage}
        </h3>
        <a
          href="#"
          className="underline font-txtFont text-[#ff5d0d] font-medium text-sm pl-3 my-5"
        >
          {cuisines?.join(", ")}
        </a>
        <div className="flex justify-start item-center pl-5 mt-2">
          <p className="mr-2 text-[14px] font-txtFont font-medium">
            Outlet &nbsp;{" "}
          </p>
          <p className="text-[14px] font-txtFont font-normal text-gray-500 mr-2">
            {areaName}
          </p>
          <i className="fa-solid fa-caret-down mt-0.5 text-[#ff5d0d] cursor-pointer"></i>
        </div>
        <p className="text-[14px] font-txtFont font-medium pl-5 my-2 text-gray-900 hover:underline underline-offset-2">
          <i className="fa-solid fa-timeline mr-2 text-gray-400"></i>
          {sla.slaString}
        </p>
        <div className="w-full h-0.5 bg-slate-100"></div>
        <div className="flex items-center mt-2">
          <MdDeliveryDining className="mr-2 text-gray-700 text-[25px]" />
          <p className="font-txtFont text-gray-500 font-normal text-sm">
            {enrichedText}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default RestaurantHeader;
