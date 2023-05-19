import Navegador from './Navegador'
import Footer from './Footer'
import imgPrincipal from '../public/imagenes/imgprincipal.jpeg'

const Inicio = () => {
    return (
        <section>
            <Navegador />
            <img className='imgprincipal' src={imgPrincipal} />
            <p className='texto-principal'>Regalar es un acto de generosidad y agradecimiento a otra persona como muestra
                de nuestro afecto y consideración. Pero el placer de regalar se eleva a la máxima
                potencia cuando el detalle entregado es un regalo personalizado. La verdadera historia
                de los regalos personalizados se remonta a miles de años atrás, pero su popularidad no
                para de crecer.
                Hoy en día podemos personalizar casi cualquier detalle que se nos ocurra.
                Buenos ejemplos son las tazas personalizadas, cojines personalizados, colgantes
                personalizados, llaveros personalizados, lámparas personalizadas, y un largo etcétera.
                En este tipo de regalos podemos reflejar un sello personal y único mediante un nombre,
                fotografía, frase, dibujo, fecha, etc…
            </p>
            <Footer />
        </section>
    )
}

export default Inicio