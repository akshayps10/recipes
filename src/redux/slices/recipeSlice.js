import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllRecipes = createAsyncThunk("recipes/fetchAllRecipes", async () => {
    const result = await axios.get("https://dummyjson.com/recipes");
    
   
    sessionStorage.setItem("allRecipes", JSON.stringify(result.data.recipes));
    
    return result.data.recipes;  
});

const recipeSlice = createSlice({
    name: 'recipes',
    initialState: {
        allRecipes: [],        
        dummyAllRecipes: [],   
        loading: false,        
        error: ""              
    },
    reducers: {
        // Recipe search
        searchRecipe: (state, actionFromHeader) => {
            state.allRecipes = state.dummyAllRecipes.filter(item =>
                item.name.toLowerCase().includes(actionFromHeader.payload.toLowerCase())
            );
        }
    },
    extraReducers: (builder) => {
        builder
            // When the fetch is fulfilled
            .addCase(fetchAllRecipes.fulfilled, (state, apiResult) => {
                state.allRecipes = apiResult.payload;       
                state.dummyAllRecipes = apiResult.payload;   
                state.loading = false;                       
                state.error = "";                            
            })
          
            .addCase(fetchAllRecipes.pending, (state) => {
                state.allRecipes = [];                       
                state.dummyAllRecipes = [];                
                state.loading = true;                       
                state.error = "";                            
            })
            
            .addCase(fetchAllRecipes.rejected, (state) => {
                state.allRecipes = [];                      
                state.dummyAllRecipes = [];                
                state.loading = false;                   
                state.error = "API call failed... please try again later.";
            });
    }
});

export const { searchRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
