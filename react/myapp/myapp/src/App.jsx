import React, { useState } from 'react';
import './App.css';
import ItemDetail from './components/itemDetail/ItemDetail';
import Encabezado from './components/itemDetail/Encabezado';
import Carrito from './components/itemDetail/Carrito';

function App() {
  const [carritoCount, setCarritoCount] = useState(0);
  
  return (
    <>
      <Encabezado carritoCount={carritoCount} setCarritoCount={setCarritoCount} showButton/>
      
      <ItemDetail title="Samsung Galaxy S23" description="Galaxy S23 Ultra 512gb 12gb Green Single Sim" price="U$S 1300,00" sku="AAAS23" cantDisp="1000 unidades" setCarritoCount={setCarritoCount} />
    </>
  );
}

export default App;
