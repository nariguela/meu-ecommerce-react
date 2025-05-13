import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

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

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    setCartCount(cartCount - 1);
  };

  const handleUpdateQuantity = (productId, value) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: Number(value) } : item
    );
    setCart(updatedCart);
  };

  return (
    <>
      <Navbar cartCount={cartCount}></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleAddToCart={handleAddToCart}
              quantities={quantities}
              handleQuantityChange={handleQuantityChange}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
              handleUpdateQuantity={handleUpdateQuantity}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
