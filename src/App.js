import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { products, categories } from "../src/helper/data";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Header btn={categories}/>
      <ProductCard veri={products} />
    </div>
  );
}

export default App;
