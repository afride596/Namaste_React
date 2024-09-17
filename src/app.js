import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./componets/Header";
import Body from "./componets/body";
import Footer from "./componets/Footer";
import Error from "./componets/Error";
import { Contact } from "./componets/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantsMenu from "./componets/RestaurantsMenu";

const Grocery = lazy(() => import("./componets/Grocery"));
const About = lazy(() => import("./componets/about"));
const AppLayout = () => {
  return (
    <div className="App overflow-hidden">
      <Header />
      <Outlet />
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
