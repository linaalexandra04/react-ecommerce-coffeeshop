import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Catalogo from './components/catalogo';
import CartWidget from './components/CartWidget';
import { CartProvider } from './components/CartContext';
import './styles/App.css';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/cart" element={<CartWidget />} /> {/* Ruta para CartWidget */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

