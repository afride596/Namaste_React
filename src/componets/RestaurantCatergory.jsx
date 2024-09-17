import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCatergory = ({ Data }) => {
  const [showitem, setshowitem] = useState(false);

  const handleClick = () => {
    showitem===false?setshowitem(true):setshowitem(false)
  };

  return (
    <div>
      {/*herder */}
      <div className="w-[50%] mx-auto border-b-[2px] p-4 text-lg bg-[#ffffff] f items-center my-16 shadow-lg cursor-pointer rounded-lg">
        <div className="flex justify-between tra " onClick={handleClick}>
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
        

        {showitem && <ItemList Data={Data.itemCards} />}
  
        {/* {console.log(Data.itemCards)} */}
      </div>
    </div>
  );
};
export default RestaurantCatergory;
