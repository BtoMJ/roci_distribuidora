import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/mirror/mirror Aurora Arcoiris.jpg";
import img2 from "../../assets/mirror/mirror blue.webp";
import img3 from "../../assets/mirror/mirror green.webp";
import img4 from "../../assets/mirror/mirror cafe.webp";
import img5 from "../../assets/mirror/mirror champagne.webp";
import img6 from "../../assets/mirror/mirror copper.webp";
import img7 from "../../assets/mirror/mirror magic rose.webp";
import img8 from "../../assets/mirror/mirror olivo.webp";
import img9 from "../../assets/mirror/mirror purple.webp";
import img10 from "../../assets/mirror/mirror red.jfif";
import img11 from "../../assets/mirror/mirror rose gold.webp";
import mirror from "../../data/mirror.json";

function Mirror() {
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
  ];
  return (
    <div className="category-container">
      <h1>Mirror</h1>
      <div className="products">
        {mirror.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Mirror;
