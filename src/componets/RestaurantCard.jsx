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
    costForTwo,
    sla,
  } = resData?.info;
  const { loginUserName } = useContext(usercontext);
  console.log(resData);

  return (
    <div className="RestaurantCard w-[250px] border-solid border-2 border-White rounded-[10px]   h-[340px]  shadow-lg flex flex-col gap-1">
      {/* imglogo */}
      <div className="flex justify-center items-center">
        <img
          className="w-[215px] h-[175px] shadow-md object-cover rounded-[6px]   my-2"
          src={CDN_URL + cloudinaryImageId}
          alt="Cards"
        />
      </div>

      <div className="flex flex-col justify-center mx-5 py-2  ">
        {/* restaturant name  */}
        <h1 className="from-neutral-950 font-bold font-bold">
          {name.split(" ").slice(0, 4).join(" ")}
        </h1>

        {/* -----------------cusines ---------------------------------------*/}
        <div className="cusines w-56 text-gray-500 font-medium">
          <small>
            {cuisines.slice(0, 3).join(" ") +
              (cuisines.length > 1 ? "...." : "")}
          </small>
        </div>

        {/* ------------------Area Name----------   */}
        <div className="reslocation text-gray-400 font-medium font-medium">
          <small>{areaName}</small>
        </div>

        <div className="starrating flex items-center my-1  gap-2">
          <div className="font-normal rounded-[5px] flex gap-1      text-center bg-green-600 px-1 text-white">
            <svg className="w-5 invert" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                d="M256 73.825c-100.613 0-182.18 81.562-182.18 182.171A182.18 182.18 0 1 0 256 73.825zm101.549 164.513-45.756 38.778 14.233 58.306c2.51 10.89-9.478 19.53-18.97 13.677L256 317.572l-51.056 31.527c-9.76 6.134-21.761-2.787-18.967-13.668l14.23-58.315-45.751-38.778c-8.654-7.25-4.189-21.207 7.246-22.323l59.977-4.465 22.6-55.521c4.465-10.319 19.253-10.319 23.436 0l22.598 55.52 59.985 4.466a12.663 12.663 0 0 1 7.25 22.323z"
                data-name="Star"
              />
            </svg>

           {avgRatingString}
          </div>

          {/* <span>
            {totalRatingsString.includes("K+")
              ? totalRatingsString
              : totalRatingsString + "K+"}
          </span> */}
          <h1></h1>
          <span className="text-sm font-bold">{costForTwo}</span>
          <span className="text-sm font-bold ">{sla.lastMileTravelString}</span>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
