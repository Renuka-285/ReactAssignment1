
import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

function App() {
  const [counter, setCounter] = useState(0);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];


  const totalPrice = useMemo(() => {
    console.log("Calculating total price");
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected:", product.name);
  }, []);

  return (
    <div>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={products}
        onSelect={handleSelectProduct}
      />
    </div>
  );
}

export default App;
