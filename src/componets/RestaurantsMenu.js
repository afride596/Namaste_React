
import { useParams } from "react-router-dom";
import useRestaurantsMenu from "../utils/useRestaurantsMenu";

const RestaurantsMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantsMenu(resId);

  if (resInfo === null) return <div>Loading...</div>;

  console.log(resInfo);

  // console.log(itemCards);
  let { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  console.log(name);

  let { itemCards: itemCards1 } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  let { itemCards: itemCards2 } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  let { itemCards: itemCards3 } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
  let { itemCards: itemCards4 } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  let { itemCards: itemCards5 } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
  let { itemCards: itemCards6 } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6]?.card?.card;
  // let { itemCards: itemCards7 } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[7]?.card?.card;
  // let { itemCards: itemCards8 } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[8]?.card?.card;

  const allItemCards = [
    ...(itemCards1 || []),
    ...(itemCards2 || []),
    ...(itemCards3 || []),
    ...(itemCards4 || []),
    ...(itemCards5 || []),
    ...(itemCards6 || []),
    // ...(itemCards7 || []),
    // ...(itemCards8 || []),
  ];

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h1>{cuisines.join(",")}</h1>
      <h1>{costForTwoMessage}</h1>

      <h1>Menu</h1>
      <ul>
        {allItemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {"Rs."}
            {(
              item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100
            ).toFixed(0)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantsMenu;
