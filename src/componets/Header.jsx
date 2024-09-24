import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import usercontext from "../utils/usercontext";
import image from "./shopping-bag.png";
import { useSelector } from "react-redux";
import logo from "../utils/3.png"
const Header = () => {
  let [btName, setbtName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loginUserName } = useContext(usercontext);

  const cartitems = useSelector((store) => store.cart.cartItems);
  // console.log(cartitems);

  // console.log(loginUserName);

  return (
    <div className="sticky  z-[1] top-0 bg-white ">
      <div className=" flex border-solid border-[#ffffff]  border-[2px] justify-around  align-middle items-center shadow-md h-20 ">
        <div className="logoContainer w-24 sm:w-32">
          <img src={logo}alt="" />
        </div>
        <div className="navContainer flex ">
          <ul className="flex gap-2 sm:gap-6">
            {/* <li>OnlineStatus:{onlineStatus?"✅":"🔴"}</li> */}
            <li className="active font-medium hover:text-gray-500">
              <Link to="/">Home </Link>
            </li>
            <li className="font-medium hover:text-gray-500">

              <Link to="/about">About Us</Link>
            </li>
            <li className="font-medium hover:text-gray-500">

              <Link to="/contact">Contact</Link>
            </li>
            <li className="font-medium hover:text-gray-500">
          
              <Link to="/grocery">grocery</Link>
            </li>

            <div className="w-8 flex relative cursor-pointer">
              <Link to="/cart">
                <img src={image} alt="cartLOGO" />
                <li className="absolute left-[12px] font-semibold text-[13px] top-[10px]">
                  {cartitems.length}
                </li>
              </Link>
            </div>
          </ul>
        </div>

        {/* <div className="font-bold text-lg;">{loginUserName}</div> */}
      <button
          className="border-solid font-semibold bg-black text-white   h-8 w-20 rounded-md shadow-md"
          onClick={() => {
            btName === "login" ? setbtName("logout") : setbtName("login");
          }}
        >
          {btName}
        </button>
      </div>
    </div>
  );
};

export default Header;
