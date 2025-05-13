import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Loja</h1>
      </div>
      <div className="navbar-cart">
        <div className="cart-icon">
          <p>cart</p>
        </div>
        <p className="cart-count">0</p>
      </div>
    </nav>
  );
}
