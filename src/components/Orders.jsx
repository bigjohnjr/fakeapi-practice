import { Link } from "react-router-dom";

function Orders({ orderList, setOrderList }) {
  const amounts = orderList.map((order) => order.price);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  function deleteItem(order) {
    const updatedOrder = orderList.filter((o) => o.orderId !== order.orderId);
    setOrderList(updatedOrder);
  }

  return (
    <>
      <h2>Orders</h2>
      <ul>
        {orderList.map((order) => (
          <li key={order.orderId}>
            {order.title} <span>${order.price}</span>
            <button onClick={() => deleteItem(order)} className="delete-btn">
              X
            </button>
          </li>
        ))}
      </ul>
      <h3>Total</h3>
      <div>${total}</div>
      <Link to="/">Go back</Link>
    </>
  );
}

export default Orders;
