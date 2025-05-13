import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [cartCount, setCartCount] = useState(() => {
    const storedCount = localStorage.getItem("cartCount");
    return storedCount ? JSON.parse(storedCount) : 0;
  });
  const [quantities, setQuantities] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartCount", JSON.stringify(cartCount));
  }, [cart, cartCount]);

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

    setMessage(`${product.name} adicionado ao carrinho com sucesso!`);
    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const handleQuantityChange = (productId, value) => {
    setQuantities({ ...quantities, [productId]: Number(value) });
  };

  const handleRemoveFromCart = (productId) => {
    const itemToRemove = cart.find((item) => item.id === productId);

    if (!itemToRemove) return;

    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);

    setCartCount(cartCount - itemToRemove.quantity);
  };

  const handleUpdateQuantity = (productId, value) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: Number(value) } : item
    );
    setCart(updatedCart);
    setCartCount(updatedCart.reduce((acc, item) => acc + item.quantity, 0));
  };

  return (
    <>
      <Navbar cartCount={cartCount} message={message}></Navbar>
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
