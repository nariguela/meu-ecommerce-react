import React from "react";

import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Loja</h1>
      </div>
      <div className="navbar-cart">
        <div className="cart-icon">
          <FaShoppingCart size={24} />
        </div>
        <p className="cart-count">{cartCount}</p>
      </div>
    </nav>
  );
}
