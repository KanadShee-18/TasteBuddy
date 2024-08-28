import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RestaurantCard from "./RestaurantCards";
import { Link } from "react-router-dom";

const TopResTopResSlider = ({ data }) => {
    const slideLeft = () => {
        const TopResSlider = document.getElementById("TopResSlider");
        TopResSlider.scrollLeft -= 320;
    };
    const TopResSlideright = () => {
        const TopResSlider = document.getElementById("TopResSlider");
        TopResSlider.scrollLeft += 320;
    };

    return (
        <div className="relative">
            <div className="absolute flex items-center gap-1 justify-end md:-top-8 md:-right-14 -top-5 right-0 z-[5]">
                <button
                    onClick={slideLeft}
                    className="p-1 rounded-full md:p-2 bg-slate-100 text-slate-400 hover:text-slate-500 hover:bg-slate-300"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={TopResSlideright}
                    className="p-1 rounded-full md:p-2 bg-slate-100 text-slate-400 hover:text-slate-500 hover:bg-slate-300"
                >
                    <FaArrowRight />
                </button>
            </div>
            <div
                id="TopResSlider"
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
                {data?.map((eachData) => (
                    <Link to={"/restaurants/" + eachData.info.id}>
                        <RestaurantCard
                            key={eachData.info.id}
                            restaurantData={eachData}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default TopResTopResSlider;
