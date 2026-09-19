import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/rubber/Gel Rubber Almond Dark.webp";
import img2 from "../../assets/rubber/Gel Rubber Coffe.webp";
import img3 from "../../assets/rubber/Gel Rubber Cristal.webp";
import img4 from "../../assets/rubber/Gel Rubber Diamond Oro.png";
import img5 from "../../assets/rubber/Gel Rubber Negro.webp";
import img6 from "../../assets/rubber/Gel Rubber Piel.webp";
import img7 from "../../assets/rubber/Gel Rubber Pink Shine.webp";
import img8 from "../../assets/rubber/Gel Rubber Rojo.webp";
import img9 from "../../assets/rubber/Gel Rubber Rose.webp";
import rubber from "../../data/rubber.json";

function Rubber() {
  const images = ["0", img1, img2, img3, img4, img5, img6, img7, img8, img9];
  return (
    <div className="category-container">
      <h1>Gel Rubber</h1>
      <div className="products">
        {rubber.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Rubber;
