import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/pinceles/pincel 3d.webp";
import img2 from "../../assets/pinceles/Pincel 8.webp";
import img3 from "../../assets/pinceles/Pincel 10.webp";

import pinceles from "../../data/pinceles.json";

function Pinceles() {
  const images = ["0", img1, img2, img3];
  return (
    <div className="category-container">
      <h1>pinceles</h1>
      <div className="products">
        {pinceles.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Pinceles;
