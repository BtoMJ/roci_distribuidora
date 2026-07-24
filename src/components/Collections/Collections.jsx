import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/gama 3 acrilicos/AB.webp";
import img2 from "../../assets/gama 3 acrilicos/amatist.webp";
import img3 from "../../assets/gama 3 acrilicos/bronze.webp";
import img4 from "../../assets/gama 3 acrilicos/golden.webp";
import img5 from "../../assets/gama 3 acrilicos/grinch.webp";
import img6 from "../../assets/gama 3 acrilicos/santa.webp";
import img7 from "../../assets/gama 3 acrilicos/smoke.webp";
import collections from "../../data/collections.json";

function Collections() {
  const images = ["0", img1, img2, img3, img4, img5, img6, img7];
  return (
    <div className="category-container">
      <h1>Colecciones</h1>
      <div className="products">
        {collections.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Collections;
