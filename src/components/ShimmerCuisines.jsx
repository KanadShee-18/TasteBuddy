import React from "react";

const ShimmerCuisines = () => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            {Array(8)
                .fill("")
                .map((_, index) => (
                    <div className="md:w-[300px] w-[140px] h-[30px] mx-3 mb-5 md:h-[60px] rounded-lg bg-slate-200 animate-pulse"></div>
                ))}
        </div>
    );
};

export default ShimmerCuisines;
