import React from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';

const Wishlist = () => {
  const myCart = useSelector(state => state.cartReducer);
  const myWishlist = useSelector(state => state.wishlistReducer);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const existingProduct = myCart?.find(item => item.id === product.id);
    
    if (existingProduct) {
      dispatch(addToCart(product));
      dispatch(removeWishlistItem(product.id));
      alert("Product quantity is incrementing");
    } else {
      dispatch(addToCart(product));
      dispatch(removeWishlistItem(product.id));
    }
  };

  return (
    <div>
      <Header />
      <div style={{ marginTop: '80px' }} className='container mx-auto px-4'>
        {myWishlist.length > 0 ? (
          <>
            <h1 className="text-red-500 text-3xl font-bold mb-3">Your Wishlist</h1>
            <div className='grid grid-cols-4 gap-4'>
              {myWishlist?.map(product => (
                <div key={product?.id} className="rounded border p-2 shadow">
                  <img style={{ width: '100%', height: '200px' }} src={product?.thumbnail} alt="" />
                  <div className="text-center">
                    <h3 className="text-xl font-bold">{product?.title}</h3>
                    <div className="flex justify-between mt-3">
                      <button onClick={() => dispatch(removeWishlistItem(product?.id))} className='text-xl'>
                        <i className='fa-solid fa-heart-circle-xmark text-red-600'></i>
                      </button>
                      <button onClick={() => handleAddToCart(product)} className='text-xl'>
                        <i className='fa-solid fa-cart-plus text-green-600'></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ height: '70vh' }} className='flex flex-col item-center justify-center w-full'>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--state-no-items-zero-page-added-states-pack-design-development-illustrations-4610092.png" alt="" />
            <h1 className='text-3xl font-bold text-green-600'>Your Wishlist is Empty</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
