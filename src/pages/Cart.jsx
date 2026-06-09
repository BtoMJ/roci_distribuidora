import { useCartStore } from "../store/cartStore";

function Cart() {
  const items = useCartStore((state) => state.items);

  return (
    <div>
      <h1>Mi Pedido</h1>

      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} x {item.quantity}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
