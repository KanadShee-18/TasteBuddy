import Offer from "./Offer";

const RestaurantDeals = ({ itemDeals }) =>
  itemDeals.length > 0 ? (
    <div className="deals flex flex-wrap">
      <h2 className="w-full mt-5 mb-1 font-txtFont font-semibold text-xl">
        Deals for you
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {itemDeals.map((each) => (
          <Offer dealData={each} key={each.info.restId} />
        ))}
      </div>
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

export default RestaurantDeals;
