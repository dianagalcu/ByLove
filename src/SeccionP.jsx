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
        console.log(seccionP)
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
                    <h1>{seccionP.nombre}</h1>
                    <p>{seccionP.descripcion}</p>
                    <p>{seccionP.precio}</p>
                    <p>{seccionP.categoria}</p>
                    <p>{seccionP.disponible}</p>
                </article>
            ))}
            </div>
            <Footer/> 
        </section>
    )
}

export default SeccionP