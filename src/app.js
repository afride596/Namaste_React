import React from "react";
import ReactDom from "react-dom/client";
import Header from "./componets/Header";
import SearchComponent from "./componets/SearchComponent";
import reslist from "./utils/mockData";
import RestaurantCard from "./componets/RestaurantCard";
import Footer from "./componets/Footer";

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <SearchComponent />
      <div className="RestaurantCard-container">
        {reslist.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("container"));
root.render(<AppLayout />);
