import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Banner from "./Banner.jsx";

const Slider = ({ data }) => {
    const slideLeft = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft -= 250;
    };
    const slideRight = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft += 250;
    };

    return (
        <div className="relative">
            <div className="absolute flex items-center gap-1 justify-end md:top-6 md:-right-14 top-0 right-0 z-[5]">
                <button
                    onClick={slideLeft}
                    className="p-1 rounded-full md:p-2 bg-slate-100 text-slate-400 hover:text-slate-500 hover:bg-slate-300"
                >
                    <FaArrowLeft />
                </button>
                <button
                    onClick={slideRight}
                    className="p-1 rounded-full md:p-2 bg-slate-100 text-slate-400 hover:text-slate-500 hover:bg-slate-300"
                >
                    <FaArrowRight />
                </button>
            </div>
            <div
                id="slider"
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
                {data?.map((eachData) => (
                    <Banner key={eachData.id} foodData={eachData} />
                ))}
            </div>
        </div>
    );
};

export default Slider;
