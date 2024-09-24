import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./componets/Header";
import Body from "./componets/body";
import Footer from "./componets/Footer";
import Error from "./componets/Error";
import { Contact } from "./componets/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantsMenu from "./componets/RestaurantsMenu";
import RestaurantContainer from "./componets/RestaurantContainer";
import usercontext from "./utils/usercontext";
import Shimmer from "./utils/Shimmer";
import { Provider } from "react-redux";
import appstore from "./utils/appstore";
import Cart from "./componets/Cart";

const Grocery = lazy(() => import("./componets/Grocery"));
const About = lazy(() => import("./componets/About"));
const AppLayout = () => {
  const [userName, setuserName] = useState();
  useEffect(() => {
    const data = {
      name: "Athik",
    };
    setuserName(data.name);
  });
  return (
    <Provider store={appstore}>
      <div className="App ">
        <usercontext.Provider value={{ loginUserName: userName }}>
          <Header />
        </usercontext.Provider>
        <usercontext.Provider value={{ loginUserName: "atul" }}>
          <Outlet />
        </usercontext.Provider>
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/shimmer",
        element: <Shimmer />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDom.createRoot(document.getElementById("container"));
root.render(<RouterProvider router={appRouter} />);
