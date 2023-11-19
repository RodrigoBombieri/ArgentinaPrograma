// ProductoContainer.jsx
import React from 'react';
import Ejemplo from '../Funciones/Ejemplo';

const ProductoContainer = ({ carritoCount, setCarritoCount }) => {
  return (
    <>
      <h1 className="titulo">ECOMMERCE</h1>
      <Ejemplo
        title="Caja Misteriosa"
        description="Es una caja que contiene X cosas."
        price="U$S 1300,00"
        sku="AAAB01"
        cantDispo="1000 unidades"
        carritoCount={carritoCount}
        setCarritoCount={setCarritoCount}
      />
    </>
  );
};

export default ProductoContainer;



