import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
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
      .get("https://finalproject-team3.herokuapp.com/api/components")
      .then((response) => {
        setComponents(response.data);
    
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://finalproject-team3.herokuapp.com/api/product")
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
    console.log(obj);

    setSingleComponent(obj);
  };
  // console.log(singleComponent)
  console.log(newProduct);
  console.log(addComponents);
  let body = {
    productName: newProduct,
    components: addComponents,
  };
  console.log(body);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://finalproject-team3.herokuapp.com/api/product", body)
      .catch((err) => {
        console.log(err);
      });
    setNewProduct("");
    setAddComponents([]);
    setSubmitting(true);
  };

  return (
    <div>
      <h1> Products </h1>
      <ul>
        {products.map((product) => {
          return (
           
              <ProductCard product={product}/>
          );
        })}
      </ul>
      <h2> Add a Product</h2>
      <ul>
        {addComponents.map((component) => {
          return (
            <li>
              {" "}
              {component.component} {component.quantity}
            </li>
          );
        })}
      </ul>

      <input
        type="text"
        onChange={(e) => {
          setNewProduct(e.target.value);
        }}
        required="required"
        placeholder="Enter Product name"
      />
      <br />
      <form onSubmit={handleAddComponent}>
        <select onChange={handleSelect}>
          <option value="" disabled selected>
            Select Component
          </option>
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
        <br />
      </form>
      <button type="submit" onClick={handleSubmit}>
        Add Product
      </button>
    </div>
  );
};

export default ProductsList;
