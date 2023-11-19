import React, { useState } from 'react'

export default function Registro() {
    
    const [Registro, setRegistro] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        password: '',
        confirmarPassword: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target; /// Esto es para desestructurar el objeto e.target y poder usarlo mas facilmente
        setRegistro((prevRegistro) => ({     /// Esto es para que no se sobreescriba el objeto Registro, sino que se vaya agregando
            ...prevRegistro, /// Esto es para que se mantengan los valores que ya tenia el objeto Registro cuando se agreguen nuevos valores
            [name]: value /// Esto es para que se agreguen los nuevos valores al objeto Registro
        }));
    };


    const handleSubmit = (e) => { 
        e.preventDefault(); /// Esto es para que no se recargue la pagina cuando se envia el formulario
        console.log("Registro enviado: ", Registro); /// Esto es para mostrar en consola el objeto que se va creando
    }

  
    return (
    <div className='container mt-5'>
        <h2 className='mb-4'>Formulario de Registro</h2>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='nombre' className='form-label'>Nombre:</label>
                <input className='form-control' type='text' name='nombre' id= 'nombre' value={Registro.nombre} onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label htmlFor='apellido' className='form-label'>Apellido:</label>
                <input className='form-control' type='text' name='apellido' id= 'apellido' value={Registro.apellido} onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email:</label>
                <input className='form-control' type='email' name='email' id= 'email' value={Registro.email} onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label htmlFor='telefono' className='form-label'>Teléfono:</label>
                <input className='form-control' type='tel' name='telefono' id= 'telefono' value={Registro.telefono} onChange={handleChange} />
            </div>
            <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Contraseña:</label>
                <input className='form-control' type='password' name='password' id= 'password' value={Registro.password} onChange={handleChange} /> 
            </div>
            <div className='mb-3'>
                <label htmlFor='confirmarPassword' className='form-label'>Confirmar Contraseña:</label>
                <input className='form-control' type='password' name='confirmarPassword' id= 'confirmarPassword' value={Registro.confirmarPassword} onChange={handleChange} />
            </div>
            <button className='registrarse' type='submit'>Registrarse</button>
        </form>
        
        <div> 
            <h3>Informacion del registro: </h3>
            <pre> {JSON.stringify(Registro, null, 2)} </pre>
            {/* esto es para mostrar en pantalla el objeto que se va creando */}
            {/* null es para que no aplique ningun tipo de formato */}
            {/* 2 es para que se muestren 2 espacios en el objeto */}
        </div>
      
    </div>
  )
}
