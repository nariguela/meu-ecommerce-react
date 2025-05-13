import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setCartCount(cartCount + 1);
  };

  return (
    <>
      <Navbar cartCount={cartCount}></Navbar>
      <Home handleAddToCart={handleAddToCart}></Home>
    </>
  );
}

export default App;
