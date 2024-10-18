import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllRecipes, searchRecipe } from '../redux/slices/recipeSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { allRecipes, loading, error } = useSelector(state => state.recipeReducer);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState(""); 
  const recipesPerPage = 4;
  const totalPages = Math.ceil(allRecipes?.length / recipesPerPage);
  const currentPageLastRecipeIndex = currentPage * recipesPerPage;
  const currentPageStartRecipeIndex = currentPageLastRecipeIndex - recipesPerPage;


  const filteredRecipes = allRecipes.filter(recipe => 
    recipe.cuisine.toLowerCase().includes(searchValue.toLowerCase())
  );

  const visibleRecipeCards = filteredRecipes.slice(currentPageStartRecipeIndex, currentPageLastRecipeIndex);

  useEffect(() => {
    dispatch(fetchAllRecipes());
  }, [dispatch]);

  const navigateToNextPage = () => {
    if (currentPage !== totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const navigateToPrevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value); 
    setCurrentPage(1); 
  };

  return (
    <>
      <Header insideHome={true} />
      <div style={{ marginTop: '80px' }} className='container mx-auto px-4'>
        <input 
          type="text" 
          placeholder="Search by cuisine..." 
          value={searchValue} 
          onChange={handleSearchChange} 
          className="border rounded p-2 mb-4 w-full" 
        />
        {
          loading ? (
            <div style={{ height: '10vh' }} className="flex justify-center items-center font-bold">
              <img width={'60px'} height={'60px'} src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif" className='me-4' alt="Loading" />
              Loading...
            </div>
          ) : (
            <>
              {error && (
                <div className="font-bold text-center mt-5 mb-5 text-red-600">
                  {error}
                </div>
              )}
              <div className='grid grid-cols-4 gap-4'>
                {
                  visibleRecipeCards.length > 0 ? 
                    visibleRecipeCards.map(recipe => (
                      <div key={recipe?.id} className="rounded border p-2 shadow">
                        <img
                          style={{ width: '100%', height: '200px' }}
                          src={recipe?.image}
                          alt={recipe?.name}
                        />
                        <div className="text-center">
                          <h3 className='text-xl font-bold'>{recipe?.name}</h3>
                          <Link className='bg-green-500 text-white p-1 inline-block rounded' to={`/${recipe?.id}/view`}>
                            View More
                          </Link>
                        </div>
                      </div>
                    ))
                    :
                    <div className="font-bold text-center mt-5 mb-5 text-red-600">
                      Recipe not found!!!
                    </div>
                }
              </div>
            
              <div className="flex justify-center items-center mt-5 mb-5">
                <span 
                  style={{ cursor: 'pointer' }} 
                  onClick={navigateToPrevPage} 
                  disabled={currentPage === 1} 
                >
                  <i className="fa-solid fa-backward me-10"></i>
                </span>
                <span className='font-bold'>
                 -- Page {currentPage} of {totalPages} --
                </span>
                <span 
                  style={{ cursor: 'pointer' }} 
                  onClick={navigateToNextPage} 
                  disabled={currentPage === totalPages} 
                >
                  <i className="fa-solid fa-forward ms-10"></i>
                </span>
              </div>
            </>
          )
        }
      </div>
    </>
  );
};

export default Home;
