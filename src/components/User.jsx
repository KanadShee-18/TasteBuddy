import { useState } from "react";
import { featuresList } from "../utills/fetaturesList";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false); // State to toggle feature visibility

  const toggleFeatures = () => {
    setIsFeaturesVisible(!isFeaturesVisible); // Toggle visibility on click
  };

  return (
    <div className="pb-10 mt-2 userCard">
      <h2 className="font-semibold text-teal-700 font-txtFont text-md">
        Name: {name}
      </h2>
      <h3 className="text-sm font-medium font-txtFont text-lime-950">
        Location: {location}
      </h3>
      <h4 className="text-sm font-txtFont text-cyan-800">
        Contact Info: {contact}
      </h4>

      <div className="flex items-center justify-between pl-4 mt-3">
        <h4 className="font-semibold font-txtFont text-cyan-600">
          Key Features for explore:
        </h4>
        <span
          className="p-2 text-sm text-white transition-colors duration-200 ease-in-out rounded-full cursor-pointer mr-7 bg-cyan-700 bg-opacity-20 hover:bg-opacity-40"
          onClick={toggleFeatures}
        >
          {isFeaturesVisible ? <FaCaretUp /> : <FaCaretDown />}
        </span>
      </div>

      {/* Conditionally rendering the feature list based on state */}
      {isFeaturesVisible && (
        <ul className="px-8 mt-2 text-sm text-gray-600 list-disc text-start font-txtFont">
          {featuresList.map((feature, index) => (
            <li
              key={index}
              className="p-2 mb-1 font-medium duration-200 ease-in-out rounded-md cursor-pointer text-slate-600 hover:bg-teal-400 hover:bg-opacity-20 hover:translate-x-2"
            >
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default User;
