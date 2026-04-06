import { Link } from "react-router-dom";

function Orders({ orderList }) {
  const amounts = orderList.map((order) => order.price);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {orderList.map((order) => (
          <li key={order.id}>
            {order.title} <span>{order.price}</span>
          </li>
        ))}
      </ul>
      <h3 className="cart-total">{total}</h3>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Orders;
