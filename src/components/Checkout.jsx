import React from "react";
import { Link } from "react-router-dom";

export default function Checkout({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-content">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="checkout-list">
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <img src={item.image} alt={item.name} width={50} />
              <div className="checkout-details">
                <h4>{item.name}</h4>
                <p>Quantidade: {item.quantity}</p>
                <p>Preço unitário: R$ {item.price.toFixed(2)}</p>
                <p>Total: R$ {(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
          <hr />
          <h3>Total da compra: R$ {total.toFixed(2)}</h3>
          <div className="checkout-buttons">
            <Link to="/" className="btn-return">
              Voltar à Loja
            </Link>
            <button className="btn-purchase">Finalizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
}
