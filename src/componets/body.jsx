import reslists from "../utils/mockData";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

let Body = () => {
  const [listofRes, setlistoFRes] = useState([]);
  const [filterlist, setfilterlist] = useState(listofRes);
  const [inputvalue, setinputvalue] = useState("");

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await data.json();
    console.log(jsonData);

    setlistoFRes(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setfilterlist(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // setfilterlist(
    //   jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
    // );
    // setlistoFRes(
    //   jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
  };

  return (
    <div className="body">
      <div className="button-container">
        <button
          type="button"
          className="filterBtn active"
          onClick={() => {
            const filterRes = listofRes.filter((res) => {
              return res?.info?.avgRatingString > 4;
            });
            // setlistoFRes(filterRes);
            setfilterlist(filterRes);
            // console.log(filter);
          }}
        >
          Top Rated ⭐⭐
        </button>
      </div>

      <div className="SearchComponent">
        <div className="search">
          <input
            type="text"
            className="input"
            value={inputvalue}
            placeholder="Search a restaurant you want...."
            onChange={(e) => {
              setinputvalue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filterSearch = listofRes.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(inputvalue.toLowerCase());
              });

              setfilterlist(filterSearch);
            }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="RestaurantCard-container">
        {filterlist.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
