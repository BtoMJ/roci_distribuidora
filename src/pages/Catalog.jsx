import { Link } from "react-router-dom";
import "./Catalog.css";

function Catalog() {
  return (
    <div className="catalog-container">
      <h2>Categorías</h2>
      <div className="cat-container centered">
        <Link className="link-menu" to="/catalog/acrilico">
          <h3>Cover</h3>{" "}
        </Link>
      </div>
      <div className="cat-container centered">
        <Link className="link-menu" to="/catalog/cat-eye">
          <h3>Cat Eye</h3>{" "}
        </Link>
      </div>
      <div className="cat-container centered">
        <Link className="link-menu" to="/catalog/linners">
          <h3>Linners</h3>
        </Link>
      </div>
      <div className="cat-container centered">
        <Link className="link-menu" to="/catalog/lumistick">
          <h3>Lumistik</h3>
        </Link>
      </div>
    </div>
  );
}

export default Catalog;
