import { RxCross2 } from "react-icons/rx";
import CART_DISH from "../Images/cart_dish.png";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [phone, setPhone] = useState("");
  const { setLoginModel } = props;
  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-end p-4 text-center sm:items-center sm:p-0">
          <div className="p-10 relative transform overflow-hidden bg-white text-left h-screen shadow-xl transition-all sm:w-4/12 sm:max-w-lg">
            <button
              onClick={() => setLoginModel(false)}
              className="bg-slate-300 p-2 rounded-3xl text-2xl text-slate-700 font-semibold hover:bg-slate-500 hover:text-white hover:font-bold"
            >
              <RxCross2 />
            </button>
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-txtFont mt-3 font-semibold">
                  Login
                </h1>
                <h1 className="mt-2">
                  or{" "}
                  <span className="text-orange-500 font-txtFont text-sm">
                    create an account
                  </span>
                </h1>
              </div>
              <img src={CART_DISH} alt="img" className="w-24 h-24 mr-4" />
            </div>
            <hr className="w-12 bg-black h-[2px] mt-3 border-0" />

            <PhoneInput
              placeholder="Phone Number"
              value={phone}
              onChange={() => setPhone(phone)}
              containerStyle={{ marginTop: "20px" }}
              inputStyle={{
                width: "100%",
                height: "63px",
                backgroundColor: "none",
                paddingLeft: "3rem",
                fontSize: "1rem",
              }}
            />

            <input
              className="p-5 border font-txtFont text-center border-gray-300 mt-4 mb-7 w-full"
              type="text"
              placeholder="One Time Password"
            />

            <Link to="/home">
              <button className="bg-orange-500 w-full mt-7 h-16 px-4 text-white font-bold hover:bg-orange-600">
                LOG IN
              </button>
            </Link>
            <h1 className="mt-4 font-medium text-sm text-slate-700 font-txtFont">
              By clicking on Login, I accept the Terms and Condition & <br />
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
