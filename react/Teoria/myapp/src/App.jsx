// App.jsx
import React, { useState } from 'react';
import './App.css';
import Header from './components/Ejemplo2/Encabezado/Header';
import ProductoContainer from './components/Ejemplo2/ProductoContainer/ProductoContainer';
import PascalCase from './components/Ejemplo1/PascalCase';

function App() {
  const [carritoCount, setCarritoCount] = useState(0);

  return (
    <>
      <Header carritoCount={carritoCount} setCarritoCount={setCarritoCount} />
      <ProductoContainer carritoCount={carritoCount} setCarritoCount={setCarritoCount} />
      <PascalCase />
    </>
  );
}

export default App;

