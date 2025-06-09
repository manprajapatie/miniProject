import { useState } from 'react'
import './App.css'
import { addToFavorites, removeFromFavorites } from "./components/recipeSlice";
import {useSelector, useDispatch} from 'react-redux'
function App() {

  const recipes = useSelector((state) => state.recipes.all);
  const favorites = useSelector((state) => state.recipes.favorites);
  const dispatch = useDispatch();

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Recipes</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="border rounded p-4 shadow-md bg-white dark:bg-gray-800">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Cuisine: {recipe.cuisine} | Difficulty: {recipe.difficulty}
              </p>
              <button
                onClick={() => toggleFavorite(recipe.id)}
                className={`mt-4 px-4 py-2 text-sm rounded ${favorites.includes(recipe.id)
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
                  }`}
              >
                {favorites.includes(recipe.id) ? "Remove Favorite" : "Add to Favorite"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
