// Header.jsx
import React from 'react';
import Carrito from '../Funciones/Carrito';

const Header = ({ carritoCount, setCarritoCount }) => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col">
            <button className="btn btn-primary">Inicio</button>
          </div>
          <div className="col text-end">
            <Carrito carritoCount={carritoCount} setCarritoCount={setCarritoCount} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
