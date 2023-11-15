import React from 'react' /// esto no es necesario, pero es buena práctica

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

export default function Ejemplo(props) {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://5.imimg.com/data5/KA/QG/MY-69672094/gift-box-500x500.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {props.title} </h5>
          <p className="card-text">
            Descripcion: {props.description}
          </p>
          <p>Precio: {props.price}</p>
          <p>Código: {props.sku}</p>
          <p>Cantidad Disponible: {props.cantDispo}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  )
}


