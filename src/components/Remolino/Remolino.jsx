import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/remolino/azul.jfif";
import img2 from "../../assets/remolino/dorado.jpg";
import img3 from "../../assets/remolino/rosa.webp";
import remolino from "../../data/remolino.json";

function Remolino() {
  const images = ["0", img1, img2, img3];
  return (
    <div className="category-container">
      <h1>Remolino</h1>
      <div className="products">
        {remolino.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Remolino;
