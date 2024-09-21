import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";

import { additem } from "../utils/cartslice";


const ItemList = ({ Data }) => {
  // console.log(Data);
  const dispatch = useDispatch();
  const addhandle = (e) => {
    dispatch(additem(e));
  };
  return (
    <div className="">
      {Data.map((e) => (
        <div className="flex  w-[100%] text-left p-4   my-7  justify-between items-center border-b-[1px]  border-gray-200">
          <div className="flex flex-col  w-11/12  ">
            <span className="font-bold mb-2">{e?.card?.info?.name}</span>
            <span className="font-medium">
              ₹
              {(e?.card?.info?.price
                ? e?.card?.info?.price / 100
                : e?.card?.info?.defaultPrice / 100
              ).toFixed()}
            </span>
            <p className=" text-start pb-9">{e?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 relative flex justify-center">
            <img
              src={CDN_URL + e?.card?.info?.imageId}
              alt={e?.card?.info?.name}
              className="w-[170px] shadow-2x "
            />
            <button
              className="absolute  -bottom-2 cursor-pointer left-[50px] border flex justify-center items-center text-[#0cff51] bg-[#ffff] font-semibold rounded-md shadow-lg px-6 py-1"
              onClick={() => addhandle(e)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
