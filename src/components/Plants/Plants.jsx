import "./Plants.css";

export default function Plants({ plants }) {
  return (
    <section>
      <h2>Plants</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id} className="plant">
            <figure>{plant.image}</figure>
            <h3>{plant.name}</h3>
            <button>Add to cart</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
