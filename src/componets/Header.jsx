import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  let [btName, setbtName] = useState("Login");
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="navContainer">
        <ul>
          <li className="active"><Link to="/">Home </Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li> <Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      <button
        className="logbtn"
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
