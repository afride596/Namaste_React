import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantsMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    if(resId){

      fetchMenu();
    }
  },[resId]);
  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}`);
    const menu = await data.json();
    setResInfo(menu.data);
  };
  return resInfo;
};
export default useRestaurantsMenu;
