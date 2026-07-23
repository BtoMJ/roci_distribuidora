import { FaCartShopping } from "react-icons/fa6";
import { useCartStore } from "../../store/cartStore";
import "./Card.css";

const Card = ({ product, photo, count }) => {
  const addItem = useCartStore((state) => state.addItem);
  const Item = useCartStore((state) => state.items);
  console.log("ITEMS", Item);

  return (
    <div className="product-card">
      <div className="card-image-container">
        <img src={photo[count + 1]} alt={"Cover"} className="card-image" />
      </div>

      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <span className="card-price">${product.price}</span>

        <div className="card-overlay">
          <button onClick={() => addItem(product)} className="btn-add-to-cart">
            <FaCartShopping className="btn-add" /> Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
