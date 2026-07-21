import Card from "../Card/Card";
import Back from "../Back/Back";
import img1 from "../../assets/cover/cover 1 oz almond dark.webp";
import img2 from "../../assets/cover/cover 1 oz almond.webp";
import img3 from "../../assets/cover/cover 1 oz blanco lechoso.webp";
import img4 from "../../assets/cover/cover 1 oz brown.webp";
import img5 from "../../assets/cover/cover 1 oz capuccino.webp";
import img6 from "../../assets/cover/cover 1 oz cover pink.webp";
import img7 from "../../assets/cover/cover 1 oz cristal.webp";
import img8 from "../../assets/cover/cover 1 oz kiss me.jfif";
import img9 from "../../assets/cover/cover 1 oz kitty rose.webp";
import img10 from "../../assets/cover/cover 1 oz kitty shine.webp";
import img11 from "../../assets/cover/cover 1 oz milk rose.webp";
import img12 from "../../assets/cover/cover 1 oz natural.webp";
import img13 from "../../assets/cover/cover 1 oz petal rose.webp";
import img14 from "../../assets/cover/cover 1 oz petal shine.webp";
import img15 from "../../assets/cover/cover 1 oz piel canela.webp";
import img16 from "../../assets/cover/cover 1 oz pinkis.webp";
import img17 from "../../assets/cover/cover 1 oz porcelana.webp";
import img18 from "../../assets/cover/cover 1 oz salmon.webp";
import img19 from "../../assets/cover/cover 1 oz skin nude.webp";
import img20 from "../../assets/cover/cover 1 oz strong pink.webp";
import img21 from "../../assets/cover/cover 2 oz almond dark.webp";
import img22 from "../../assets/cover/cover 2 oz almond.webp";
import img23 from "../../assets/cover/cover 2 oz brown.webp";
import img24 from "../../assets/cover/cover 2 oz candy.webp";
import img25 from "../../assets/cover/cover 2 oz capuccino.webp";
import img26 from "../../assets/cover/cover 2 oz cover pink.webp";
import img27 from "../../assets/cover/cover 2 oz cristal.webp";
import img28 from "../../assets/cover/cover 2 oz kitty rose.webp";
import img29 from "../../assets/cover/cover 2 oz petal rose.webp";
import img30 from "../../assets/cover/cover 2 oz piel canela.webp";
import img31 from "../../assets/cover/cover 2 oz porcelana.webp";
import img32 from "../../assets/cover/cover 2 oz salmon.webp";
import img33 from "../../assets/cover/cover 2 oz shine up.webp";
import img34 from "../../assets/cover/cover 2 oz skin nude.webp";
import img35 from "../../assets/cover/cover 2 oz strong pink.webp";
import img36 from "../../assets/cover/cover 4 oz almond.webp";
import img37 from "../../assets/cover/cover 4 oz cristal.webp";
import img38 from "../../assets/cover/cover 4 oz petal rose.png";
import acrilico from "../../data/acrílico_cover.json";
import "./Acrilico.css";

function Acrilico() {
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
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30,
    img31,
    img32,
    img33,
    img34,
    img35,
    img36,
    img37,
    img38,
  ];
  return (
    <div className="category-container">
      <h1>Acrílico Cover</h1>
      <div className="products">
        {acrilico.map((item, i) => (
          <Card key={item.id} product={item} photo={images} count={i} />
        ))}
      </div>
      <Back />
    </div>
  );
}

export default Acrilico;
