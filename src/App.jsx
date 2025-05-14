import { useState } from "react";
import Plants from "./components/Plants/Plants";
import Carts from "./components/Carts/Carts";
import PLANTS from "./data.js";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    const existingItem = cart.find((item) => item.id === plant.id);
    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, { ...plant, quantity: 1 }]);
    }
  };

  const removeFromCart = (plant) => {
    const existingItem = cart.find((item) => item.id === plant.id);

    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item.id === plant.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
        );
      } else {
        setCart((prevCart) => prevCart.filter((item) => item.id !== plant.id));
      }
    }
  };
  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants plants={PLANTS} addToCart={addToCart} />
        <Carts
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}
