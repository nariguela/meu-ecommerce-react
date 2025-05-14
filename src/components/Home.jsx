import React, { useState, useEffect } from "react";

export default function Home({ handleAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (productId, value) => {
    setQuantities({ ...quantities, [productId]: Number(value) });
  };

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="page-content">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="page-content">
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <div>
              <p>R$ {product.price.toFixed(2)}</p>
              <select
                value={quantities[product.id] || 1}
                onChange={(e) =>
                  handleQuantityChange(product.id, e.target.value)
                }
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="btn-add-to-cart"
              onClick={() =>
                handleAddToCart({
                  ...product,
                  quantity: quantities[product.id] || 1,
                })
              }
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
