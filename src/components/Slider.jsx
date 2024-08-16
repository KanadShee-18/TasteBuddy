import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Banner from "./Banner.jsx";

const Slider = ({ data }) => {
  console.log(data);

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
      <div className="absolute flex items-center gap-1 justify-end top-6 -right-14 z-[5]">
        <button
          onClick={slideLeft}
          className="bg-slate-100 p-2 rounded-full text-slate-400 hover:text-slate-500 hover:bg-slate-300"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={slideRight}
          className="bg-slate-100 p-2 rounded-full text-slate-400 hover:text-slate-500 hover:bg-slate-300"
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