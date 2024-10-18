import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./slices/recipeSlice"; 
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";      

const recipeStore = configureStore({
    reducer: {
        recipeReducer: recipeSlice,            
        wishlistReducer: wishlistSlice,        
        cartReducer: cartSlice                 
    }
});

export default recipeStore;