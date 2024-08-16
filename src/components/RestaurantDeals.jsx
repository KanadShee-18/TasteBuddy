import React from "react";
import DealSlider from "./DealSlider";

const RestaurantDeals = ({ itemDeals }) => {
  return itemDeals.length > 0 ? (
    <div className="deals mt-5 mx-8 inlin">
      <h2 className="w-full mb-4 font-txtFont font-semibold text-xl">
        Deals for you
      </h2>
      <DealSlider offerData={itemDeals} />
    </div>
  ) : (
    <div>
      <h2 className="font-txtFont font-medium text-lg pt-4 pl-2 mb-4">
        Deals for you
      </h2>
      <ul>
        <li>No items found</li>
      </ul>
    </div>
  );
};

export default RestaurantDeals;
