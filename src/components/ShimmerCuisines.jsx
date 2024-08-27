import React from "react";

const ShimmerCuisines = () => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            {Array(8)
                .fill("")
                .map((_, index) => (
                    <div className="w-[300px] mx-3 mb-5 h-[60px] rounded-lg bg-slate-200 animate-pulse"></div>
                ))}
        </div>
    );
};

export default ShimmerCuisines;
