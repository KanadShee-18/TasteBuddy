import React from "react";
import LOGO from "../Images/JUST_LOGO.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gradient-to-b from-slate-900 to-neutral-900 font-txtFont">
            <div className="flex flex-wrap items-center justify-center pt-10 pb-5 gap-x-3 text-slate-400">
                <p className="pl-4 text-lg font-semibold lg:text-2xl">
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
                        <img src={LOGO} alt="" className="object-cover h-16" />
                    </span>
                    <h1 className="pl-4 font-txtFont text-slate-300">
                        &copy; 2024 Bundl <br />
                        Technologies Pvt. Ltd
                    </h1>
                </div>
                <div className="ml-3">
                    <h1 className="text-[18px] mb-3">Company</h1>
                    <ul className="text-slate-400 ">
                        <li className="mb-4">About</li>
                        <li className="mb-4">Careers</li>
                        <li className="mb-4">Team</li>
                        <li className="mb-4">Tastebuddy One</li>
                        <li className="mb-4">Tastebuddy Instamart</li>
                        <li className="mb-4">Tastebuddy Genie</li>
                    </ul>
                </div>
                <div className="ml-3">
                    <h1 className="text-[18px] mb-3">Contact Us</h1>
                    <ul className="text-slate-400 mb-7">
                        <li className="mb-4">Help & Support</li>
                        <li className="mb-4">Partner with us</li>
                        <li className="mb-4">Rate with us</li>
                    </ul>
                    <h1 className="text-[18px] mb-3">Legal</h1>
                    <ul className="text-slate-400 ">
                        <li className="mb-4">Terms & Conditions</li>
                        <li className="mb-4">Cookie Policy</li>
                        <li className="mb-4">Privacy Policy</li>
                    </ul>
                </div>
                <div className="ml-3">
                    <h1 className="text-[18px] mb-3">We deliver to:</h1>
                    <ul className="text-slate-400 ">
                        <li className="mb-4">Bangalore</li>
                        <li className="mb-4">Gurgaon</li>
                        <li className="mb-4">Hyderabad</li>
                        <li className="mb-4">Delhi</li>
                        <li className="mb-4">Mumbai</li>
                        <li className="mb-4">Pune</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
