import { NavLink } from "react-router-dom";
import heroImg from "../../assets/LogoRoci.png";
import Balatro from "../Balatro/Balatro";
import "./Home.css";

function Home() {
  return (
    <section className="hero">
      <Balatro
        isRotate={false}
        mouseInteraction
        pixelFilter={1770}
        color1="#fabebe"
        color2="#db9797"
        color3="#b66767"
      />
      <img src={heroImg} className="hero-img" alt="nails" />
      <h1>Productos para la aplicación de uñas acrílicas.</h1>
      <NavLink to="/catalog" className="btn-primary">
        Ver Catálogo
      </NavLink>
    </section>
  );
}

export default Home;
