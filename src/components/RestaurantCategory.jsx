import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isExpanded, setShowIndex }) => {
  const items = data?.itemCards || [];

  const handleToggle = () => {
    setShowIndex();
  };

  return (
    <div>
      <div
        onClick={handleToggle}
        className="flex items-center bg-slate-50 shadow-md my-4 rounded-md cursor-pointer"
      >
        <span className="font-txtFont font-semibold text-slate-800 text-lg pt-4 pl-2 mb-4 flex-1">
          {data.title} ({data?.itemCards?.length})
        </span>
        {isExpanded ? (
          <FaChevronUp className="mr-2 text-xl text-gray-600 hover:text-gray-800 transition duration-200" />
        ) : (
          <FaChevronDown className="mr-2 text-xl text-gray-600 hover:text-gray-800 transition duration-200" />
        )}
      </div>
      {isExpanded && <ItemList items={items} />}
      <div className="w-full h-3 bg-slate-200 rounded-sm"></div>
    </div>
  );
};

export default RestaurantCategory;
