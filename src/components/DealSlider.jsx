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
        <div className="relative">
            <div className="absolute flex items-center gap-1 justify-end -top-10 -right-14 z-[5]">
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
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
                {offerData?.map((eachData, index) => (
                    <Offer key={index} dealData={eachData} />
                ))}
            </div>
        </div>
    );
};

export default DealSlider;
