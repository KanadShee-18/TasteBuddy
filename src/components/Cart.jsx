import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_URL } from "../utills/constants";
import rollImg from "../Images/cart_dish.png";
import { addItem, clearCart, removeItem } from "../utills/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    const handleRemoveItem = (item) => {
        dispatch(removeItem(item));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const totalBill = useMemo(() => {
        return cartItems.reduce((total, item) => {
            const price =
                item?.card?.info?.price || item.card.info.defaultPrice;
            return total + (price / 100) * item.quantity;
        }, 0);
    }, [cartItems]);

    return (
        <div className="flex flex-col md:flex-row bg-neutral-200 p-4 min-h-screen px-[calc(10%)] font-txtFont">
            {/* Left Side: Account, Delivery Address, Payment */}
            <div className="flex flex-col w-full p-4 bg-transparent rounded-sm shadow-md md:w-2/3">
                {/* Account Section */}
                <div className="relative flex items-start justify-between px-8 py-10 mb-8 bg-white">
                    <span className="flex justify-center absolute top-1/4 -left-7 bg-[#282c3f]">
                        <i className="p-2 text-xl fa-solid fa-user text-slate-200"></i>
                    </span>
                    <div className="w-8/12">
                        <h2 className="font-semibold text-md">Account</h2>
                        <p className="text-gray-600 md:text-sm text-[12px]">
                            To place your order now, log in to your existing
                            account or sign up.
                        </p>
                        <div className="flex mt-4">
                            <button className="bg-white text-green-500 border-2 border-green-500 px-4 py-1 mr-7 rounded-sm w-[180px]">
                                <h1 className="text-[12px]">
                                    Have an account?
                                </h1>
                                <p className="text-sm font-semibold md:text-base">
                                    LOG IN
                                </p>
                            </button>
                            <button className="bg-green-700 text-white px-4 py-1 rounded-sm w-[180px]">
                                <h1 className="text-[12px]">New to Swiggy?</h1>
                                <p className="text-sm font-semibold md:text-base">
                                    SIGN UP
                                </p>
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={rollImg} alt="Dish" />
                    </div>
                </div>

                {/* Delivery Address Section */}
                <div className="relative flex items-start px-6 mb-8 bg-white py-9 text-slate-700">
                    <span className="flex justify-center absolute top-1/4 -left-7 bg-white border-black rounded-sm shadow-[0px_2px_8px_0px_#718096]">
                        <i className="p-3 text-xl fa-solid fa-location-dot text-neutral-800"></i>
                    </span>
                    <div className="w-11/12">
                        <h2 className="font-semibold text-md">
                            Delivery address
                        </h2>
                    </div>
                </div>

                {/* Payment Section */}
                <div className="relative flex items-start px-6 bg-white py-9 text-slate-700">
                    <span className="flex justify-center absolute top-1/4 -left-7 bg-white border-black rounded-sm shadow-[0px_2px_8px_0px_#718096]">
                        <i className="p-3 text-xl fa-solid fa-wallet text-neutral-800"></i>
                    </span>
                    <div className="w-11/12">
                        <h2 className="font-semibold text-md">Payment</h2>
                    </div>
                </div>
            </div>

            {/* Right Side: Order Summary */}
            <div className="w-full h-auto p-4 mt-4 ml-4 bg-white rounded-sm shadow-md md:w-1/3">
                {cartItems.length > 0 ? (
                    <>
                        {/* Restaurant Info */}
                        <div className="flex items-center justify-between pb-4 mb-4 border-b">
                            <div>
                                <h2 className="font-semibold text-md">
                                    Burger King
                                </h2>
                                <p className="text-sm text-gray-600">Kasba</p>
                            </div>
                            <img
                                src={IMAGE_URL + cartItems[0].card.info.imageId}
                                alt="Restaurant Logo"
                                className="object-cover w-16 h-16"
                            />
                        </div>

                        {cartItems.map((item, index) => {
                            const price =
                                item?.card?.info?.price ||
                                item.card.info.defaultPrice;
                            const itemTotal = (price / 100) * item.quantity;

                            return (
                                <div
                                    key={index}
                                    className="flex items-center justify-between mb-8"
                                >
                                    <div>
                                        <p className="text-sm text-gray-800">
                                            {item.card.info.name}
                                        </p>
                                        <div className="flex items-center justify-center w-[100px] px-2 py-[6px] mt-2 bg-blue-400 bg-opacity-20 rounded-md font-semibold">
                                            <button
                                                className="px-2 text-lg text-green-600 duration-200 bg-opacity-25 rounded-full bg-cyan-700 hover:bg-opacity-60 hover:scale-105 hover:text-white"
                                                onClick={() =>
                                                    handleRemoveItem(item)
                                                }
                                            >
                                                -
                                            </button>
                                            <span className="px-4 text-lg font-semibold text-slate-700">
                                                {item.quantity}
                                            </span>
                                            <button
                                                className="px-2 text-lg text-green-600 duration-200 bg-opacity-25 rounded-full bg-cyan-700 hover:bg-opacity-60 hover:scale-105 hover:text-white"
                                                onClick={() =>
                                                    handleAddItem(item)
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <span>
                                            <img
                                                src={
                                                    IMAGE_URL +
                                                    item.card.info.imageId
                                                }
                                                alt="Restaurant Logo"
                                                className="object-cover w-12 h-12 duration-200 rounded-tl-3xl rounded-br-3xl hover:scale-95"
                                            />
                                        </span>
                                        <p className="text-sm font-medium text-gray-800">
                                            ₹{itemTotal.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <p className="mb-4 font-medium text-center text-slate-600">
                        😥Your cart is empty. Add items!
                    </p>
                )}

                {/* Suggestions */}
                <div className="flex items-center justify-between mb-4">
                    <div className="w-[60%] drop-shadow-sm border-1 border-black rounded-md shadow-[0px_2px_8px_0px_#718096] flex items-center justify-center">
                        <input
                            type="text"
                            placeholder="Any suggestions? We will pass it on..."
                            className="w-full p-2 text-sm text-center border border-none rounded-sm outline-none"
                        />
                    </div>
                    <div className="flex justify-end w-[30%]">
                        <button
                            className="w-[100px] font-medium bg-orange-600 text-white py-2 rounded-sm hover:scale-95 duration-200 hover:bg-neutral-950 active:bg-orange-600"
                            onClick={handleClearCart}
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* No-contact Delivery Option */}
                <div className="flex items-start mb-4">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <p className="text-sm text-gray-600">
                        Opt in for No-contact Delivery
                    </p>
                </div>

                {/* Bill Details */}
                <div className="pt-4 mt-4 border-t">
                    <h3 className="font-semibold text-md">Bill Details</h3>
                    <div className="flex justify-between mt-2">
                        <p className="text-sm font-medium text-gray-600">
                            Item Total
                        </p>
                        <p className="text-sm">₹{totalBill.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-sm text-gray-600">
                            Delivery Fee 1.2 kms
                        </p>
                        <p className="text-sm">₹20</p>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-sm text-gray-600">Platform fee</p>
                        <p className="text-sm">₹6</p>
                    </div>
                    <div className="flex justify-between mt-2">
                        <p className="text-sm text-gray-600">
                            GST and Restaurant Charges
                        </p>
                        <p className="text-sm">₹18</p>
                    </div>
                </div>
                <div className="m-auto my-5 w-full bg-slate-500 h-[2px]"></div>

                {/* Total Amount */}
                <div className="flex justify-between">
                    <h3 className="text-lg font-semibold">To Pay</h3>
                    <p className="text-lg font-semibold">
                        ₹{(totalBill + 44).toFixed(2)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cart;
