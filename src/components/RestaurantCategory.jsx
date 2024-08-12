import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, isExpanded }) => {
  const items = data?.itemCards || [];

  const handleToggle = () => {
    // setIsExpanded(!isExpanded);
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

        <button
          onClick={handleToggle}
          className="mr-2 text-gray-600 hover:text-gray-800 transition duration-200"
        >
          {isExpanded ? (
            <FaChevronUp className="text-xl" />
          ) : (
            <FaChevronDown className="text-xl" />
          )}
        </button>
      </div>
      {isExpanded && <ItemList items={items} />}
      <div className="w-full h-3 bg-slate-300 rounded-sm"></div>
    </div>
  );
};

export default RestaurantCategory;
