import React from "react";

const Cart = () => {
  return (
    <div className="flex flex-col md:flex-row bg-neutral-200 p-4 min-h-screen px-[calc(10%)] font-txtFont">
      {/* Left Side: Account, Delivery Address, Payment */}
      <div className="flex flex-col w- md:w-2/3 bg-transparent p-4 shadow-md rounded-sm">
        {/* Account Section */}
        <div className="flex items-start mb-8 bg-white px-8 py-10 relative">
          <span className="flex justify-center absolute top-1/4 -left-7 bg-[#282c3f]">
            <i className="fa-solid fa-user text-xl text-slate-200 p-2"></i>
          </span>
          <div className="w-11/12">
            <h2 className="text-md font-semibold">Account</h2>
            <p className="text-gray-600 text-sm">
              To place your order now, log in to your existing account or sign
              up.
            </p>
            <div className="flex mt-4">
              <button className="bg-white text-green-500 border-2 border-green-500 px-4 py-1 mr-7 rounded-sm w-[180px]">
                <h1 className="text-[12px]">Have an account?</h1>
                <p className="font-semibold">LOG IN</p>
              </button>
              <button className="bg-green-700 text-white px-4 py-1 rounded-sm w-[180px]">
                <h1 className="text-[12px]">New to Swiggy?</h1>
                <p className="font-semibold">SIGN UP</p>
              </button>
            </div>
          </div>
        </div>

        {/* Delivery Address Section */}
        <div className="flex items-start mb-8 bg-white px-6 py-9 text-slate-700 relative">
          <span className="flex justify-center absolute top-1/4 -left-7 bg-white border-black rounded-sm shadow-[0px_2px_8px_0px_#718096]">
            <i className="fa-solid fa-location-dot text-xl text-neutral-800 p-3"></i>
          </span>
          <div className="w-11/12">
            <h2 className="text-md font-semibold">Delivery address</h2>
          </div>
        </div>

        {/* Payment Section */}
        <div className="flex items-start bg-white px-6 py-9 text-slate-700 relative">
          {/* <div className="w-1/12 flex justify-center">
            <i className="fa-solid fa-wallet text-2xl text-gray-600"></i>
          </div> */}
          <span className="flex justify-center absolute top-1/4 -left-7 bg-white border-black rounded-sm shadow-[0px_2px_8px_0px_#718096]">
            <i className="fa-solid fa-wallet text-xl text-neutral-800 p-3"></i>
          </span>
          <div className="w-11/12">
            <h2 className="text-md font-semibold">Payment</h2>
          </div>
        </div>
      </div>

      {/* Right Side: Order Summary */}
      <div className="w-full md:w-1/3 bg-white p-4 mt-4 ml-4 shadow-md rounded-sm h-auto">
        {/* Restaurant Info */}
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <div>
            <h2 className="text-md font-semibold">Burger King</h2>
            <p className="text-gray-600 text-sm">Kasba</p>
          </div>
          <img
            src="/path/to/image.jpg"
            alt="Restaurant Logo"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        {/* Order Item */}
        <div className="flex justify-between items-center mb-4 flex-col">
          <div>
            <p className="text-gray-800 text-sm">Crispy Veg Burger+Fries(M)</p>
            <div className="flex items-center mt-2">
              <button className="text-green-500 px-2">-</button>
              <span className="px-4 text-sm">1</span>
              <button className="text-green-500 px-2">+</button>
            </div>
          </div>
          <p className="text-gray-800 text-sm">₹160</p>
          <div>
            <p className="text-gray-800 text-sm">Crispy Veg Burger+Fries(M)</p>
            <div className="flex items-center mt-2">
              <button className="text-green-500 px-2">-</button>
              <span className="px-4 text-sm">1</span>
              <button className="text-green-500 px-2">+</button>
            </div>
          </div>
          <p className="text-gray-800 text-sm">₹160</p>
          <div>
            <p className="text-gray-800 text-sm">Crispy Veg Burger+Fries(M)</p>
            <div className="flex items-center mt-2">
              <button className="text-green-500 px-2">-</button>
              <span className="px-4 text-sm">1</span>
              <button className="text-green-500 px-2">+</button>
            </div>
          </div>
          <p className="text-gray-800 text-sm">₹160</p>
          <div>
            <p className="text-gray-800 text-sm">Crispy Veg Burger+Fries(M)</p>
            <div className="flex items-center mt-2">
              <button className="text-green-500 px-2">-</button>
              <span className="px-4 text-sm">1</span>
              <button className="text-green-500 px-2">+</button>
            </div>
          </div>
          <p className="text-gray-800 text-sm">₹160</p>
        </div>

        {/* Suggestions */}
        <div className="mb-4 drop-shadow-sm border-1 border-black rounded-md shadow-[0px_2px_8px_0px_#718096]">
          <input
            type="text"
            placeholder="''Any suggestions? We will pass it on..."
            className="w-full p-2 border text-sm text-center border-none outline-none rounded-sm"
          />
        </div>

        {/* No-contact Delivery Option */}
        <div className="flex items-start mb-4">
          <input type="checkbox" className="mr-2 mt-1" />
          <p className="text-gray-600 text-sm">
            Opt in for No-contact Delivery
          </p>
        </div>

        {/* Bill Details */}
        <div className="border-t pt-4 mt-4">
          <h3 className="text-md font-semibold">Bill Details</h3>
          <div className="flex justify-between mt-2">
            <p className="text-gray-600 text-sm">Item Total</p>
            <p className="text-sm">₹349</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-600 text-sm">Delivery Fee 1.2 kms</p>
            <p className="text-sm">₹38</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-600 text-md">Platform fee</p>
            <p className="text-sm">₹6</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-gray-600 text-md">GST and Restaurant Charges</p>
            <p className="text-sm">₹57.54</p>
          </div>
        </div>

        {/* Total Amount */}
        <div className="flex justify-between mt-4 pt-4 border-t-[3px] border-neutral-800 text-md font-bold">
          <p className="text-md">TO PAY</p>
          <p className="text-md">₹451</p>
        </div>

        <div className="w-full h-3 bg-slate-200 mt-10"></div>

        {/* New Section: Review and Cancellation Policy */}
        <div className="mt-6 p-4 border-2 border-gray-200">
          <h4 className="text-sm font-semibold">
            Review your order and address details to avoid cancellations
          </h4>
          <p className="text-[12px] text-gray-600 mt-2">
            <span className="text-red-600 font-bold">Note:</span> If you cancel
            within 60 seconds of placing your order, a 100% refund will be
            issued. No refund for cancellations made after 60 seconds.
          </p>
          <p className="text-[12px] text-gray-600 mt-1">
            Avoid cancellation as it leads to food wastage.
          </p>
          <a
            href="#"
            className="text-orange-600 text-sm font-semibold mt-2 inline-block underline"
          >
            Read cancellation policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
