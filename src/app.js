// import React, { lazy, Suspense, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Search from "./components/Search";
// import About from "./components/About";
// import Cart from "./components/Cart";
// import Login from "./components/Login";
// import ErrorComponent from "./components/ErrorComponent";
// import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
// import Shimmer from "./components/Shimmer";
// import { Provider, useDispatch } from "react-redux";
// import appStore from "./utills/appStore";
// import Welcome from "./components/Welcome";
// import Footer from "./components/Footer";
// import { onAuthStateChanged } from "firebase/auth";
// import { addUser, removeUser } from "./utills/userSlice";

// // Lazy loading
// const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

// const AppLayout = () => {

//   return (
//     <Provider store={appStore}>
//       <div id="app">
//         <Header />
//         <Outlet />
//         <Footer />
//       </div>
//     </Provider>
//   );
// };

// // Layout for the Welcome page without Header and Footer
// const WelcomeLayout = () => {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const {uid, email} = user.uid;
//         dispatch(addUser({uid:uid, email:email}));
//         navigate("/home");
//       } else {
//         // User is signed out
//         dispatch(removeUser());
//         navigate("/");
//       }
//   }, []);

//   return (
//     <Provider store={appStore}>
//       <div id="welcome-layout">
//         <Outlet />
//       </div>
//     </Provider>
//   );
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <WelcomeLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Welcome />,
//       },
//     ],
//   },
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/home",
//         element: <Body />,
//       },
//       {
//         path: "/search",
//         element: <Search />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//       {
//         path: "/restaurants/:resId",
//         element: (
//           <Suspense fallback={<Shimmer />}>
//             <RestaurantMenu />
//           </Suspense>
//         ),
//       },
//     ],
//     errorElement: <ErrorComponent />,
//   },
//   {
//     path: "*",
//     element: <WelcomeLayout />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<RouterProvider router={appRouter} />);

// import React, { lazy, Suspense, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
// import Body from "./components/Body";
// import Search from "./components/Search";
// import About from "./components/About";
// import Cart from "./components/Cart";
// import Login from "./components/Login";
// import ErrorComponent from "./components/ErrorComponent";
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet,
//   useNavigate,
// } from "react-router-dom";
// import Shimmer from "./components/Shimmer";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import appStore from "./utills/appStore";
// import Welcome from "./components/Welcome";
// import Footer from "./components/Footer";
// import { onAuthStateChanged } from "firebase/auth";
// import { addUser, removeUser } from "./utills/userSlice";
// import { auth } from "./utills/firebase"; // make sure to import the Firebase auth instance

// // Lazy loading
// const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

// const AppLayout = () => {
//   const user = useSelector((state) => state.user);

//   // Only allow access if user is logged in
//   return user ? (
//     <div id="app">
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   ) : null;
// };

// // Layout for the Welcome page without Header and Footer
// const WelcomeLayout = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, email } = user;
//         dispatch(addUser({ uid, email }));
//         navigate("/home");
//       } else {
//         dispatch(removeUser());
//         navigate("/");
//       }
//     });

//     return () => unsubscribe(); // Cleanup on unmount
//   }, [dispatch, navigate]);

//   // Show the welcome page if no user is logged in
//   return !user ? (
//     <div id="welcome-layout">
//       <Outlet />
//     </div>
//   ) : null;
// };

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <WelcomeLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Welcome />,
//       },
//     ],
//   },
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/home",
//         element: <Body />,
//       },
//       {
//         path: "/search",
//         element: <Search />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//       {
//         path: "/restaurants/:resId",
//         element: (
//           <Suspense fallback={<Shimmer />}>
//             <RestaurantMenu />
//           </Suspense>
//         ),
//       },
//     ],
//     errorElement: <ErrorComponent />,
//   },
//   {
//     path: "*",
//     element: <WelcomeLayout />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <Provider store={appStore}>
//     <RouterProvider router={appRouter} />
//   </Provider>
// );

import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Search from "./components/Search";
import About from "./components/About";
import Cart from "./components/Cart";
import Login from "./components/Login";
import ErrorComponent from "./components/ErrorComponent";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useNavigate,
} from "react-router-dom";
import Shimmer from "./components/Shimmer";
import { Provider, useDispatch, useSelector } from "react-redux";
import appStore from "./utills/appStore";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import { onAuthStateChanged } from "firebase/auth"; // Correct Firebase import
import { addUser, removeUser } from "./utills/userSlice";
import { auth } from "./utills/firebase"; // Ensure the correct path to Firebase config

// Lazy loading the RestaurantMenu component
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const AppLayout = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    // Firebase Auth listener to check user login status on page load
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email } = user;
        dispatch(addUser({ uid, email }));
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, [dispatch, navigate]);

  // Only render the layout if the user is logged in
  return user ? (
    <div id="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  ) : null;
};

// Layout for the Welcome page without Header and Footer
const WelcomeLayout = () => {
  const user = useSelector((state) => state.user);

  return !user ? (
    <div id="welcome-layout">
      <Outlet />
    </div>
  ) : null;
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

root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
