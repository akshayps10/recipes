import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRecipe } from '../redux/slices/recipeSlice';  

const Header = ({ insideHome }) => {
  const dispatch = useDispatch();
  const myWishlist = useSelector(state => state.wishlistReducer);
  const myCart = useSelector(state => state.cartReducer);

  return (
    <nav className='flex w-full  bg-gradient-to-r from-blue-500 to-green-200 fixed top-0 p-5 items-center'>
      <Link className='text-white font-bold' to='/'>
        <i className="fa-solid fa-utensils me-1"></i>Recipe App
      </Link>
      <ul className='flex-1 text-right'>
        {insideHome && (
          <li className="list-none inline-block px-5">
            
          </li>
        )}
       
         
       
      </ul>
    </nav>
  );
};

export default Header;
