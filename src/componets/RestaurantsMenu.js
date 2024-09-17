import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantCatergory from "./RestaurantCatergory";
import { useEffect } from "react";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantsMenu(resId);

  if (resInfo === null) return <div>Loading...</div>;

  // console.log(resInfo);

  // console.log(itemCards);
  let { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
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
    <div className="text-center my-10">
      <h1 className="my-5 font-bold text-xl">{name}</h1>
      <h1 className="font-semibold">
        {cuisines.join(",")}  -  {costForTwoMessage}
      </h1>
      {itemCategory.map((catergory) => (
        <RestaurantCatergory  Data={catergory?.card?.card}  />
        
      ))}
    </div>
  );
};

export default RestaurantsMenu;
