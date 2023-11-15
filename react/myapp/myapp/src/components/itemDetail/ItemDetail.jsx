import React from 'react'

export default function ItemDetail(props) {
  return (
    <div>
    <a href="URL_DE_TU_ENLACE">
        <img className='imagenDetalle'src="https://cdn.pixabay.com/photo/2016/09/20/11/27/phone-1682317_1280.png" alt="Descripción de la imagen" />
      </a>
      <h2 id='subtitulo' className='subtituloN'>Nombre: {props.title}</h2>
      <h2 id='subtitulo' className='subtituloD'>Descrpicion: {props.description} </h2>
      <h2 id='subtitulo' className='subtituloP'>Precio: {props.price} </h2>
      <h2 id='subtitulo' className='subtituloS'>Codigo: {props.sku} </h2>
      <h2 id='subtitulo' className='subtituloCD'>Cantidad Disponible: {props.cantDisp} </h2>
    </div>
  )
}
