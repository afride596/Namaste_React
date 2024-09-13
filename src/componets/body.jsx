import reslists from "../utils/mockData";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
    // console.log(jsonData);
    const restaurants1 =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurants2 =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurants3 =
      jsonData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurants4 =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurants5 =
      jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurants6 =
      jsonData?.data?.cards[6]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurants7 =
      jsonData?.data?.cards[7]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const combinedRestaurents = [
      ...(restaurants1 || []),
      ...(restaurants2 || []),
      ...(restaurants3 || []),
      ...(restaurants4 || []),
      ...(restaurants5 || []),
      ...(restaurants6 || []),
      ...(restaurants7 || []),
    ];
    setlistoFRes(combinedRestaurents);
    setfilterlist(combinedRestaurents);
    // setfilterlist(
    //   jsonData?.data?.success?.cards[3]?.gridWidget?.gridElements?.infoWithStyle?.restaurants
    // );
    // setlistoFRes(
    //   jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    // ?.restaurants
    // );
  };
const OnlineStatus=useOnlineStatus();
if(OnlineStatus===false){
  return(
    <div>
      <h1>Sorry, you are offline</h1>
    </div>
  );
}
  return (
    <div className="body">
      <div className="button-container">
        <button
          type="button"
          className="filterBtn active"
          onClick={() => {
            const filterRes = listofRes.filter((res) => {
              return res?.info?.avgRatingString > 4.3;
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
export default Body;
