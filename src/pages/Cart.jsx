import React, { useState, useEffect } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import { removeCartItem, emptyCart } from '../redux/slices/cartSlice'; 
import { decQuantity, incQuantity } from '../redux/slices/cartSlice'; 

const Cart = () => {
  
  const myCart = useSelector(state => state.cartReducer);
  const [cartTotal, setCartTotal] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    if (myCart.length > 0) {
      setCartTotal(myCart.reduce((total, recipe) => total + recipe.caloriesPerServing * recipe.quantity, 0)); 
    }
  }, [myCart]);

  const handleDecrementQuantity = (recipe) => {
    if (recipe.quantity > 1) {
      dispatch(decQuantity(recipe.id));
    } else {
      dispatch(removeCartItem(recipe.id));
    }
  };

  const handleCheckout = () => {
    dispatch(emptyCart());
    alert("Order placed successfully");
    navigate('/'); 
  };

  return (
    <>
      <Header />
      <div style={{ marginTop: '100px' }} className="container mx-auto px-4">
        {myCart.length > 0 ? (
          <>
            <h1 className="font-bold text-3xl mb-5 text-red-600">Cart Summary</h1>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 border rounded p-5 shadow">
                <table className="table-auto w-full">
                  <thead>
                    <tr>
                      <td className="font-semibold">#</td>
                      <td className="font-semibold">Name</td>
                      <td className="font-semibold">Image</td>
                      <td className="font-semibold">Quantity</td>
                      <td className="font-semibold">Calories</td>
                      <td className="font-semibold">...</td>
                    </tr>
                  </thead>
                  <tbody>
                    {myCart.map((recipe, index) => (
                      <tr key={recipe.id}>
                        <td>{index + 1}</td>
                        <td>{recipe.name}</td>
                        <td>
                          <img
                            style={{ width: '100%', height: '200px' }}
                            src={recipe.image}
                            alt={recipe.name}
                          />
                        </td>
                        <td>
                          <div className="flex">
                            <button onClick={() => handleDecrementQuantity(recipe)} className='font-bold'>-</button>
                            <input style={{ width: '30px', textAlign: 'center' }} value={recipe.quantity} type="text" readOnly />
                            <button onClick={() => dispatch(incQuantity(recipe.id))} className='font-bold'>+</button>
                          </div>
                        </td>
                        <td>{recipe.caloriesPerServing * recipe.quantity} kcal</td>
                        <td>
                          <button onClick={() => dispatch(removeCartItem(recipe.id))}>
                            <i className="fa-solid fa-trash text-red-600"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="table-auto w-full">
                  <button onClick={() => dispatch(emptyCart())} className="bg-red-600 text-white rounded p-3 me-3">EMPTY CART</button>
                  <Link to={'/'} className="bg-blue-600 text-white rounded p-3 me-3">SHOP MORE</Link>
                </div>
              </div>
              <div className="border rounded shadow p-5">
                <h1 className="text-2xl font-bold">Total Calories: <span className='text-red-600'>{cartTotal} kcal</span></h1>
                <hr />
                <button onClick={handleCheckout} className="w-full bg-green-600 rounded p-5 text-white font-bold mt-5">Checkout</button>
              </div>
            </div>
          </>
        ) : (
          <div style={{ height: '70vh' }} className='flex flex-col item-center justify-center w-full'>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--state-no-items-zero-page-added-states-pack-design-development-illustrations-4610092.png" alt="" />
            <h1 className='text-3xl font-bold text-green-600'>Your Cart is Empty</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
