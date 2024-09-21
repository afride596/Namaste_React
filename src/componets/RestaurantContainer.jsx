import React from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
const RestaurantContainer = ({ filterlist, listofRes }) => {


  return(listofRes.length === 0)?<Shimmer />:  (
    <div>
      <div className="RestaurantCard-container relative  flex flex-wrap gap-6  justify-center items-center  m-2 pb-28  ">
        {filterlist.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
