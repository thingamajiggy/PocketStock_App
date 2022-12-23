import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import SingleOrder from "../Components/SingleOrder";
import "../StyleSheets/Orders.css";
import { ComponentsContext } from "../Contexts/components";

const Orders = ({ orders, setOrders, setSubmitting }) => {
  const [quantity, setQuantity] = useState("");
  const [product, setProduct] = useState("");
  const [products, setProducts] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const { components } = useContext(ComponentsContext);

  useEffect(() => {
    axios
      .get("https://pocketstock-app.herokuapp.com/api/products")
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  const handleChange = (e) => {
    setDisabled(false);
    let obj = JSON.parse(e.target.value);
    setProduct(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderbody = {
      product: product.productName,
      quantity: quantity,
    };
    axios
      .post("https://pocketstock-app.herokuapp.com/api/orders", orderbody)
      .then((data) => {
        setOrders((currOrders) => {
          return [data.data, ...currOrders];
        });
      });
    product.components.forEach((component) => {
      let id = component.componentId;
      let newQty = component.quantity * quantity;
      let item = components.filter((component) => {
        return id === component._id;
      });
      let stockLevel = item[0].stockLevel - newQty;
      axios
        .patch(`https://pocketstock-app.herokuapp.com/api/components/${id}`, {
          stockLevel: stockLevel,
        })
        .then((response) => {});
    });
    setQuantity("");
    setSubmitting(true);
  };

  return (
    <>
      <div className="orders">
        <h1> Orders </h1>
        <div className="test6">
          <section className="test2">
            <h3 className="test4">Add Order</h3>
            <div class="line-1"></div>
            <form
              className="test"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <select
                onChange={handleChange}
                id="product-add"
                defaultValue="Select Product"
              >
                <option disabled>Select Product</option>
                {products.map((product) => {
                  return (
                    <option value={JSON.stringify(product)} key={product._id}>
                      {product.productName}
                    </option>
                  );
                })}
              </select>
              <input
                required="required"
                placeholder="Enter quantity"
                value={quantity}
                type="text"
                pattern="[0-9]*"
                onChange={(event) => {
                  setQuantity(event.target.value);
                }}
              />
              <button type="submit" disabled={disabled}>
                Confirm
              </button>
            </form>
          </section>
          <div className="test3">
            <h3 className="test4"> Order Description </h3>
            <div class="line-1"></div>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <SingleOrder
                    key={order._id}
                    order={order}
                    setOrders={setOrders}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Orders;
