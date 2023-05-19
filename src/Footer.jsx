import logo1 from "../public/imagenes/logoWhatsapp.png"
import logo2 from "../public/imagenes/logoFacebook.png"
import logo3 from "../public/imagenes/logoInstagram.png"

const Footer = (props) => {
    console.log(props)
    return (
        <footer className="texto">
            <h4>By Love - Diana Alvarez - 2023</h4>
            <div className="logos">
                <img className="logoWhatsapp" src={logo1} width={30} />
                <img className="logoFacebook" src={logo2} width={30} />
                <img className="logoInstagram" src={logo3} width={30} />
            </div>
        </footer>
    )
}

export default Footer