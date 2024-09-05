import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import locationReducer from "./locationSlice";
import userReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    location: locationReducer,
    user: userReducer,
  },
});

export default appStore;
