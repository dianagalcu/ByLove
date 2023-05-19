import React from 'react'
import Navegador from './Navegador'
import Footer from './Footer'

const Contactanos = () => {
    return (
        <section>
            <Navegador />
            <h1>Contáctanos</h1>
            <div>
                <form className='contenedorForm'>
                    <label htmlFor="">
                        <input className='formulario' type="text" placeholder='Nombre' />
                    </label>
                    <label htmlFor="">
                        <input className='formulario' type="text" placeholder='Teléfono' />
                    </label>
                    <label htmlFor="">
                        <input className='formulario' type="email" placeholder='Correo' />
                    </label>
                    <textarea className="mensaje" name="" id="" cols="30" rows="10" placeholder='Deja tu mensaje'></textarea>
                    <button className='boton' type='submit'>Enviar</button>
                </form>
            </div>
            <Footer />
        </section>
    )
}

export default Contactanos