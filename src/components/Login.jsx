import { RxCross2 } from "react-icons/rx";
import CART_DISH from "../Images/cart_dish.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";

const Login = (props) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(false);
  const { setLoginModel } = props;
  const navigate = useNavigate();

  const toggleEye = () => {
    setOpen(!open);
  };

  const handleButtonClick = () => {
    if (email && password) {
      // If both email and password are filled, navigate to the home page
      navigate("/home");
    } else {
      // Display an error message if email or password is empty
      setAlert(true);
    }
  };

  return (
    <div
      className="relative z-50"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 transition-opacity bg-gray-800 bg-opacity-75"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex items-end justify-end min-h-full p-4 text-center sm:items-center sm:p-0">
          <div className="relative h-screen p-10 overflow-hidden text-left transition-all transform shadow-xl bg-gradient-to-b from-white to-blue-200 sm:w-4/12 sm:max-w-lg">
            <button
              onClick={() => setLoginModel(false)}
              className="p-2 text-2xl font-semibold bg-slate-300 rounded-3xl text-slate-700 hover:bg-slate-500 hover:text-white hover:font-bold"
            >
              <RxCross2 />
            </button>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="mt-3 text-3xl font-semibold font-txtFont">
                  Login
                </h1>
                <h1 className="mt-2">
                  or{" "}
                  <span className="text-sm text-orange-500 font-txtFont">
                    create an account
                  </span>
                </h1>
              </div>
              <img src={CART_DISH} alt="img" className="w-24 h-24 mr-4" />
            </div>
            <hr className="w-12 bg-black h-[2px] mt-3 border-0" />

            <div className="w-full rounded font-txtFont h-16 mt-10 border-[1px] flex border-orange-500 justify-start pl-4 items-center">
              <input
                className="text-orange-500 bg-transparent border-none outline-none placeholder:text-orange-300"
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full pl-2 rounded font-txtFont h-16 mt-10 border-[1px] flex justify-between items-center border-orange-500">
              <input
                className="w-4/5 px-2 text-orange-500 bg-transparent border-none outline-none placeholder:text-orange-300"
                type={open ? "text" : "password"}
                placeholder="Enter a Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="mr-3 text-lg text-orange-600"
                onClick={toggleEye}
              >
                {open ? <IoEye /> : <IoEyeOffSharp />}
              </button>
            </div>

            <button
              className="w-full h-16 px-4 font-semibold text-white bg-orange-500 mt-7 hover:bg-orange-600"
              onClick={handleButtonClick}
            >
              LOG IN
            </button>
            {alert && (
              <p className="w-full mt-2 text-sm text-center text-orange-500 font-txtFont">
                Please fill both email and password.
              </p>
            )}

            <h1 className="mt-4 text-sm font-medium text-slate-700 font-txtFont">
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
