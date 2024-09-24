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
      <div className=" flex border-solid border-[#ffffff]  border-[2px] justify-around  align-middle items-center shadow-md h-20 w-[100%]">
        <div className="logoContainer w-12 sm:w-20 md:w-24 lg:w-28">
          <img src={logo}alt="" />
        </div>
        <div className="navContainer flex ">
          <ul className="flex gap-[3] sm:gap- text-center text-xs sm:text-base md:gap-4 md:text-lg justify-center items-center">
            {/* <li>OnlineStatus:{onlineStatus?"✅":"🔴"}</li> */}
            <li className="active  font-medium hover:text-gray-500">
              <Link to="/">Home </Link>
            </li>
            <li className="font-medium  hover:text-gray-500">

              <Link to="/about">About Us</Link>
            </li>
            <li className="font-medium hover:text-gray-500">

              <Link to="/contact">Contact</Link>
            </li>
            <li className="font-medium hover:text-gray-500">
          
              <Link to="/grocery">rocery</Link>
            </li>

            <div className="w-7 flex relative cursor-pointer">
              <Link to="/cart">
                <img src={image} alt="cartLOGO" />
                <li className="absolute sm:top-[6px] left-[11px] font-semibold text-[13px] md:top-[4px] top-[10px] lg:top-[3px] lg:left-[10px] ">
                  {cartitems.length}
                </li>
              </Link>
            </div>
          </ul>
        </div>

        {/* <div className="font-bold text-lg;">{loginUserName}</div> */}
      <button
          className="border-solid font-semibold bg-black text-white   h-8 w-16 rounded-md md:w-24 shadow-md"
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
