import React from "react";
import axios from "axios";

const ProductCard = ({product, setProducts}) => {

    const handleDelete = (e, product) => {
        e.preventDefault(); 
        setProducts((currProducts) => {
          return currProducts.filter((products) => product._id !== products._id)
        })
        axios.delete(
          `https://super-pocket-stock.herokuapp.com/api/products/${product._id}`
        )   
      };

    return (
        <div>
       {product.productName}
       <ul>
        <p>Components:</p>
        {product.components.map((component) => {
            return <li key={component._id}>{component.component} <strong>quantity:</strong> {component.quantity}</li>
        })}
       </ul>
       <button onClick={(e) => handleDelete(e, product)}> Delete</button>
       </div>
    )
}

export default ProductCard;