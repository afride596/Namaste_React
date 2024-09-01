import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  let[btName,setbtName]=useState("Login")
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={LOGO_URL} alt="" />
      </div>
      <div className="navContainer">
        <ul>
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      <button className="logbtn" onClick={()=>{
     btName==="login"?setbtName("logout"):setbtName("login")
      }}>{btName}</button>
    </div>
  );
};

export default Header;
