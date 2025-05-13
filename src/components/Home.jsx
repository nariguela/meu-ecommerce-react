import React, { useState, useEffect } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Produtos:", data);
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
      <div className="main-content">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>R$ {product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
