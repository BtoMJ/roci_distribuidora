import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/varios/Alicata Para Pie.webp";
import img2 from "../../assets/varios/Alicate Premium.jpg";
import img3 from "../../assets/varios/Cepillo sacudidor.webp";
import img4 from "../../assets/varios/corta tips camaleon.png";
import img5 from "../../assets/varios/CORTA TIPS dorado.webp";
import img6 from "../../assets/varios/levanta cutícula.webp";
import img7 from "../../assets/varios/palitos naranjo.jfif";
import img8 from "../../assets/varios/Guante Rosa Talla M 100pzas.webp";
import img9 from "../../assets/varios/Table Towel.jfif";
import img10 from "../../assets/pinceles/pincel 3d.webp";
import img11 from "../../assets/pinceles/Pincel 8.webp";
import img12 from "../../assets/pinceles/Pincel 10.webp";
import img13 from "../../assets/electronicos/lampara pink diamond.webp";
import img14 from "../../assets/electronicos/lampara sparkle.webp";
import varios from "../../data/varios.json";

function Varios() {
  const images = [
    "0",
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];
  return (
    <div className="category-container">
      <h1>Varios</h1>
      <div className="products">
        {varios.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Varios;
