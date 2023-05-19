import { useEffect, useState } from "react"
import Navegador from "./Navegador";
import Footer from "./Footer";


const SeccionP = () => {
    const [seccionP, setSeccionP] = useState([])
    const mostrarSeccionP = async () => {
        await fetch("./src/productos.json")
            .then((res) => res.json())
            .then((data) => setSeccionP(data))
            .catch((err) => {
               console.log(err)
            });
        }
    useEffect(()=>{ mostrarSeccionP()},[])
    return (
        <section >
            <Navegador/>
            <h1>Productos</h1>
            <div className="cards-container">
             {seccionP.map((seccionP) => (
                 <article className="cards" key={seccionP.id}>
                    <img src={seccionP.imagen}/>
                    <h2>{seccionP.nombre}</h2>
                    <p>{seccionP.descripcion}</p>
                    <p className="precio">${seccionP.precio}</p>
                    <p><b>Categoría:</b> {seccionP.categoria}</p>
                    <p><b>Estado:</b> {seccionP.disponible}</p>
                </article>
            ))}
            </div>
            <Footer/> 
        </section>
    )
}

export default SeccionP