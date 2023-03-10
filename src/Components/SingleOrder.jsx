import axios from "axios";

const SingleOrder = ({ order, setOrders }) => {
  const handleDelete = (e, orderId) => {
    e.preventDefault();
    setOrders((currOrders) => {
      return currOrders.filter((order) => {
        return order._id !== orderId;
      });
    });
    axios.delete(`https://pocketstock-app.herokuapp.com/api/orders/${orderId}`);
  };

  return (
    <>
      <tr>
        <td>{order.product}</td>
        <td>{order.quantity}</td>
        <td>
          <button
            className="order-button"
            type="button"
            onClick={(e) => handleDelete(e, order._id)}
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default SingleOrder;
