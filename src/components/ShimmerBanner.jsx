import React from "react";

const ShimmerBanner = ({ num }) => {
    return (
        <div className="flex flex-wrap gap-5 mb-8 justify-evenly shimmerFoodimgContainer">
            {Array(num)
                .fill("")
                .map((_, index) => (
                    <div className="flex flex-col items-center justify-center">
                        <div className="md:w-[100px] w-[50px] h-[50px] rounded-full mx-3 mb-5 md:h-[100px] bg-slate-200 animate-pulse flex items-center justify-center">
                            <div className="w-10 h-10 p-5 rounded-full md:w-20 md:h-20 bg-slate-400"></div>
                        </div>
                        <div className="h-3 mt-2 rounded-md md:w-24 w-14 bg-slate-600 md:h-7"></div>
                    </div>
                ))}
        </div>
    );
};

export default ShimmerBanner;
