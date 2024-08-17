import React from "react";
import LOGO from "../Images/JUST_LOGO.png";

const Footer = () => {
  return (
    <div className="w-screen bg-gradient-to-b text-white from-slate-900 to-neutral-900 h-auto mt-5 text-sm flex p-5 font-txtFont justify-around">
      <div className="items-start">
        <span className="w-16 object-cover">
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
  );
};

export default Footer;
