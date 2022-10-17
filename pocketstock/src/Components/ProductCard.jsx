import React from "react";
import axios from "axios";

const ProductCard = ({product}) => {

    const handleDelete = (e, product) => {
        e.preventDefault();
        console.log(product._id);
        axios.delete(
          `https://finalproject-team3.herokuapp.com/api/product/${product._id}`
        );
      };

    return (
        <div>
       {product.productName}
       <ul>
        <p>Components:</p>
        {product.components.map((component) => {
            return <li>{component.component} <strong>quantity:</strong> {component.quantity}</li>
        })}
       </ul>
       <button onClick={(e) => handleDelete(e, product)}> Delete</button>
       </div>
    )
}

export default ProductCard;