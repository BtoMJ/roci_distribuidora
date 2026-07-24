import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/polygel/Polygel Chestnut.webp";
import img2 from "../../assets/polygel/Polygel Cocoa.webp";
import img3 from "../../assets/polygel/Polygel Saddle.webp";
import polygel from "../../data/polygel.json";

function Polygel() {
  const images = ["0", img1, img2, img3];
  return (
    <div className="category-container">
      <h1>Polygel</h1>
      <div className="products">
        {polygel.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Polygel;
