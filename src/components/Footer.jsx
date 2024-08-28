// import React from "react";
// import LOGO from "../Images/JUST_LOGO.png";
// import { FaGooglePlay } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <div className="bg-gradient-to-b from-slate-900 to-neutral-900 font-txtFont">
//             <div className="flex flex-wrap items-center justify-center pt-10 pb-5 gap-x-3 text-slate-400">
//                 <p className="pl-4 text-lg font-semibold lg:text-2xl">
//                     For better experience, download the Tastebuddy app now
//                 </p>
//                 <div className="flex gap-2">
//                     <button className="flex w-[150px] justify-between items-center p-3 rounded-xl bg-slate-300 bg-opacity-35 hover:bg-opacity-55">
//                         <FaGooglePlay className="size-10 text-slate-300" />
//                         <p className="w-[80%] text-[11px] text-slate-300">
//                             GET IT ON <br />
//                             <span className="text-sm text-slate-100">
//                                 Google Play
//                             </span>
//                         </p>
//                     </button>
//                     <button className="flex justify-between items-center p-3 w-[170px] rounded-xl bg-slate-300 bg-opacity-35 hover:bg-opacity-55">
//                         <FaApple className="size-10 text-slate-300" />
//                         <p className="w-[80%] text-[11px] text-slate-300">
//                             GET IT ON <br />
//                             <span className="text-sm text-slate-100">
//                                 App Store
//                             </span>
//                         </p>
//                     </button>
//                 </div>
//             </div>
//             <div className="flex justify-around w-screen h-auto p-5 mt-5 text-sm text-white">
//                 <div className="items-start">
//                     <span className="object-cover w-16">
//                         <img src={LOGO} alt="" className="object-cover h-16" />
//                     </span>
//                     <h1 className="pl-4 font-txtFont text-slate-300">
//                         &copy; 2024 Bundl <br />
//                         Technologies Pvt. Ltd
//                     </h1>
//                 </div>
//                 <div className="ml-3">
//                     <h1 className="text-[18px] mb-3">Company</h1>
//                     <ul className="text-slate-400 ">
//                         <li className="mb-4">About</li>
//                         <li className="mb-4">Careers</li>
//                         <li className="mb-4">Team</li>
//                         <li className="mb-4">Tastebuddy One</li>
//                         <li className="mb-4">Tastebuddy Instamart</li>
//                         <li className="mb-4">Tastebuddy Genie</li>
//                     </ul>
//                 </div>
//                 <div className="ml-3">
//                     <h1 className="text-[18px] mb-3">Contact Us</h1>
//                     <ul className="text-slate-400 mb-7">
//                         <li className="mb-4">Help & Support</li>
//                         <li className="mb-4">Partner with us</li>
//                         <li className="mb-4">Rate with us</li>
//                     </ul>
//                     <h1 className="text-[18px] mb-3">Legal</h1>
//                     <ul className="text-slate-400 ">
//                         <li className="mb-4">Terms & Conditions</li>
//                         <li className="mb-4">Cookie Policy</li>
//                         <li className="mb-4">Privacy Policy</li>
//                     </ul>
//                 </div>
//                 <div className="ml-3">
//                     <h1 className="text-[18px] mb-3">We deliver to:</h1>
//                     <ul className="text-slate-400 ">
//                         <li className="mb-4">Bangalore</li>
//                         <li className="mb-4">Gurgaon</li>
//                         <li className="mb-4">Hyderabad</li>
//                         <li className="mb-4">Delhi</li>
//                         <li className="mb-4">Mumbai</li>
//                         <li className="mb-4">Pune</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Footer;

import React, { useEffect, useState } from "react";
import LOGO from "../Images/JUST_LOGO.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import useFetchRestaurants from "../utills/useFetchRestaurants"; // Adjust the path as necessary
import { useSelector } from "react-redux";

const Footer = () => {
    const location = useSelector((store) => store.location?.locationDetails);

    const [lat, setLat] = useState(location?.lat);
    const [lng, setLng] = useState(location?.lng);

    useEffect(() => {
        if (location) {
            setLat(location.lat);
            setLng(location.lng);
        }
    }, [location]);
    const { cities } = useFetchRestaurants(lat, lng); // Assume you provide lat and lng as needed

    const [showAllCities, setShowAllCities] = useState(false);

    const handleToggleCities = () => {
        setShowAllCities((prev) => !prev);
    };

    const initialCities = cities.slice(0, 5);
    const additionalCities = cities.slice(5);

    return (
        <div className="bg-gradient-to-b from-slate-950 to-slate-800 font-txtFont">
            <div className="flex flex-wrap items-center justify-center pt-10 pb-5 gap-x-3 text-slate-400">
                <p className="pl-4 mb-4 text-sm font-semibold md:mb-0 md:text-lg lg:text-2xl">
                    For better experience, download the Tastebuddy app now
                </p>
                <div className="flex gap-2">
                    <button className="flex w-[150px] justify-between items-center p-3 rounded-xl bg-slate-300 bg-opacity-35 hover:bg-opacity-55">
                        <FaGooglePlay className="size-10 text-slate-300" />
                        <p className="w-[80%] text-[11px] text-slate-300">
                            GET IT ON <br />
                            <span className="text-sm text-slate-100">
                                Google Play
                            </span>
                        </p>
                    </button>
                    <button className="flex justify-between items-center p-3 w-[170px] rounded-xl bg-slate-300 bg-opacity-35 hover:bg-opacity-55">
                        <FaApple className="size-10 text-slate-300" />
                        <p className="w-[80%] text-[11px] text-slate-300">
                            GET IT ON <br />
                            <span className="text-sm text-slate-100">
                                App Store
                            </span>
                        </p>
                    </button>
                </div>
            </div>
            <div className="flex justify-around w-screen h-auto p-5 mt-5 text-sm text-white">
                <div className="items-start">
                    <span className="object-cover w-16">
                        <img
                            src={LOGO}
                            alt=""
                            className="object-cover h-12 md:h-16"
                        />
                    </span>
                    <h1 className="md:pl-4 pl-2 md:text-base text-[12px] font-txtFont text-slate-300">
                        &copy; 2024 Bundl <br />
                        Technologies Pvt. Ltd
                    </h1>
                </div>
                <div className="ml-3">
                    <h1 className="md:text-[18px] text-sm mb-3">Company</h1>
                    <ul className="text-slate-400 md:text-sm text-[11px]">
                        <li className="mb-2 md:mb-4">About</li>
                        <li className="mb-2 md:mb-4">Careers</li>
                        <li className="mb-2 md:mb-4">Team</li>
                        <li className="mb-2 md:mb-4">Tastebuddy One</li>
                        <li className="mb-2 md:mb-4">Tastebuddy Instamart</li>
                        <li className="mb-2 md:mb-4">Tastebuddy Genie</li>
                    </ul>
                </div>
                <div className="ml-3">
                    <h1 className="md:text-[18px] text-sm mb-3">Contact Us</h1>
                    <ul className="text-slate-400 mb-7 md:text-sm text-[11px]">
                        <li className="mb-2 md:mb-4">Help & Support</li>
                        <li className="mb-2 md:mb-4">Partner with us</li>
                        <li className="mb-2 md:mb-4">Rate with us</li>
                    </ul>
                    <h1 className="md:text-[18px] text-sm mb-3">Legal</h1>
                    <ul className="text-slate-400 md:text-sm text-[11px]">
                        <li className="mb-2 md:mb-4">Terms & Conditions</li>
                        <li className="mb-2 md:mb-4">Cookie Policy</li>
                        <li className="mb-2 md:mb-4">Privacy Policy</li>
                    </ul>
                </div>
                <div className="ml-3">
                    <h1 className="md:text-[18px] text-sm mb-3">
                        We deliver to:
                    </h1>
                    <ul className="text-slate-400 md:text-sm text-[11px]">
                        {initialCities.map((city, index) => (
                            <li key={index} className="mb-2 md:mb-4">
                                {city}
                            </li>
                        ))}
                    </ul>
                    <button
                        onClick={handleToggleCities}
                        className="px-2 py-1 mt-2 text-blue-400 duration-200 ease-in-out transform bg-opacity-75 rounded-md md:px-4 md:py-3 bg-slate-700 hover:bg-opacity-45 active:bg-opacity-25 hover:scale-110"
                    >
                        {showAllCities ? "Show Less" : "Show More"}
                    </button>
                </div>
            </div>

            {showAllCities && (
                <div className="p-5 min-w-screen bg-gradient-to-b from-slate-950 to-slate-800 text-slate-400">
                    <div className="flex justify-center mb-4">
                        <h1 className="text-[18px] text-slate-300">
                            All Cities:
                        </h1>
                    </div>
                    <ul className="flex flex-wrap justify-evenly gap-y-4">
                        {additionalCities.map((city, index) => (
                            <li
                                key={index}
                                className="flex text-[12px] md:text-base justify-center py-2 mb-1 duration-300 ease-in-out rounded-md cursor-pointer text-slate-400 hover:text-slate-200 hover:bg-slate-600 hover:bg-opacity-65"
                            >
                                {city}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Footer;
