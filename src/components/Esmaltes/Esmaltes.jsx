import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/esmaltes/amarillo narciso.webp";
import img2 from "../../assets/esmaltes/amarillo neon.webp";
import img3 from "../../assets/esmaltes/amarillo pina.webp";
import img4 from "../../assets/esmaltes/bile.webp";
import img5 from "../../assets/esmaltes/blanco gris.webp";
import img6 from "../../assets/esmaltes/blanco hueso.webp";
import img7 from "../../assets/esmaltes/blanco ostion.webp";
import img8 from "../../assets/esmaltes/caramelo.webp";
import img9 from "../../assets/esmaltes/fuego.webp";
import img10 from "../../assets/esmaltes/gel girasol.webp";
import img11 from "../../assets/esmaltes/gel perla.webp";
import img12 from "../../assets/esmaltes/hot pink.webp";
import img13 from "../../assets/esmaltes/ladrillo.webp";
import img14 from "../../assets/esmaltes/mostaza.webp";
import img15 from "../../assets/esmaltes/naranja coral.webp";
import img16 from "../../assets/esmaltes/naranja.webp";
import img17 from "../../assets/esmaltes/rosa barbie.jfif";
import img18 from "../../assets/esmaltes/rosa coral.jfif";
import img19 from "../../assets/esmaltes/rosa fantasy.webp";
import img20 from "../../assets/esmaltes/rosa neon.webp";
import img21 from "../../assets/esmaltes/rosa viejo.webp";
import img22 from "../../assets/esmaltes/rose.webp";
import img23 from "../../assets/esmaltes/rouge.webp";
import img24 from "../../assets/esmaltes/super blanco.webp";
import img25 from "../../assets/esmaltes/zinnia.webp";
import esmaltes from "../../data/esmaltes.json";

function Esmaltes() {
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
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
  ];
  return (
    <div className="category-container">
      <h1>Esmaltes</h1>
      <div className="products">
        {esmaltes.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Esmaltes;
