import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./componets/Header";
import Body from "./componets/body";
import Footer from "./componets/Footer";
import Error from "./componets/Error";
import { Contact } from "./componets/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantsMenu from "./componets/RestaurantsMenu";
import usercontext from "./utils/usercontext";

const Grocery = lazy(() => import("./componets/Grocery"));
const About = lazy(() => import("./componets/about"));
const AppLayout = () => {
  const [userName,setuserName]=useState();
useEffect(()=>{
  const data={
    name:"Athik",
  }
  setuserName(data.name)
})
  return (
    
    <div className="App overflow-hidden  w-[100%]">
      <usercontext.Provider value={{loginUserName:userName}}>
      <Header />
    </usercontext.Provider>
    <usercontext.Provider value={{loginUserName:"atul"}}>
      <Outlet />
      </usercontext.Provider>
      <Footer />
    </div>
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
        path: "/about",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>loading....</h1>}>
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
