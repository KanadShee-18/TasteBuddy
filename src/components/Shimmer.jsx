const Shimmer = () => {
    return (
        <div className="shimmer-body mx-[calc(10%+36px)] min-h-screen">
            <div className="shimmer-heading flex justify-start w-[500px] h-[35px] bg-slate-600 rounded-md mb-4"></div>
            <div className="flex flex-wrap gap-5 mb-8 justify-evenly shimmerFoodimgContainer">
                {Array(6)
                    .fill("")
                    .map((_, index) => (
                        <div className="flex flex-col items-center justify-center">
                            <div className="w-[100px] rounded-full mx-3 mb-5 h-[100px] bg-slate-200 animate-pulse flex items-center justify-center">
                                <div className="p-5 rounded-full md:w-20 w-14 h-14 md:h-20 bg-slate-400"></div>
                            </div>
                            <div className="w-24 mt-2 rounded-md bg-slate-600 h-7"></div>
                        </div>
                    ))}
            </div>
            <div className="shimmer-heading flex justify-start w-[500px] h-[45px] bg-slate-600 rounded-md mb-4"></div>
            <div className="flex flex-wrap shimmerContainer justify-evenly">
                {Array(8)
                    .fill("")
                    .map((_, index) => (
                        <div className="md:w-[270px] w-[170px] mx-3 mb-5 md:h-[180px] h-[95px] rounded-lg bg-slate-200 animate-pulse">
                            <div className="p-2 ml-2 mt-3 w-[60%] h-[60%] animate-pulse bg-slate-600"></div>
                            <div className="pl-2 ml-2 mt-2 w-[80%] h-[20px] bg-slate-400"></div>
                            <div className="pl-2 mt-2 ml-2 w-[60%] h-[10px] bg-slate-500"></div>
                        </div>
                    ))}
            </div>
            <div className="shimmer-heading flex justify-start w-[500px] h-[45px] bg-slate-600 rounded-md my-4"></div>
            <div className="flex flex-wrap shimmerContainer justify-evenly">
                {Array(8)
                    .fill("")
                    .map((_, index) => (
                        <div className="md:w-[270px] w-[170px] mx-3 mb-5 md:h-[180px] h-[95px] rounded-lg bg-slate-200 animate-pulse">
                            <div className="p-2 ml-2 mt-3 w-[60%] h-[60%] animate-pulse bg-slate-600"></div>
                            <div className="pl-2 ml-2 mt-2 w-[80%] h-[20px] bg-slate-400"></div>
                            <div className="pl-2 mt-2 ml-2 w-[60%] h-[10px] bg-slate-500"></div>
                        </div>
                    ))}
            </div>
            <div className="flex flex-wrap items-center justify-center">
                {Array(8)
                    .fill("")
                    .map((_, index) => (
                        <div className="md:w-[300px] w-[170px] mx-3 mb-5 md:h-[180px] h-14 rounded-lg bg-slate-200 animate-pulse">
                            <div className="p-2 mt-3 w-[60%] h-[60%] animate-pulse bg-slate-600"></div>
                            <div className="pl-2 mt-2 w-[80%] h-[20px] bg-slate-400"></div>
                            <div className="pl-2 mt-2 w-[60%] h-[10px] bg-slate-500"></div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Shimmer;
