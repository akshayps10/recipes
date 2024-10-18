import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartRecipes",   // Updated for recipe-based cart
    initialState: [],
    reducers: {
        // Add a recipe to the cart
        addToCart: (state, actionFromView) => {
            const existingRecipe = state.find(recipe => recipe.id === actionFromView.payload.id);
            if (existingRecipe) {
                // If the recipe already exists in the cart, increment the quantity
                existingRecipe.quantity++;
                existingRecipe.totalPrice = existingRecipe.quantity * existingRecipe.price; // Assuming `price` is a field
            } else {
                // If the recipe is new to the cart, add it with quantity 1 and calculate the total price
                state.push({
                    ...actionFromView.payload,
                    quantity: 1,
                    totalPrice: actionFromView.payload.price // Assuming `price` comes from the payload
                });
            }
        },

        // Remove a recipe from the cart
        removeCartItem: (state, actionFromCart) => {
            return state.filter(recipe => recipe.id !== actionFromCart.payload);
        },

        // Increment quantity of a recipe in the cart
        incQuantity: (state, actionFromCart) => {
            const existingRecipe = state.find(recipe => recipe.id === actionFromCart.payload);
            if (existingRecipe) {
                existingRecipe.quantity++;
                existingRecipe.totalPrice = existingRecipe.quantity * existingRecipe.price; // Recalculate the total price
            }
        },

        // Decrement quantity of a recipe in the cart
        decQuantity: (state, actionFromCart) => {
            const existingRecipe = state.find(recipe => recipe.id === actionFromCart.payload);
            if (existingRecipe && existingRecipe.quantity > 1) {
                existingRecipe.quantity--;
                existingRecipe.totalPrice = existingRecipe.quantity * existingRecipe.price; // Recalculate the total price
            }
        },

        // Empty the entire cart (clear all recipes)
        emptyCart: () => {
            return [];
        }
    }
});

export const { addToCart, removeCartItem, incQuantity, decQuantity, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
