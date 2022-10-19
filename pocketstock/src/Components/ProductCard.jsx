import React from "react";
import axios from "axios";
import '../StyleSheets/Products.css'

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
          <tr>
            <td>{product.productName}</td>
            <td><ul>{product.components.map((component) => {return <li>{component.component} || Quantity: {component.quantity}</li>})}</ul></td>
            <td><button onClick={(e) => handleDelete(e, product)}> Delete</button></td>
          </tr>
       </div>
    )
}

export default ProductCard;