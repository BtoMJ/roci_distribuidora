import Card from "../Card/Card";
import img1 from "../../assets/cat eye/baby pink.webp";
import img2 from "../../assets/cat eye/coppery gold.png";
import img3 from "../../assets/cat eye/coral.png";
import img4 from "../../assets/cat eye/gold.png";
import img5 from "../../assets/cat eye/jupiter.png";
import img6 from "../../assets/cat eye/moon silver.webp";
import img7 from "../../assets/cat eye/pink.png";
import img8 from "../../assets/cat eye/red.png";
import img9 from "../../assets/cat eye/sol.jfif";
import img10 from "../../assets/cat eye/space tierra.png";
import img11 from "../../assets/cat eye/urano.png";
import img12 from "../../assets/cat eye/opal/granate.png";
import img13 from "../../assets/cat eye/opal/negro.png";
import img14 from "../../assets/cat eye/opal/olivo.png";
import img15 from "../../assets/cat eye/opal/sand.png";
import catEye from "../../data/cat-eye.json";
import "./CatEye.css";
import Back from "../Back/Back";

function CatEye() {
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
  ];
  return (
    <div className="cat-eye-container">
      <h1>Cat Eye</h1>
      <div className="products">
        {catEye.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default CatEye;
