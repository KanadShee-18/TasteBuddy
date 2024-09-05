import React, { useState } from "react";
import FOOD_IMG from "../Images/Food.jpg";
import COOKING_GIF from "../Images/cookingGif.gif";
import LOGO_IMG from "./logo2.png";
import FOOD_NEW_IMG from "../Images/foodnew.png";
import Login from "./Login";
import SignUp from "./SignUp";
import { motion } from "framer-motion";

const Welcome = () => {
  const [loginModel, setLoginModel] = useState(false);
  const [signUpModel, setSignUpModel] = useState(false);
  return (
    <div className="flex bg-gradient-to-b from-white to-blue-100">
      <div className="w-3/4 h-screen px-4 md:w-1/2 md:px-10">
        <div className="flex justify-between mt-16">
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 2 }}
            src={LOGO_IMG}
            alt=""
            className="md:w-44 w-28"
          />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center mr-1 text-sm font-txtFont"
          >
            <button
              onClick={() => setSignUpModel(true)}
              className="px-3 py-2 text-white md:py-3 hover:bg-slate-700 md:px-5 bg-slate-900"
            >
              Sign Up
            </button>
            <button
              onClick={() => setLoginModel(true)}
              className="px-2 py-3 ml-3 font-semibold text-black hover:text-orange-600 md:px-6 hover:bg-slate-300 hover:bg-opacity-25"
            >
              Login
            </button>
          </motion.div>
        </div>
        <div className="mt-20 md:mt-24 font-txtFont">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="ml-2 text-2xl font-bold md:text-5xl text-start"
          >
            Hungry?
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-start text-[18px] ml-2 mt-2 font-semibold text-slate-500 font-txtFont"
          >
            Order food from favourite restaurants near you.
          </motion.p>

          <div className="flex justify-center my-8">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={COOKING_GIF}
              alt="Woman Cooking"
              className="h-auto rounded-lg w-44 md:w-64 lg:w-72"
            />
          </div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="flex items-center justify-center w-full mx-auto ml-2 rounded-tr-md rounded-bl-md md:h-12 h-9 rounded-tl-3xl rounded-br-3xl mt-7 bg-gradient-to-br opacity-70 from-purple-600 via-pink-600 to-blue-500"
          >
            <p className="text-base font-medium text-center md:text-xl text-slate-200">
              Lets enter in the food world
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.3 }}
            className="mx-2 mt-40"
          >
            <h1 className="font-semibold font-txtFont text-zinc-500">
              POPULAR CITIES IN INDIA
            </h1>
            <ul className="flex flex-wrap mt-6 text-sm font-semibold md:text-base gap-x-3">
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
          </motion.div>
        </div>
      </div>
      <div className="relative w-1/4 h-screen overflow-hidden md:w-1/2">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 opacity-50 bg-gradient-to-t from-black to-transparent"></div>
        {/* Image */}
        <img src={FOOD_IMG} alt="Food" className="object-cover w-full h-full" />
      </div>
      {loginModel && (
        <Login setLoginModel={setLoginModel} setSignUpModel={setSignUpModel} />
      )}
      {signUpModel && (
        <SignUp setSignUpModel={setSignUpModel} setLoginModel={setLoginModel} />
      )}
    </div>
  );
};

export default Welcome;
