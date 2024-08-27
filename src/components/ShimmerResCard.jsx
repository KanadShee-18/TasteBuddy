import React from "react";

const ShimmerResCard = ({ num }) => {
    return (
        <div className="flex flex-wrap items-center justify-center">
            {Array(num)
                .fill("")
                .map((_, index) => (
                    <div className="w-[300px] mx-3 mb-5 h-[180px] rounded-lg bg-slate-200 animate-pulse">
                        <div className="p-2 mt-3 w-[60%] h-[60%] animate-pulse bg-slate-600"></div>
                        <div className="pl-2 mt-2 w-[80%] h-[20px] bg-slate-400"></div>
                        <div className="pl-2 mt-2 w-[60%] h-[10px] bg-slate-500"></div>
                    </div>
                ))}
        </div>
    );
};

export default ShimmerResCard;
