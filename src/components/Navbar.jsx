import React from "react";
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

export default function Navbar({ cartCount, message }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h1>Loja</h1>
        </Link>
      </div>
      <div className="navbar-cart">
        {message && <div className="alert-message">{message}</div>}
        <Link to="/checkout" style={{ color: "white" }}>
          <FaShoppingCart size={24} className="cart-icon" />
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </nav>
  );
}
