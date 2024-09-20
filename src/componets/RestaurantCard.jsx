import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import usercontext from "../utils/usercontext";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    areaName,
    cloudinaryImageId,
  } = resData?.info;
  const { loginUserName } = useContext(usercontext);
  // console.log(resData);
  if (resData === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="RestaurantCard w-[250px] border-solid border-2 border-White rounded-[10px]   h-[340px]  shadow-lg flex flex-col gap-3">
      <div className="flex justify-center items-center">
        <img
          className="w-[215px] h-[190px] shadow-md object-cover rounded-[6px]   my-2"
          src={CDN_URL + cloudinaryImageId}
          alt="Cards"
        />
      </div>

      <div className="flex flex-col justify-center mx-7  ">
        <h1 className="from-neutral-950 font-bold font-bold">
          {name.split(" ").slice(0, 3).join(" ")}
        </h1>
        <div className="starrating flex flex-start gap-4">
          <div className="font-normal text-center">{avgRatingString}</div>
          <div>
            {totalRatingsString.includes("K+")
              ? totalRatingsString
              : totalRatingsString + "K+"}
          </div>
        </div>
        <div className="cusines w-56 font-medium">
          <small>
            {cuisines.slice(0, 3).join(" ") +
              (cuisines.length > 1 ? "...." : "")}
          </small>
        </div>
        <div className="reslocation font-medium font-extrabold">
          <small>{areaName}</small>
        </div>
        <div>user:{loginUserName}</div>
      </div>
    </div>
  );
};
export default RestaurantCard;
