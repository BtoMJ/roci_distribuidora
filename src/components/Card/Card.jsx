// import img1 from "../../assets/polish/cafe.png";
// import img2 from "../../assets/polish/roseGold.png";
// import img3 from "../../assets/polish/capri.png";
// import img4 from "../../assets/polish/amarillo.png";
// import img5 from "../../assets/polish/holograficverde.png";
// import img6 from "../../assets/polish/ursula.png";
// import img7 from "../../assets/polish/gold.png";
// import img8 from "../../assets/polish/bublegum.png";
// import img9 from "../../assets/polish/koala.png";
// import img10 from "../../assets/polish/celeste.png";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useCartStore } from "../../store/cartStore";
import "./Card.css";

const Card = ({ product, photo, count }) => {
  const addItem = useCartStore((state) => state.addItem);
  const Item = useCartStore((state) => state.items);
  console.log("ITEMS", Item);

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-card">
      <div className="card-image-container">
        <img src={photo[count + 1]} alt={"Cover"} className="card-image" />
      </div>

      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <span className="card-price">${product.price}</span>
        <div className="card-overlay">
          <div className="quantity-selector">
            <button
              className="btn-counter"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>

            <p className="quantity">{quantity}</p>

            <button
              className="btn-counter"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          <button
            onClick={() => addItem(product, quantity)}
            className="btn-add-to-cart"
          >
            <FaCartShopping />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
