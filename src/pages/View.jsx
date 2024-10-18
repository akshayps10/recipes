import React, { useEffect, useState } from 'react';
import Header from '../components/Header'; 
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

const View = () => {
  const myCart = useSelector(state => state.cartReducer);
  const myWishlist = useSelector(state => state.wishlistReducer);
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const storedRecipes = sessionStorage.getItem("allRecipes");

    if (storedRecipes) {
      const allRecipes = JSON.parse(storedRecipes);
      const selectedRecipe = allRecipes.find(item => item.id === Number(id));

      if (selectedRecipe) {
        setRecipe(selectedRecipe);
      } else {
        console.error("Recipe not found.");
      }
    } else {
      console.error("No recipes in session storage.");
    }
  }, [id]);

  const handleWishlist = (recipe) => {
    if (myWishlist.some(item => item.id === recipe.id)) {
      alert("Recipe already in your wishlist");
    } else {
      dispatch(addToWishlist(recipe));
      alert("Recipe added to wishlist");
    }
  };

  const handleAddToCart = (recipe) => {
    const existingRecipe = myCart.find(item => item.id === recipe.id);

    if (existingRecipe) {
      alert("Recipe is already in the cart.");
      dispatch(addToCart(recipe));
    } else {
      dispatch(addToCart(recipe));
      alert("Recipe added to cart");
    }
  };

  return (
    <>
      <Header />
      <div style={{ minHeight: '90vh' }} className="flex justify-center items-center mx-5">
        <div className="grid grid-cols-2 items-center gap-4">
          <img
            style={{ width: '100%', height: '300px' }} 
            src={recipe?.image || 'https://via.placeholder.com/300'}
            alt={recipe?.name || "No image available"}
          />
          <div>
            <h3>Recipe ID: {recipe?.id}</h3>
            <h1 className="text-3xl font-bold">{recipe?.name || "Recipe Name"}</h1> 
            <h4 className="font-bold text-red-500 text-xl">Difficulty: {recipe?.difficulty || "N/A"}</h4>
            <h4 className="font-bold text-blue-500 text-xl">Cuisine: {recipe?.cuisine || "N/A"}</h4>
            <h4 className="font-bold text-gray-600">Calories per serving: {recipe?.caloriesPerServing || "N/A"}</h4>
            <p className="mt-2">
              <span className="font-bold">Ingredients: </span>
              <ul className="list-disc list-inside">
                {recipe?.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                )) || "No ingredients available"}
              </ul>
            </p>
            <p className="mt-2">
              <span className="font-bold">Instructions: </span>
              <ol className="list-decimal list-inside">
                {recipe?.instructions?.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                )) || "No instructions available"}
              </ol>
            </p>
            <p className="mt-2">
              <span className="font-bold">Prep Time: </span>
              {recipe?.prepTimeMinutes || "N/A"} minutes
            </p>
            <p className="mt-2">
              <span className="font-bold">Cook Time: </span>
              {recipe?.cookTimeMinutes || "N/A"} minutes
            </p>
            <p className="mt-2">
              <span className="font-bold">Servings: </span>
              {recipe?.servings || "N/A"}
            </p>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          
        </div>
      </div>
    </>
  );
};

export default View;
