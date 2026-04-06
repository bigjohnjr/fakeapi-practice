import { useState } from "react";
import { Link } from "react-router-dom";

function Products({ productList, setOrderList }) {
  const [selectedProducts, setSelectedProducts] = useState([]);

  function handleOnSelect(product) {
    const selected = productList.find((p) => p.id === product.id);
    setSelectedProducts([...selectedProducts, selected]);
  }

  function handleAddToCart() {
    setOrderList((prev) => [...prev, ...selectedProducts]);
    setSelectedProducts([]);
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {productList.map((product) => (
          <li
            className={
              selectedProducts.some((p) => p.id === product.id) ? "checked" : ""
            }
            onClick={() => handleOnSelect(product)}
            key={product.id}
          >
            {product.title}
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddToCart()} className="add-btn">
        Add to Cart
      </button>
      <Link to="/orders">Go to Orders</Link>
    </div>
  );
}

export default Products;
