import React from "react";

function Plant({ plant, addToCart }) {
  return (
    <li key={plant.id} className="plant">
      <figure>{plant.image}</figure>
      <h3>{plant.name}</h3>
      <button onClick={() => addToCart(plant)}> Add to cart</button>
    </li>
  );
}

export default Plant;
