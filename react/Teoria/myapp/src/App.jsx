// App.jsx
import React, { useState } from 'react';
import './App.css';
import Ejemplo from './components/Ejemplo2/Ejemplo';
import PascalCase from './components/Ejemplo1/PascalCase';
import Carrito from './components/Ejemplo2/Carrito';

function App() {
  const [carritoCount, setCarritoCount] = useState(0); /// creo un estado para el carrito, que inicialmente tiene 0 elementos
  /// carritoCount es el valor del estado y se actualiza cada vez que se llama a setCarritoCount
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col">
              <button className="btn btn-primary">Inicio</button>
            </div>
            <div className="col text-end">
              <Carrito carritoCount={carritoCount} setCarritoCount={setCarritoCount} />
              {/* le pasamos los props al componente Carrito */}
            </div>
          </div>
        </div>
      </header>
      <h1 className="titulo">ECOMMERCE</h1>
       <Ejemplo /// le pasamos los props al componente Ejemplo
        title="Caja Misteriosa"
        description="Es una caja que contiene X cosas."
        price="U$S 1300,00"
        sku="AAAB01"
        cantDispo="1000 unidades"
        setCarritoCount={setCarritoCount} /// le pasamos la función setCarritoCount al componente Ejemplo
      />
      <PascalCase />
    </>
  );
}

export default App;

