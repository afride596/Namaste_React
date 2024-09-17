import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  let [btName, setbtName] = useState("Login");
  const onlineStatus=useOnlineStatus()
  return (
    <div className="header flex border-solid border-[#ffffff] border-[2px] justify-around align-middle items-center shadow-md h-20 ">
      <div className="logoContainer w-24">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="navContainer flex ">
        <ul className="flex gap-6">
          <li>OnlineStatus:{onlineStatus?"✅":"🔴"}</li>
          <li className="active"><Link to="/">Home </Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li> <Link to="/grocery">grocery</Link></li>
          <li>Cart</li>
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
    </div>
  );
};

export default Header;
