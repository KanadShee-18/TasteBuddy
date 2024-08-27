import React from "react";

const ShimmerBanner = ({ num }) => {
    return (
        <div className="flex flex-wrap gap-5 mb-8 justify-evenly shimmerFoodimgContainer">
            {Array(num)
                .fill("")
                .map((_, index) => (
                    <div className="flex flex-col items-center justify-center">
                        <div className="w-[100px] rounded-full mx-3 mb-5 h-[100px] bg-slate-200 animate-pulse flex items-center justify-center">
                            <div className="w-20 h-20 p-5 rounded-full bg-slate-400"></div>
                        </div>
                        <div className="w-24 mt-2 rounded-md bg-slate-600 h-7"></div>
                    </div>
                ))}
        </div>
    );
};

export default ShimmerBanner;
