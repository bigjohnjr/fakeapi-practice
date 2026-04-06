import { useState } from "react";
import { Link } from "react-router-dom";

function Products({ productList, setOrderList }) {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [productCount, setProductCount] = useState({});

  function handleSelectProduct(product) {
    const updatedList = productList.find((p) => p.id === product.id);
    setSelectedProducts((prev) => [...prev, updatedList]);
    setProductCount((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  }

  function handleAddToCart() {
    const withOrderIds = selectedProducts.map((p) => ({
      ...p,
      orderId: crypto.randomUUID(),
    }));
    setOrderList((prev) => [...prev, ...withOrderIds]);
    setSelectedProducts([]);
  }

  return (
    <>
      <h1>Product List</h1>
      <ul>
        {productList.map((product) => (
          <li
            className={
              selectedProducts.some((p) => p.id === product.id) ? "checked" : ""
            }
            onClick={() => handleSelectProduct(product)}
            key={product.id}
          >
            {product.title}
            {productCount[product.id] > 1 && (
              <span>{productCount[product.id]}</span>
            )}
          </li>
        ))}
      </ul>
      <button
        onClick={handleAddToCart}
        disabled={!selectedProducts.length}
        className="add-btn"
      >
        Add to Cart
      </button>
      <Link to="/orders">Go to orders</Link>
    </>
  );
}

export default Products;
