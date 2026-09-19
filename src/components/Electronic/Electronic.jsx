import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/electronicos/lampara pink diamond.webp";
import img2 from "../../assets/electronicos/lampara sparkle.webp";
import electronic from "../../data/electronic.json";

function Electronic() {
  const images = ["0", img1, img2];
  return (
    <div className="category-container">
      <h1>Lámparas</h1>
      <div className="products">
        {electronic.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Electronic;
