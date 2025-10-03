import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  return (
    <div >
      
      <h1 className="text-4xl font-bold">Product List</h1>
      <div>
        <ProductCard
          pname="shirt"
          price="$10"
          description="this is shirt for men"
          instock="5"
        />
      </div>
      <div>
        <ProductCard
          pname="jeans"
          price="$20"
          description="this is jeans"
          instock="0"
        />
      </div>
      <div>
        <ProductCard
          pname="watch"
          price="$50"
          description="this is watch"
          instock="10"
        />
      </div>
    </div>
  );
}

export default App;
