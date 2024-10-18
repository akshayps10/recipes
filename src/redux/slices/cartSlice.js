import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartRecipes", 
    initialState: [],
    reducers: {
      
        addToCart: (state, actionFromView) => {
            const existingRecipe = state.find(recipe => recipe.id === actionFromView.payload.id);
            if (existingRecipe) {
                
                existingRecipe.quantity++;
                existingRecipe.totalPrice = existingRecipe.quantity * existingRecipe.price;
            } else {
               
                state.push({
                    ...actionFromView.payload,
                    quantity: 1,
                    totalPrice: actionFromView.payload.price
                });
            }
        },

        
        removeCartItem: (state, actionFromCart) => {
            return state.filter(recipe => recipe.id !== actionFromCart.payload);
        },

       
        incQuantity: (state, actionFromCart) => {
            const existingRecipe = state.find(recipe => recipe.id === actionFromCart.payload);
            if (existingRecipe) {
                existingRecipe.quantity++;
                existingRecipe.totalPrice = existingRecipe.quantity * existingRecipe.price; 
            }
        },

       
        decQuantity: (state, actionFromCart) => {
            const existingRecipe = state.find(recipe => recipe.id === actionFromCart.payload);
            if (existingRecipe && existingRecipe.quantity > 1) {
                existingRecipe.quantity--;
                existingRecipe.totalPrice = existingRecipe.quantity * existingRecipe.price; 
            }
        },

       
        emptyCart: () => {
            return [];
        }
    }
});

export const { addToCart, removeCartItem, incQuantity, decQuantity, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
