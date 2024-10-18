import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';         // Displays all recipes
import View from './pages/View';         // View individual recipe details
import Cart from './pages/Cart';         // Shopping cart functionality
import Wishlist from './pages/Wishlist'; // Wishlist functionality
import Pnf from './pages/Pnf';           // Page not found component
import Footer from './components/Footer'; // Footer component

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />               {/* Home page for listing recipes */}
        <Route path='/wishlist' element={<Wishlist />} />   {/* Wishlist page */}
        <Route path='/cart' element={<Cart />} />           {/* Cart page */}
        <Route path='/:id/view' element={<View />} />       {/* View individual recipe by ID */}
        <Route path='/*' element={<Pnf />} />                {/* 404 Not Found page */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
