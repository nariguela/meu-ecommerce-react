import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [quantities, setQuantities] = useState({});

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: product.quantity }]);
    }
    setCartCount(cartCount + product.quantity);
  };

  const handleQuantityChange = (productId, value) => {
    setQuantities({ ...quantities, [productId]: Number(value) });
  };

  return (
    <>
      <Navbar cartCount={cartCount}></Navbar>
      <Home
        handleAddToCart={handleAddToCart}
        quantities={quantities}
        setQuantities={setQuantities}
        handleQuantityChange={handleQuantityChange}
      ></Home>
    </>
  );
}

export default App;
