// import { MdStars } from "react-icons/md";
import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../utills/constants";
import { addItem } from "../utills/cartSlice";

const ItemList = ({ items, isExpanded }) => {
    const dispatch = useDispatch(); // to get access to the dispatch function

    const handleAddItem = (item) => {
        // Dispatch an action
        dispatch(addItem(item)); // here the data we are adding is the action payload
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id}>
                    <div className="flex flex-wrap justify-between px-2 py-3">
                        <div className="md:w-8/12 w-[55%] details">
                            <h3 className="text-sm font-semibold text-gray-800 md:text-base font-txtFont">
                                {item.card.info.name}
                            </h3>
                            <h2 className="pb-1 text-sm font-semibold text-gray-700 md:text-base font-txtFont">
                                <i className="fa-solid fa-indian-rupee-sign md:text-sm text-[12px]"></i>
                                &nbsp;
                                {item.card.info.price / 100 ||
                                    item.card.info.defaultPrice / 100}
                                <br />
                            </h2>
                            {item.card.info.ratings?.aggregatedRating
                                ?.rating && (
                                <h2 className="pb-2 text-[12px] font-semibold text-gray-600 md:text-base font-txtFont">
                                    <i className="pr-1 text-[12px] text-green-600 md:text-base fa-solid fa-star-half-stroke"></i>
                                    {
                                        item.card.info.ratings.aggregatedRating
                                            .rating
                                    }
                                    (
                                    {
                                        item.card.info.ratings.aggregatedRating
                                            .ratingCountV2
                                    }
                                    )
                                </h2>
                            )}
                            <p className="font-txtFont md:text-sm text-[12px] font-medium text-gray-700 text-justify">
                                {item.card.info.description || ""}
                            </p>
                        </div>
                        <div className="relative h-24 w-28 md:w-40 md:h-36">
                            <img
                                className="relative object-cover w-full h-full mt-2 rounded-xl mb-7"
                                src={IMAGE_URL + item.card.info.imageId}
                                alt="img"
                            />
                            <button
                                className="border font-txtFont border-none absolute md:-bottom-5 md:left-7 -bottom-2 left-4 text-green-600 text-sm md:text-lg font-semibold bg-gradient-to-r from-green-200 to-slate-100 rounded-md md:w-[100px] w-[70px] md:h-10 h-7 md:px-2 px-1 hover:scale-110 duration-200 active:bg-gradient-to-r active:from-green-500 active:to-slate-400 active:text-white"
                                onClick={() => handleAddItem(item)}
                            >
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
