import React from "react";
import ItemList from "./ItemList";
import { useSelector } from "react-redux";
const Cart = () => {
  let Total=0;
  
  const cartitems = useSelector((store) => store.cart.cartItems);
  console.log(cartitems);
  
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <div className="w-6/12 m-auto">
       <ItemList Data={cartitems} />
       {/* {cartitems.map((e)=>{
         return (
           <span className="flex flex-col">
                
                {Total=Total+(e?.card?.info?.price
                ? e?.card?.info?.price / 100
                : e?.card?.info?.defaultPrice / 100
              ).toFixed()}
              </span> 

        )
      //  {console.log(e?.card?.info?.name);}
          
      
          
         
       
       })} */}
      </div>
    </div>
  );
};

export default Cart;
