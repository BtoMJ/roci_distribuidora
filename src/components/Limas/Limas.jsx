import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/limas/lima 80-80.jfif";
import img2 from "../../assets/limas/lima 100-100.webp";
import img3 from "../../assets/limas/lima 120-120.webp";
import img4 from "../../assets/limas/lima buffer.jfif";
import img5 from "../../assets/limas/Lima para Pie.webp";

import limas from "../../data/limas.json";

function Limas() {
  const images = ["0", img1, img2, img3, img4, img5];
  return (
    <div className="category-container">
      <h1>llimas</h1>
      <div className="products">
        {limas.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Limas;
