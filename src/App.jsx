import { useState, useEffect } from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Orders from "./components/Orders";
import "./App.css";

/*
List products with api
Order them
Make a cart
Fill cart with products
Display total price and products
*/

function App() {
  const [product, setProduct] = useState("");
  const [productList, setProductList] = useState([]);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    const url = "https://fakeapi.net/products";
    const fetchProducts = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setProductList(result.data);
        console.log(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route
              index
              element={
                <Products
                  productList={productList}
                  setOrderList={setOrderList}
                />
              }
            />
            <Route path="orders" element={<Orders orderList={orderList} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
