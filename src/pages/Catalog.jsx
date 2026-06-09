import Card from "../components/Card/Card";
import polish from "../data/polish.json";
import "./Catalog.css";

function Catalog() {
  return (
    <div className="catalog-container">
      <h1>Catálogo de Productos</h1>
      <div className="products">
        {polish.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
