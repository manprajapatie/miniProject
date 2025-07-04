import { createSlice } from "@reduxjs/toolkit";
import { recipes as staticData } from "../data/recipes";

const initialState = {
    all: staticData,
    favorites: [],
};

const recipeSlice = createSlice({
    name: 'receipes',
    initialState,
    reducers: {
        setReceipes: (state, action) => {
            state.all = action.payload;
        },
        addToFavorites: (state, action) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload)
            }
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter((id) => id !== action.payload);
        },
    },
});

export const { setRecipes, addToFavorites, removeFromFavorites } = recipeSlice.actions;
export default recipeSlice.reducer;