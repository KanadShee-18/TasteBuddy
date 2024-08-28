import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Offer from "./Offer";

const DealSlider = ({ offerData }) => {
    const slideLeft = () => {
        const DealSlider = document.getElementById("DealSlider");
        DealSlider.scrollLeft -= 320;
    };
    const DealSlideright = () => {
        const DealSlider = document.getElementById("DealSlider");
        DealSlider.scrollLeft += 320;
    };

    return (
        <div className="relative md:mx-0 mx-[calc(5%)]">
            <div className="absolute flex items-center gap-1 justify-end md:-top-10 md:-right-14 -top-10 -right-4 z-[5]">
                <button
                    onClick={slideLeft}
                    className="p-2 rounded-full bg-slate-200 text-slate-500 hover:text-slate-50 hover:bg-slate-300"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={DealSlideright}
                    className="p-2 rounded-full bg-slate-200 text-slate-500 hover:text-slate-50 hover:bg-slate-300"
                >
                    <FaArrowRight />
                </button>
            </div>
            <div
                id="DealSlider"
                className="w-full h-auto overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
                {offerData?.map((eachData, index) => (
                    <Offer key={index} dealData={eachData} />
                ))}
            </div>
        </div>
    );
};

export default DealSlider;
