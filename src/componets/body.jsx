import reslists from "../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

let Body = () => {
  const [listofRes, setlistoFRes] = useState(reslists);
  return (
    <div className="body">
      <div className="button-container">
      <button type="button"
        className="filterBtn active" 
        onClick={() => {
          const filterRes = listofRes.filter((res) => {
           return res?.info?.avgRatingString > 4;
          });
          setlistoFRes(filterRes);
          // console.log(filter);
        }}
      >
        Top Rated ⭐⭐
      </button>
      </div>
     

      <div className="RestaurantCard-container">
        {listofRes.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
