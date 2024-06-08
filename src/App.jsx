import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Catalogo from './components/catalogo';
import Productos from './components/productos';
import './styles/App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a La Casa del Café" />} />
        <Route path="/category/catalogo" element={<Catalogo />} />
        <Route path="/category/productos" element={<Productos />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </>
  );
}

export default App;