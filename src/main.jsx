import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import recipeStore from './redux/recipeStore.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={recipeStore}>
  <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
);
