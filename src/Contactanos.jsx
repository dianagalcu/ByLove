import React from 'react'
import Navegador from './Navegador'
import Footer from './Footer'

const Contactanos = () => {
    return (
        <section>
            <Navegador/>
            <h1>Contáctanos</h1>
            <div>
                <p>Para mayor informacion de nuestra tienda puedes comunicarte al 3205678942 </p>
                <form>
                    <label htmlFor="">
                        <input type="text" placeholder='Nombre' />
                    </label>
                    <label htmlFor="">
                        <input type="text" placeholder='Teléfono' />
                    </label>
                    <label htmlFor="">
                        <input type="email" placeholder='Correo' />
                    </label>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Deja tu mensaje'></textarea>
                    <button type='submit'>Enviar mensaje</button>
                </form>
            </div>
            <Footer/>
        </section>
    )
}

export default Contactanos