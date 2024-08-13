// import { MdStars } from "react-icons/md";
import { IMAGE_URL } from "../utills/constants";

const ItemList = ({ items, isExpanded }) => {
  console.log(items);
  console.log(isExpanded);

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id}>
          <div className="flex flex-wrap justify-between px-2 py-3">
            <div className="details w-8/12">
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
                className="w-full h-full object-cover rounded-xl mb-7 relative mt-2"
                src={IMAGE_URL + item.card.info.imageId}
                alt="img"
              />
              <button className="border font-txtFont border-none absolute -bottom-5 left-7 text-green-600 text-lg font-semibold bg-gradient-to-r from-green-200 to-slate-100 rounded-md w-[100px] h-10 px-2 hover:scale-110 duration-200 active:bg-gradient-to-r active:from-green-500 active:to-slate-400 active:text-white">
                ADD+
              </button>
            </div>
          </div>
          <div className="w-full h-0.5 bg-slate-200 mt-8"></div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
