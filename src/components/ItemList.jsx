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
                        <div className="w-8/12 details">
                            <h3 className="font-semibold text-gray-800 text-md font-txtFont">
                                {item.card.info.name}
                            </h3>
                            <h2 className="pb-1 font-semibold text-gray-700 text-md font-txtFont">
                                <i className="fa-solid fa-indian-rupee-sign text-[14px]"></i>
                                &nbsp;
                                {item.card.info.price / 100 ||
                                    item.card.info.defaultPrice / 100}
                                <br />
                            </h2>
                            {item.card.info.ratings?.aggregatedRating
                                ?.rating && (
                                <h2 className="text-[15px] text-gray-600 font-txtFont font-semibold pb-2">
                                    <i className="pr-1 text-green-600 fa-solid fa-star-half-stroke"></i>
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
                            <p className="font-txtFont text-[14px] font-medium text-gray-700">
                                {item.card.info.description || ""}
                            </p>
                        </div>
                        <div className="relative w-40 h-36">
                            <img
                                className="relative object-cover w-full h-full mt-2 rounded-xl mb-7"
                                src={IMAGE_URL + item.card.info.imageId}
                                alt="img"
                            />
                            <button
                                className="border font-txtFont border-none absolute -bottom-5 left-7 text-green-600 text-lg font-semibold bg-gradient-to-r from-green-200 to-slate-100 rounded-md w-[100px] h-10 px-2 hover:scale-110 duration-200 active:bg-gradient-to-r active:from-green-500 active:to-slate-400 active:text-white"
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
