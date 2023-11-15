import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/// al createRoot le pasamos el elemento del DOM donde queremos renderizar la aplicación usando document.getElementById('root')
/// el elemento que tiene el id root es el div que está en el index.html
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <App /> 
  </React.StrictMode>,
)

/// React.strictMode es un componente que nos ayuda a encontrar errores en la aplicación
/// App es el componente principal de la aplicación