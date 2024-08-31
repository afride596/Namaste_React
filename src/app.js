import React from "react";
import ReactDom from "react-dom/client";
import Header from "./componets/Header";
import Body from "./componets/body";
import SearchComponent from "./componets/SearchComponent";
import Footer from "./componets/Footer";


const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <SearchComponent />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("container"));
root.render(<AppLayout />);
