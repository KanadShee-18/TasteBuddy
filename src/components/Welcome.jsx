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
      <div className="h-screen w-3/4 md:w-1/2 px-4 md:px-10">
        <div className="flex justify-between mt-16">
          <div className="flex items-center mr-3 font-txtFont text-sm">
            <button
              onClick={() => setSignUpModel(true)}
              className="hover:bg-slate-700 px-3 md:px-5 py-3 bg-slate-900 text-white"
            >
              Sign Up
            </button>
            <button
              onClick={() => setLoginModel(true)}
              className="hover:text-orange-600 px-2 md:px-6 py-3 ml-3 text-black font-semibold"
            >
              Login
            </button>
          </div>
          <img src={LOGO_IMG} alt="" className="w-44" />
        </div>
        <div className="mt-24 font-txtFont">
          <h1 className="text-start text-5xl ml-2 font-bold">Hungry?</h1>
          <p className="text-start text-[18px] ml-2 mt-2 font-semibold text-slate-500 font-txtFont">
            Order food from favourite restaurants near you.
          </p>
          <div className="mt-8 w-full md:w-3/4 font-txtFont flex justify-between h-16 items-center border-slate-600 border-2 ml-2">
            <input
              type="text"
              placeholder="Enter your location"
              className="outline-none border-none bg-none text-start pl-3 h-full w-[75%]"
            />
            <button className="bg-orange-500 h-full px-4 text-white font-bold hover:bg-orange-600">
              FIND FOOD
            </button>
          </div>

          <div className="mt-40 mx-2">
            <h1 className="font-semibold font-txtFont text-zinc-500">
              POPULAR CITIES IN INDIA
            </h1>
            <ul className="flex gap-x-3 flex-wrap mt-6 font-semibold">
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
      <div className="relative h-screen overflow-hidden w-1/4 md:w-1/2">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        {/* Image */}
        <img src={FOOD_IMG} alt="Food" className="h-full w-full object-cover" />
      </div>
      {loginModel && <Login setLoginModel={setLoginModel} />}
      {signUpModel && <SignUp setSignUpModel={setSignUpModel} />}
    </div>
  );
};

export default Welcome;
