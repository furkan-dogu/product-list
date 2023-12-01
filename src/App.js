import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { products } from "../src/helper/data";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductCard veri={products} />
    </div>
  );
}

export default App;
