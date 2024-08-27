import React from "react";

const ShimmerResMenu = () => {
    return (
        <div className="w-4/5 min-h-screen m-auto md:w-3/4 lg:w-1/2">
            <div className="shimmer-heading flex justify-start w-[500px] h-[45px] bg-gradient-to-r from-slate-600 via-slate-300 to-slate-100 rounded-md my-4"></div>
            <div className="flex items-center justify-center w-full h-auto mt-5 animate-pulse bg-slate-200 rounded-2xl">
                <div className="animate-pulse bg-slate-400 rounded-xl w-[95%] h-[130px] m-auto my-4">
                    <div className="w-full h-3/4">
                        <div className=" m-2 bg-slate-100 w-[40%] h-5 rounded-md"></div>
                        <div className="m-2 bg-slate-200 w-[30%] h-4 rounded-md"></div>
                        <div className="m-2 bg-slate-100 w-[20%] h-2 rounded-md"></div>
                    </div>{" "}
                    <hr />
                    <div className="animate-pulse p-2 bg-slate-500 w-[30%] h-10px rounded-md ml-2 mt-1"></div>
                </div>
            </div>
            <div className="mt-10">
                <div className="shimmer-heading flex flex-wrap justify-evenly w-[500px] h-[45px] bg-gradient-to-r from-slate-600 via-slate-300 to-slate-100 rounded-md my-4"></div>
                {Array(4)
                    .fill("")
                    .map((_, index) => (
                        <div className="w-[240px] mx-3 mb-5 h-[60px] rounded-lg bg-slate-200 animate-pulse"></div>
                    ))}
            </div>
            <div className="shimmer-heading flex justify-start w-[500px] h-[45px] bg-slate-600 rounded-md my-4"></div>
            <div className="flex flex-col w-full gap-2 px-2">
                {Array(8)
                    .fill("")
                    .map((_, index) => (
                        <div className="w-full mx-3 mb-5 h-[40px] rounded-lg bg-gradient-to-r from-slate-200 via-slate-300 to-slate-500 animate-pulse"></div>
                    ))}
            </div>
        </div>
    );
};

export default ShimmerResMenu;
