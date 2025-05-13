import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Loja</h1>
      </div>
      <div className="navbar-cart">
        <div className="cart-icon">
          <img src="https://via.placeholder.com/20" alt="Cart Icon" />
        </div>
        <p className="cart-count">0</p>
      </div>
    </nav>
  );
}
