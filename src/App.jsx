import Plants from "./components/Plants/Plants";
import Carts from "./components/Carts/Carts";
import PLANTS from "./data.js";

export default function App() {
  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <Plants plants={PLANTS} />
        <Carts />
      </main>
    </>
  );
}
