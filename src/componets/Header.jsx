import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import usercontext from "../utils/usercontext";
import image from "./shopping-bag.png";
import { useSelector } from "react-redux";


const Header = () => {
  let [btName, setbtName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loginUserName } = useContext(usercontext);


  const cartitems = useSelector((store) => store.cart.cartItems);
  console.log(cartitems);
  
  // console.log(loginUserName);

  return (
    <div className="header flex border-solid border-[#ffffff] border-[2px] justify-around align-middle items-center shadow-md h-20 ">
      <div className="logoContainer w-24">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="navContainer flex ">
        <ul className="flex gap-6">
          {/* <li>OnlineStatus:{onlineStatus?"✅":"🔴"}</li> */}
          <li className="active">
            <Link to="/">Home </Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About Us</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
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
      <button
        className="logbtn border-solid border-red-50 border-2  py- h-7 w-20 rounded-md shadow-md"
        onClick={() => {
          btName === "login" ? setbtName("logout") : setbtName("login");
        }}
      >
        {btName}
      </button>
      {/* <div className="font-bold text-lg;">{loginUserName}</div> */}
    </div>
  );
};

export default Header;
