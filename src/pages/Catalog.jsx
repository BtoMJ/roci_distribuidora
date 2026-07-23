import { Link } from "react-router-dom";
import collections from "../assets/icons/colecciones.png";
import cover from "../assets/icons/cover.png";
import linner from "../assets/icons/linner.png";
import lumistik from "../assets/icons/lumistik.png";
import cateye from "../assets/icons/cateye.png";
import "./Catalog.css";

function Catalog() {
  return (
    <div className="catalog-container">
      <h2>Categorías</h2>
      <Link className="link-menu" to="/catalog/acrilico">
        <div className="cat-container centered">
          <img src={cover} alt="ícono cover" />
          <h3>Cover</h3>
        </div>
      </Link>
      <Link className="link-menu" to="/catalog/cat-eye">
        <div className="cat-container centered">
          <img src={cateye} alt="ícono ojo de gato" />
          <h3>Cat Eye</h3>
        </div>
      </Link>
      <Link className="link-menu" to="/catalog/linners">
        <div className="cat-container centered">
          <img src={linner} alt="ícono linner" />
          <h3>Linners</h3>
        </div>
      </Link>
      <Link className="link-menu" to="/catalog/lumistick">
        <div className="cat-container centered">
          <img src={lumistik} alt="ícono lumistick" />
          <h3>Lumistik</h3>
        </div>
      </Link>
      <Link className="link-menu" to="/catalog/collections">
        <div className="cat-container centered">
          <img src={collections} alt="ícono colecciones" />
          <h3>Colecciones</h3>
        </div>
      </Link>
    </div>
  );
}

export default Catalog;
