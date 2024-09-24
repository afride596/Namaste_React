import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantCatergory from "./RestaurantCatergory";
import { useEffect, useState } from "react";
import { CDN_URL } from "../utils/constants";
import Shimmermenu from "./Shimmermenu";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantsMenu(resId);
  const [showindex, setshowindex] = useState();

  if (resInfo === null) return <Shimmermenu />

  console.log(resInfo);

  // console.log(itemCards);
  let {
    name,
    cuisines,
    costForTwoMessage,
    cloudinaryImageId,
    logo,
    totalRatingsString,
    avgRatingString,
  } = resInfo?.cards[2]?.card?.card?.info;
  // console.log(name);

  // let { itemCards } =
  //   resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  // console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const itemCategory =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (catergory) => {
        return (
          catergory?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  // console.log(itemCategory);

  return (
    <div className="">
      <div className="flex justify-start border pl-10 border-red-800 w-[44%] my-5 gap-10 rounded-lg bg-black bg-opacity-95 text-white h-56  mx-auto">
        <div className="w-48 ">
          {logo ? (
            <img src={CDN_URL + logo} />
          ) : (
            <img
              className="w-[181px] rounded-lg p-1"
              src={CDN_URL + cloudinaryImageId}
            />
          )}
        </div>

        <div>
          <h1 className="my-5 font-extrabold text-2xl ">{name}</h1>
          <h1 className="font-semibold text-gray-400">{cuisines.join(",")} - {costForTwoMessage}</h1>
          
          <div className="font-normal rounded-[5px] flex w-14 my-2     text-center bg-green-600 px-1 text-white">
            <svg
              className="w-5 invert"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M256 73.825c-100.613 0-182.18 81.562-182.18 182.171A182.18 182.18 0 1 0 256 73.825zm101.549 164.513-45.756 38.778 14.233 58.306c2.51 10.89-9.478 19.53-18.97 13.677L256 317.572l-51.056 31.527c-9.76 6.134-21.761-2.787-18.967-13.668l14.23-58.315-45.751-38.778c-8.654-7.25-4.189-21.207 7.246-22.323l59.977-4.465 22.6-55.521c4.465-10.319 19.253-10.319 23.436 0l22.598 55.52 59.985 4.466a12.663 12.663 0 0 1 7.25 22.323z"
                data-name="Star"
              />
            </svg>
            <h1>{avgRatingString}</h1>
          </div>
        
        </div>
      </div>

      {itemCategory.map((catergory, index) => (
        <RestaurantCatergory
          key={catergory?.card?.card.title}
          Data={catergory?.card?.card}
          showitem={index === showindex ? true : false}
          setshowindex={() => setshowindex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantsMenu;
