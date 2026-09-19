import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/brocas/broca 5 en 1.webp";
import img2 from "../../assets/brocas/broca buffer bit.webp";
import img3 from "../../assets/brocas/broca Flama.jpg";
import img4 from "../../assets/brocas/rusian dry.webp";

import brocas from "../../data/brocas.json";

function Brocas() {
  const images = ["0", img1, img2, img3, img4];
  return (
    <div className="category-container">
      <h1>Brocas</h1>
      <div className="products">
        {brocas.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Brocas;
