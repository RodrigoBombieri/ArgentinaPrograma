import React from 'react'

export default function PascalCase() {
  const handleCarritoClick = () => { /// esta función se ejecuta cuando se hace click en el botón carrito y decrementa el contador
if (carritoCount > 0) { /// si el carrito tiene productos, se muestra un alert con la cantidad de productos
  setCarritoCount((prevCount) => prevCount - 1); 
}
};
  return (
    <div>
    </div>
  )
}
