import React, { useState } from "react";
import FOOD_IMG from "../Images/Food.jpg";
import LOGO_IMG from "./logo2.png";
import Login from "./Login";
import SignUp from "./SignUp";

const Welcome = () => {
    const [loginModel, setLoginModel] = useState(false);
    const [signUpModel, setSignUpModel] = useState(false);
    return (
        <div className="flex">
            <div className="w-3/4 h-screen px-4 md:w-1/2 md:px-10">
                <div className="flex justify-between mt-16">
                    <img src={LOGO_IMG} alt="" className="w-44" />
                    <div className="flex items-center mr-3 text-sm font-txtFont">
                        <button
                            onClick={() => setSignUpModel(true)}
                            className="px-3 py-3 text-white hover:bg-slate-700 md:px-5 bg-slate-900"
                        >
                            Sign Up
                        </button>
                        <button
                            onClick={() => setLoginModel(true)}
                            className="px-2 py-3 ml-3 font-semibold text-black hover:text-orange-600 md:px-6"
                        >
                            Login
                        </button>
                    </div>
                </div>
                <div className="mt-24 font-txtFont">
                    <h1 className="ml-2 text-5xl font-bold text-start">
                        Hungry?
                    </h1>
                    <p className="text-start text-[18px] ml-2 mt-2 font-semibold text-slate-500 font-txtFont">
                        Order food from favourite restaurants near you.
                    </p>
                    <div className="flex items-center justify-between w-full h-16 mt-8 ml-2 border-2 md:w-3/4 font-txtFont border-slate-600">
                        <input
                            type="text"
                            placeholder="Enter your location"
                            className="outline-none border-none bg-none text-start pl-3 h-full w-[75%]"
                        />
                        <button className="h-full px-4 font-bold text-white bg-orange-500 hover:bg-orange-600">
                            FIND FOOD
                        </button>
                    </div>

                    <div className="mx-2 mt-40">
                        <h1 className="font-semibold font-txtFont text-zinc-500">
                            POPULAR CITIES IN INDIA
                        </h1>
                        <ul className="flex flex-wrap mt-6 font-semibold gap-x-3">
                            <li className="text-neutral-800">Ahmedabad</li>
                            <li className="text-slate-700">Bangalore</li>
                            <li className="text-neutral-800">Chennai</li>
                            <li className="text-slate-700">Delhi</li>
                            <li className="text-neutral-800">Gurgaon</li>
                            <li className="text-slate-700">Hyderabad</li>
                            <li className="text-neutral-800">Kolkata</li>
                            <li className="text-slate-700">Mumbai</li>
                            <li className="text-neutral-800">Pune</li>
                            <li className="text-slate-700">& more.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="relative w-1/4 h-screen overflow-hidden md:w-1/2">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-black to-transparent"></div>
                {/* Image */}
                <img
                    src={FOOD_IMG}
                    alt="Food"
                    className="object-cover w-full h-full"
                />
            </div>
            {loginModel && <Login setLoginModel={setLoginModel} />}
            {signUpModel && <SignUp setSignUpModel={setSignUpModel} />}
        </div>
    );
};

export default Welcome;
