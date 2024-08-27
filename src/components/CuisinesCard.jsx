import React from "react";

const CuisinesCard = (props) => {
    // console.log("this is cuisine card");
    const { text } = props;
    // console.log("text", text);

    return (
        <div>
            <div className="w-[270px] lg:w-[320px] mb-3 font-txtFont text-[16px] flex justify-center rounded-xl items-center font-medium text-slate-700 flex-wrap text-center px-3 py-5 bg-gradient-to-bl from-slate-100 to-neutral-100 ease-in-out hover:cursor-pointer hover:scale-95 duration-150 hover:bg-gradient-to-bl hover:from-neutral-200 hover:to-slate-200">
                {text}
            </div>
        </div>
    );
};

export default CuisinesCard;
