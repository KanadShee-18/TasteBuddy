import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Offer from "./Offer";
import { SampleNextArrow, SamplePrevArrow } from "../utills/slickArrows"; // Import custom arrows if you have them

const RestaurantDeals = ({ itemDeals }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 2.5, // Show 2 full slides and part of the next slide
    slidesToScroll: 1,
    centermode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1700, // Large screens
        settings: {
          slidesToShow: 2.5, // Show 2.5 slides
        },
      },
      {
        breakpoint: 1024, // Medium screens
        settings: {
          slidesToShow: 1.5, // Show 1.5 slides
        },
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1.2, // Show 1.2 slides
        },
      },
    ],
  };

  return itemDeals.length > 0 ? (
    <div className="deals mt-5 mx-8">
      <h2 className="w-full mb-4 font-txtFont font-semibold text-xl">
        Deals for you
      </h2>
      <Slider {...settings}>
        {itemDeals.map((each) => (
          <Offer dealData={each} key={each.info.restId} />
        ))}
      </Slider>
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
