import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isExpanded, setShowIndex }) => {
    const items = data?.itemCards || [];

    const handleToggle = () => {
        setShowIndex();
    };

    return (
        <div className="md:mx-0 mx-[calc(5%)]">
            <div
                onClick={handleToggle}
                className="flex items-center my-4 rounded-md shadow-md cursor-pointer bg-slate-50"
            >
                <span className="flex-1 pt-4 pl-2 mb-4 text-sm font-semibold md:text-lg font-txtFont text-slate-800">
                    {data.title} ({data?.itemCards?.length})
                </span>
                {isExpanded ? (
                    <FaChevronUp className="mr-2 text-base text-gray-600 transition duration-200 md:text-xl hover:text-gray-800" />
                ) : (
                    <FaChevronDown className="mr-2 text-base text-gray-600 transition duration-200 md:text-xl hover:text-gray-800" />
                )}
            </div>
            {isExpanded && <ItemList items={items} />}
            <div className="w-full h-3 rounded-sm bg-slate-200"></div>
        </div>
    );
};

export default RestaurantCategory;
