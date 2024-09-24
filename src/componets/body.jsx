
import { useState, useEffect } from "react";

import useOnlineStatus from "../utils/useOnlineStatus";

import RestaurantContainer from "./RestaurantContainer";

let Body = () => {
  const [listofRes, setlistoFRes] = useState([]);
  const [filterlist, setfilterlist] = useState(listofRes);
  const [inputvalue, setinputvalue] = useState("");

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = async () => {
    const data = await fetch(
      //  " https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.5061743&lng=80.6480153&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

    );

    const jsonData = await data.json();
    // console.log(jsonData);
    const restaurants1 =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const restaurants2 =
      jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    const combinedRestaurents = [
      ...(restaurants1 || []),
      ...(restaurants2 || []),
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
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false) {
    return (
      <div>
        <h1>Sorry, you are offline</h1>
      </div>
    );
  }
  //conditional rendering

  return  (
    <div className="">
      <div className="flex justify-center items-center mt-10 mb-10 pl-10 sm:pl-48">
        <div className="SearchComponent   flex justify-center items-center    relative ">
          <div className="search rounded-l-[5px] shadow-2xl   flex justify-center items-center">
            <input
              type="text"
              className="p-[15px] text-black bg-white rounded-l-md w-[350px] sm:w-[450px] outline-none border-none "
              value={inputvalue}
              placeholder="Search a restaurant you want...."
              onChange={(e) => {
                setinputvalue(e.target.value);
              }}
            />
            <button
              className="bg-[#060606e2] text-white p-[15px] rounded-r-[5px]  "
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

        <div className=" relative left-64">
          <button
            type="button"
            className="    cursor-pointer  border-solid  border-2 px-4 py-2 rounded-md shadow-2xl"
            onClick={() => {
              const filterRes = listofRes.filter((res) => {
                return res?.info?.avgRatingString > 4.2;
              });
              // setlistoFRes(filterRes);
              setfilterlist(filterRes);
              // console.log(filter);
            }}
          >
            Top Rated ⭐⭐
          </button>
        </div>
      </div>

 
      <div>
      <RestaurantContainer filterlist={filterlist} listofRes={listofRes} />
    </div>
 

      {/* <div className="RestaurantCard-container relative  flex flex-wrap gap-6  justify-center items-center  m-2 pb-28  ">
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
      </div> */}
    </div>
  );
};
export default Body;
