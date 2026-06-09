import { NavLink } from "react-router-dom";
import heroImg from "../../assets/nails.png";
import "./Home.css";

function Home() {
  return (
    <section className="hero">
      <img src={heroImg} className="hero-img" alt="nails" />
      <h1>Productos para la aplicación de uñas acrílicas.</h1>
      <NavLink to="/catalog" className="btn-primary">
        Ver Catálogo
      </NavLink>
    </section>
  );
}

export default Home;
