import React from 'react';
import Carrito from './Carrito'; // Asegúrate de importar el componente Carrito

const Encabezado = ({ carritoCount, setCarritoCount }) => {
  return (
    <header>
      <div className='encabezado-container'>
        <h1 className='titulo'>ECOMMERCE</h1>
        <div className='botones-derecha'>
          <button className='boton-inicio'>Inicio</button>
          <Carrito carritoCount={carritoCount} setCarritoCount={setCarritoCount} showButton={true} />
        </div>
      </div>
    </header>
  );
}

export default Encabezado;
