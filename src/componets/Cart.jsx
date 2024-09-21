import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartitems = useSelector((store) => store.cart.cartItems);
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        {cartitems.map((item)=>{
            return item?.card.info.name
        })}
      </div>
    </div>
  );
};

export default Cart;
