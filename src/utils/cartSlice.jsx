import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // RTK uses immer library bts
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    /// original state: {items: ['pizza']}
    clearCart: (state) => {
      // RTK - either mutates existing state or returns new state
      state.items.length = 0;
      /// return {items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
