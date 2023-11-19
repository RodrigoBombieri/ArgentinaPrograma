import React from 'react'; /// esto no es necesario, pero es buena práctica
import { useState } from 'react'; /// esto no es necesario, pero es buena práctica
import Carrito from './Carrito';

/// ****************************************************************************************
/// EJEMPLO DE COMPONENTE DE FUNCION
// function Saludo(props){
//     return <h1>Hola {props.nombre}</h1>;
// }

/// EJEMPLO DE COMPONENTE DE CLASE (para usar el React.Component hay que importar React arriba(linea 1))
// class Saludo extends React.Component{
//     render(){ /// render es un método de React.Component que se ejecuta cuando se renderiza el componente, es decir cuando se usa en otro componente
//         return <h1>Hola {this.props.nombre}</h1>;
//     }
// }
/// son equivalentes pero normalmente se usa el de función
//// ****************************************************************************************
  
export default function Ejemplo(props) { /// props es un objeto que contiene los valores que le pasamos al componente desde el componente padre (App.jsx)
  const handleOption = () => { /// esta función se ejecuta cuando se hace click en el botón 
    props.setCarritoCount((prevCount) => prevCount + 1); /// prevCount es el valor anterior del estado, en este caso es el valor de carritoCount
  };
  
  //El state dragging lo utilizaremos solo para dar un estilo en este caso, si estamos moviendo un elemento, que se ponga mas opaco mientras lo hacemos como hacen todas las paginas
  const [dragging, setDragging] = useState(false);


  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', 'Texto que coloco gracias al dragStart!!'); // Establecer el tipo y los datos que se están arrastrando
    console.log("Empezaste a arrastrar el elemento")
    setDragging(true); /// Cuando empiezo a arrastrar el elemento, pongo el state dragging en true para que se ponga mas opaco (ver style del div)
};

const handleDragEnd = () => {
    setDragging(false);
    console.log("Terminaste de arrastrar el elemento")
};

/// se usa para arrastrar elementos y que se puedan soltar en otro elemento
const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    console.log('Elemento soltado. Datos: ', data);
};

const handleDragOver = (event) => {
    event.preventDefault();
    /// El evento se dispara cuando el elemento arrastrable se mueve sobre otro elemento
    /// y la pagina no nos deja soltarlo, por eso tenemos que prevenir el comportamiento por defecto
};

  return ( /// el return es lo que se va a renderizar en el componente, en este caso es un div con una card de bootstrap
    <div>
      <div className="card card-hover" 
      /* Cuando el usuario empieza a arrastrar el elemento hacia otro lado*/
      onDragStart={handleDragStart}
      /* Cuando el usuario termina de arrastrar el elemento */
      onDragEnd={handleDragEnd}
      /* Cuando el usuario suelta un texto sobre el elemento que tenemos */
      onDrop={handleDrop}
      /* Al colocar onDragOver y poner el event.preventDefault() evitamos el comportamiento por defecto de la pagina que no nos deja arrastrar dentro de la misma*/
      onDragOver={handleDragOver}
      draggable // HACE QUE EL ELEMENTO SEA ARRASTRABLE ********
      /* El opacity es donde uso el state dragging, si es true lo hago un poco mas transparente, sino lo muestro al 100% */
      style={{ width: "18rem", border: '1px dashed #ccc', padding: '10px', cursor: 'move', opacity: dragging ? 0.5 : 1 }}>
        <img src="https://5.imimg.com/data5/KA/QG/MY-69672094/gift-box-500x500.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {props.title} </h5>
          <p className="card-text">
            Descripcion: {props.description}
          </p>
          <p>Precio: {props.price}</p>
          <p>Código: {props.sku}</p>
          <p>Cantidad Disponible: {props.cantDispo}</p>
          <a href="#" className="btn btn-primary" onClick={handleOption}>{/*Al hacer click en el boton, se activa la funcion onClick, que a su vez llama a la funcion handleOption */} 
            Agregar al carrito 
          </a>          
        </div>
      </div>
    </div>
  )
}


