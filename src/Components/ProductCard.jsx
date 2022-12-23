import React from "react";
import axios from "axios";
import "../StyleSheets/Products.css";

const ProductCard = ({ product, setProducts }) => {
  const handleDelete = (e, product) => {
    e.preventDefault();
    setProducts((currProducts) => {
      return currProducts.filter((products) => product._id !== products._id);
    });
    axios.delete(
      `https://pocketstock-app.herokuapp.com/api/products/${product._id}`
    );
  };

  return (
    <tr className="product 2">
      <td>{product.productName}</td>
      <td>
        <ul>
          {product.components.map((component) => {
            return (
              <li className="productlistitem">
                {component.component} || Quantity: {component.quantity}
              </li>
            );
          })}
        </ul>
      </td>
      <td>
        <button
          className="button-design"
          onClick={(e) => handleDelete(e, product)}
        >
          {" "}
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductCard;
