import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";
import About from "./components/About";
import Cart from "./components/Cart";
import Login from "./components/Login";
import ErrorComponent from "./components/ErrorComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import appStore from "./utills/appStore";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";

// Lazy loading
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div id="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

// Layout for the Welcome page without Header and Footer
const WelcomeLayout = () => {
  return (
    <Provider store={appStore}>
      <div id="welcome-layout">
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeLayout />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorComponent />,
  },
  {
    path: "*",
    element: <WelcomeLayout />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
