import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    additem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeitem: (state, action) => {
      state.cartItems.pop();
    },
    clearitem: (state, action) => {
      state.cartItems.length === 0;
    },
  },
});
export const { additem, removeitem, clearitem } = cartslice.actions;
export default cartslice.reducer;
