import { FaWhatsapp, FaRegTrashAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import empty from "../../assets/empty.png";
import "./Cart.css";

function Cart() {
  const { items, increaseQuantity, decreaseQuantity, removeItem, clearCart } =
    useCartStore();

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const sendToWhatsapp = () => {
    console.log(items);
    const products = items
      .map(
        (item) =>
          `• ${item.name}%0A` +
          `Cantidad: ${item.quantity}%0A` +
          `Precio Unitario: $${item.price}%0A` +
          `Subtotal: $${item.price * item.quantity}%0A`,
      )
      .join("%0A");

    const message =
      `🛍️ NUEVO PEDIDO%0A%0A` + `${products}%0A%0A` + `💰 TOTAL: $${total}`;

    const phone = "5214761037311";

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="empty-cart">
        <img src={empty} alt="Carrito vacío" />
        <h2>Tu carrito está vacío</h2>
        <NavLink to="/catalog" className="btn-primary">
          Ver Catálogo
        </NavLink>
      </div>
    );
  }

  return (
    <section className="cart">
      <h2>Mi Pedido</h2>
      <div className="cart-list">
        {items.map((item) => (
          <div key={item.id} className="cart-item">
            {/* <div className="item-image">
              <img src={item.image} alt={item.name} />
            </div> */}
            <div className="item-info">
              <h3>{item.name}</h3>

              <p className="unit-price">P.U. ${item.price}</p>

              <p className="subtotal">
                Subtotal: ${item.price * item.quantity}
              </p>
            </div>

            <div className="cart-actions">
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>

              <button
                className="btn-remove"
                onClick={() => removeItem(item.id)}
              >
                <FaRegTrashAlt className="trash-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${total}</h3>

        <button className="btn-whatsapp" onClick={sendToWhatsapp}>
          <FaWhatsapp className="whatsapp-icon" />
          Enviar Pedido
        </button>
      </div>
    </section>
  );
}

export default Cart;
