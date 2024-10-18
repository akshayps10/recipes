import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishlist',
    initialState :[],
    reducers :{
      
        addToWishlist : (state,productBycomponentAction)=>{
            state.push(productBycomponentAction.payload)
        },
       
        removeWishlistItem :(state,productByComponentAction)=>{
           return   state.filter(item=>item.id!=productByComponentAction.payload)
        }
    }
        

})

export const {addToWishlist,removeWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer