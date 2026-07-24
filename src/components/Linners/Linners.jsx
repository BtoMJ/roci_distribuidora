import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/linners/blanco.png";
import img2 from "../../assets/linners/negro.png";
import img3 from "../../assets/linners/plata.webp";
import img4 from "../../assets/linners/rojo platinum.webp";
import img5 from "../../assets/linners/top coat.png";
import linners from "../../data/linners.json";

function Linners() {
  const images = ["0", img1, img2, img3, img4, img5];
  return (
    <div className="category-container">
      <h1>Linners</h1>
      <div className="products">
        {linners.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Linners;
