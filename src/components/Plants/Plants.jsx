import "./Plants.css";
import Plant from "./Plant";
export default function Plants({ plants, addToCart }) {
  return (
    <section>
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <Plant key={plant.id} plant={plant} addToCart={addToCart} />
        ))}
      </ul>
    </section>
  );
}
