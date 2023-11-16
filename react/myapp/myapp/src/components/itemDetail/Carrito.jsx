import React from 'react';

const Carrito = ({ carritoCount, setCarritoCount, showButton }) => {
  const handleCarritoClick = () => {
    if (carritoCount > 0) {
      setCarritoCount((prevCount) => prevCount - 1);
    }
  };


  return showButton ? (
    <button className="boton-carrito" onClick={handleCarritoClick}>
      Carrito {carritoCount > 0 && <span className="badge">{carritoCount}</span>}
    </button>
  ) : null;
};

export default Carrito;