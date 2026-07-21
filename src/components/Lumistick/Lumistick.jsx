import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/lumistick/azul.webp";
import img2 from "../../assets/lumistick/cafe.webp";
import img3 from "../../assets/lumistick/dorado.webp";
import img4 from "../../assets/lumistick/fucsia.png";
import img5 from "../../assets/lumistick/morado.webp";
import img6 from "../../assets/lumistick/negro.webp";
import img7 from "../../assets/lumistick/plata.webp";
import img8 from "../../assets/lumistick/rose gold.webp";
import img9 from "../../assets/lumistick/verde.png";
import lumistik from "../../data/lumistik.json";
import "./Lumistick.css";

function Lumistick() {
  const images = ["0", img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className="lumistik-container">
      <h1>Lumistik</h1>
      <div className="products">
        {lumistik.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Lumistick;
