import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './detalleProducto.css';
import './menuFlotante.css';
import './productFilter.css';
import { CartProvider } from './contexts/CartContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
    <App />
    </CartProvider>
  </React.StrictMode>
);