import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import '../StyleSheets/Products.css'

const ProductsList = () => {
  const [components, setComponents] = useState([]);
  const [products, setProducts] = useState([]);
  const [addComponents, setAddComponents] = useState([]);
  const [singleComponent, setSingleComponent] = useState("");
  const [quantity, setQuantity] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    axios
      .get("https://super-pocket-stock.herokuapp.com/api/components")
      .then((response) => {
        setComponents(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://super-pocket-stock.herokuapp.com/api/products")
      .then((response) => {
        setProducts(response.data);
        setSubmitting(false);
      });
  }, [submitting]);

  const handleAddComponent = (e) => {
    e.preventDefault();
    setAddComponents((currAddComents) => {
      return [
        ...currAddComents,
        {
          componentId: singleComponent._id,
          component: singleComponent.component,
          quantity: quantity,
        },
      ];
    });
  };

  const handleSelect = (e) => {
    let obj = JSON.parse(e.target.value);
    if (obj.componentId !== "undefined") {
      setDisabled(false);
    }
    setSingleComponent(obj);
  };
  let body = {
    productName: newProduct,
    components: addComponents,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://super-pocket-stock.herokuapp.com/api/products", body)
      .catch((err) => {});
    setNewProduct("");
    setAddComponents([]);
    setSubmitting(true);
  };

  return (
    <div>
      <table>
        <thread>
          <tr>
            <th>Product</th>
            <th>Components</th>
            <th>Action</th>
          </tr>
        </thread>
        <tbody>
        {products.map((product) => {
          return <ProductCard product={product} key={product._id} setProducts={setProducts} />;
        })}
        </tbody>
      </table>
      <h2> Add a Product</h2>
      <ul>
        {addComponents.map((component) => {
          return (
            <li key={component.component}>
              {" "}
              {component.component} {component.quantity}
            </li>
          );
        })}
      </ul>
      
      <div className="products-list-form">
      <input
        type="text"
        onChange={(e) => {
          setNewProduct(e.target.value);
        }}
        required="required"
        placeholder="Enter Product name"
      />
      <form onSubmit={handleAddComponent}>
        <select onChange={handleSelect} defaultValue="Select Component">
          <option disabled>Select Component</option>
          {components.map((component) => {
            return (
              <option
                value={JSON.stringify(component)}
                key={component._id}
                onChange={handleSelect}
                required="required"
              >
                {component.component}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          required="required"
          placeholder="Quantity"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
        />
        <button type="submit" disabled={disabled}>
          Add Component
        </button>
      </form>
      </div>
      
      <button type="submit" onClick={handleSubmit}>
        Add Product
      </button>
    </div>
  );
};

export default ProductsList;
