import { Link } from "react-router-dom";
import collections from "../assets/icons/colecciones.png";
import cover from "../assets/icons/cover.png";
import linner from "../assets/icons/linner.png";
import lumistik from "../assets/icons/lumistik.png";
import cateye from "../assets/icons/cateye.png";
import poly from "../assets/icons/poly.png";
// import electronicos from "../assets/icons/electronicos.png";
import esmalte1 from "../assets/icons/esmalte1.png";
import lima from "../assets/icons/lima-de-unas.png";
// import pincel from "../assets/icons/pincel.png";
import brocas from "../assets/icons/broca.png";
import esmalte2 from "../assets/icons/esmalte.png";
import esmalte3 from "../assets/icons/esmalte2.png";
import varios from "../assets/icons/arte-de-unas.png";
import rubber from "../assets/icons/botella de esmalte.png";
import "./Catalog.css";

function Catalog() {
  return (
    <div className="catalog-container">
      <div className="catalog-list">
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
        <Link className="link-menu" to="/catalog/polygel">
          <div className="cat-container centered">
            <img src={poly} alt="ícono polygel" />
            <h3>Polygel</h3>
          </div>
        </Link>
        <Link className="link-menu" to="/catalog/remolino">
          <div className="cat-container centered">
            <img src={esmalte1} alt="ícono remolino" />
            <h3>Remolino</h3>
          </div>
        </Link>
        {/* <Link className="link-menu" to="/catalog/electronic">
        <div className="cat-container centered">
          <img src={electronicos} alt="ícono electronicos" />
          <h3>Electrónico</h3>
        </div>
      </Link> */}
        <Link className="link-menu" to="/catalog/mirror">
          <div className="cat-container centered">
            <img src={esmalte2} alt="ícono mirror" />
            <h3>Mirror</h3>
          </div>
        </Link>
        <Link className="link-menu" to="/catalog/brocas">
          <div className="cat-container centered">
            <img src={brocas} alt="ícono brocas" />
            <h3>Brocas</h3>
          </div>
        </Link>
        {/* <Link className="link-menu" to="/catalog/pinceles">
        <div className="cat-container centered">
          <img src={pincel} alt="ícono pinceles" />
          <h3>Pinceles</h3>
        </div>
      </Link> */}
        <Link className="link-menu" to="/catalog/limas">
          <div className="cat-container centered">
            <img src={lima} alt="ícono limas" />
            <h3>Limas</h3>
          </div>
        </Link>
        <Link className="link-menu" to="/catalog/varios">
          <div className="cat-container centered">
            <img src={varios} alt="ícono varios" />
            <h3>Varios</h3>
          </div>
        </Link>
        <Link className="link-menu" to="/catalog/esmaltes">
          <div className="cat-container centered">
            <img src={esmalte3} alt="ícono esmaltes" />
            <h3>Esmaltes</h3>
          </div>
        </Link>

        <Link className="link-menu" to="/catalog/rubber">
          <div className="cat-container centered">
            <img src={rubber} alt="ícono rubber" />
            <h3>Rubber</h3>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Catalog;
