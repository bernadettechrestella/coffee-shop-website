import React from "react";
import "./FeaturedProducts.css";

const FeaturedProducts = ({ products }) => (
  <section
    className="featured-products"
    aria-labelledby="featured-products-heading"
  >
    <h2 id="featured-products-heading">Featured Products</h2>
    <div className="featured-products-grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          role="article"
          aria-labelledby={`product-${product.id}`}
        >
          <img src={product.image} alt={product.name} />
          <h3 id={`product-${product.id}`}>{product.name}</h3>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedProducts;
