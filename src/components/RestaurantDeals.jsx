import React from "react";
import DealSlider from "./DealSlider";

const RestaurantDeals = ({ itemDeals }) => {
    console.log("itemDeals: ", itemDeals);

    return itemDeals.length > 0 ? (
        <div className="mx-8 mt-5 deals inlin">
            <h2 className="w-full mb-4 text-xl font-semibold font-txtFont">
                Deals for you
            </h2>
            <DealSlider offerData={itemDeals} />
        </div>
    ) : (
        <div>
            <h2 className="pt-4 pl-2 mb-4 text-lg font-medium font-txtFont">
                Deals for you
            </h2>
            <ul>
                <li>No items found</li>
            </ul>
        </div>
    );
};

export default RestaurantDeals;
