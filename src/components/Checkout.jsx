import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Checkout({
  cart,
  handleRemoveFromCart,
  handleUpdateQuantity,
}) {
  const [updatingItemId, setUpdatingItemId] = useState(null);
  const [tempQuantities, setTempQuantities] = useState({});

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleStartUpdate = (itemId, currentQuantity) => {
    setUpdatingItemId(itemId);
    setTempQuantities({ ...tempQuantities, [itemId]: currentQuantity });
  };

  const handleChange = (itemId, value) => {
    setTempQuantities({ ...tempQuantities, [itemId]: Number(value) });
  };

  const handleSave = (itemId) => {
    const newQuantity = tempQuantities[itemId];
    if (newQuantity > 0) {
      handleUpdateQuantity(itemId, newQuantity);
    }
    setUpdatingItemId(null);
  };

  return (
    <div className="checkout-content">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <div className="checkout-list">
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <div>
                <img src={item.image} alt={item.name} width={50} />
                <div className="checkout-details">
                  <h4>{item.name}</h4>
                  <p>Preço unitário: R$ {item.price.toFixed(2)}</p>
                  <div className="checkout-quantity-container">
                    {updatingItemId === item.id ? (
                      <>
                        <label>
                          Quantidade:
                          <input
                            type="number"
                            value={tempQuantities[item.id]}
                            min="1"
                            onChange={(e) =>
                              handleChange(item.id, e.target.value)
                            }
                          />
                        </label>
                        <button onClick={() => handleSave(item.id)}>
                          Salvar
                        </button>
                      </>
                    ) : (
                      <>
                        <p>Quantidade: {item.quantity}</p>
                        <button
                          onClick={() =>
                            handleStartUpdate(item.id, item.quantity)
                          }
                        >
                          Atualizar
                        </button>
                      </>
                    )}
                  </div>
                  <p>Total: R$ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
              <button
                className="btn-remove"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remover
              </button>
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
