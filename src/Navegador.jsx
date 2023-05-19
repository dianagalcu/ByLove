import { Link } from "react-router-dom"
import logo from "../public/imagenes/logo.png"

const Navegador = () => {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <img className="logo" src={logo} />
            </div>

            <div className="nav-links">
                <Link to={"/"}>Inicio</Link>
                <Link to={"/productos"}>Productos</Link>
                <Link to={"/contactanos"}>Contáctanos</Link>
            </div>
        </nav>
    )
}

export default Navegador