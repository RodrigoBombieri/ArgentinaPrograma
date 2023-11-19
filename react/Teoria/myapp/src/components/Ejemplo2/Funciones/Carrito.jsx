// Carrito.jsx
import React from 'react';

const Carrito = ({ carritoCount, setCarritoCount }) => { /// le pasamos los props al componente Carrito
  const handleCarritoClick = () => { /// esta función se ejecuta cuando se hace click en el botón
    if (carritoCount > 0) { /// si el carrito tiene elementos, se le resta 1
      setCarritoCount((prevCount) => prevCount - 1); 
    }
  };

  return ( /// el return es lo que se va a renderizar en el componente, en este caso es un botón con la cantidad de elementos del carrito
    <button id="carritoButton" className="btn btn-outline-secondary" onDoubleClick={handleCarritoClick}>
      Carrito {carritoCount > 0 && <span className="badge bg-danger">{carritoCount}</span>}
      {/* Si el carrito tiene elementos, se muestra el badge con la cantidad de elementos */}
    </button>
  );
};

export default Carrito; /// exportamos el componente Carrito para poder usarlo en otros componentes
