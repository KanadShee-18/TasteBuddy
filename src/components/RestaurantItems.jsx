import { MdStars } from "react-icons/md";
import vegImg from "./vegImg.png";
import BSImg from "./BSImg.png";
import { IMAGE_URL } from "../utills/constants";

const RestaurantItems = ({ itemCards }) =>
  itemCards.length > 0 ? (
    <div>
      <h2 className="font-txtFont font-semibold text-xl pt-4 pl-2 mb-4">
        Recommended ({itemCards.length})
      </h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            <div className="w-full h-auto p-3 mb-4">
              <div className="flex flex-wrap justify-between">
                <div className="w-8/12">
                  <div className="flex flex-wrap">
                    {/* <img className="h-[24px] pr-3" src={vegImg} alt="img" /> */}
                    <MdStars className="text-[22px] text-[#ff5d0d]" />
                    <img className="h-[22px]" src={BSImg} alt="img" />
                  </div>
                  <h3 className="text-md text-gray-800 font-txtFont font-semibold">
                    {item.card.info.name}
                  </h3>
                  <h2 className="text-md text-gray-700 font-txtFont font-semibold pb-1">
                    <i className="fa-solid fa-indian-rupee-sign text-[14px]"></i>
                    &nbsp;
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                    <br />
                  </h2>
                  {item.card.info.ratings?.aggregatedRating?.rating && (
                    <h2 className="text-[15px] text-gray-600 font-txtFont font-semibold pb-2">
                      <i className="fa-solid fa-star-half-stroke pr-1 text-green-600"></i>
                      {item.card.info.ratings.aggregatedRating.rating}(
                      {item.card.info.ratings.aggregatedRating.ratingCountV2})
                    </h2>
                  )}
                  <p className="font-txtFont text-[14px] font-medium text-gray-700">
                    {item.card.info.description || ""}
                  </p>
                </div>
                <div className="relative w-40 h-36">
                  <img
                    className="object-cover rounded-xl w-40 h-36 mb-7"
                    src={IMAGE_URL + item.card.info.imageId}
                    alt="img"
                  />
                  <button className="shadow-lg border border-gray-200 bg-slate-100 absolute -bottom-5 left-8 rounded-lg px-7 py-1 font-txtFont font-semibold text-[18px] ease-in-out text-green-600 hover:bg-white hover:scale-105 duration-200 hover:text-green-700 hover:border-none active:bg-teal-500 active:text-white">
                    ADD
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full h-0.5 bg-slate-200 my-6"></div>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <h2 className="font-txtFont font-medium text-lg pt-4 pl-2 mb-4">
        Recommended (0)
      </h2>
      <ul>
        <li>No items found</li>
      </ul>
    </div>
  );

export default RestaurantItems;
