import { useState, useEffect } from "react";
import ItemList from "./ItemList";

const RestaurantCatergory = ({ Data, showitem, setshowindex }) => {
  const [localHideItem, setLocalHideItem] = useState(true); // initialize localHideItem to hideitem
  // const [render, setRender] = useState(false);

  const handleClick = () => {
    setLocalHideItem(!localHideItem);
    setshowindex();
  };

  return (
    <div>
      {/*herder */}
      <div className="w-[50%] mx-auto border-b-[2px] p-4 text-lg bg-[#ffffff] f items-center my-16 shadow-lg cursor-pointer rounded-lg">
        <div className="flex justify-between tra" onClick={handleClick}>
          <span className="font-bold text-lg ">
            {Data.title} ({Data.itemCards.length})
          </span>
          <span className="">
            <img
              width="25"
              height="96"
              src="https://img.icons8.com/material-outlined/96/expand-arrow--v1.png"
              alt="expand-arrow--v1"
            />
          </span>
        </div>
        {localHideItem === false
          ? localHideItem && <ItemList Data={Data.itemCards} />
          : showitem && <ItemList Data={Data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCatergory;
