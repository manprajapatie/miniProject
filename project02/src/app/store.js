import {configureStore} from '@reduxjs/toolkit'
import recipeReducer from '../components/recipeSlice';

export const store = configureStore({
    reducer: {
        recipes: recipeReducer,
    },
});