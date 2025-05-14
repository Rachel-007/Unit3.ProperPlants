export default function Carts({ cart, addToCart, removeFromCart }) {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <div>
                {item.image}
                {item.name}
              </div>
              <div>
                <button onClick={() => removeFromCart(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
