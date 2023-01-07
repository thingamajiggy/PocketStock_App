import axios from "axios";
import React from "react";
import { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import "../StyleSheets/Products.css";
import { ComponentsContext } from "../Contexts/components";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [addComponents, setAddComponents] = useState([]);
  const [singleComponent, setSingleComponent] = useState("");
  const [quantity, setQuantity] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const { components } = useContext(ComponentsContext);

  useEffect(() => {
    axios
      .get("https://pocketstock-app.herokuapp.com/api/products")
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
      .post("https://pocketstock-app.herokuapp.com/api/products", body)
      .catch((err) => {});
    setNewProduct("");
    setAddComponents([]);
    setSubmitting(true);
  };

  return (
    <div className="product-1">
      <section className="tables">
        <h3 className="test4">Product Description</h3>
        <div className="line-1"></div>
        <div className="products-styled-table-container">
          <table className="products-styled-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Components</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => {
                return (
                  <ProductCard
                    product={product}
                    key={product._id}
                    setProducts={setProducts}
                  />
                );
              })}
            </tbody>
          </table>
        </div>

        <h3 className="test4">Add Components and Products</h3>
        <ul className="products-list-components">
          {addComponents.map((component) => {
            return (
              <li className="removebullet" key={component.component}>
                {" "}
                {component.component} {component.quantity}
              </li>
            );
          })}
        </ul>

        <form className="test" onSubmit={handleAddComponent}>
          <div className="selectdesign">
            <select
              className="selectwidth"
              onChange={handleSelect}
              defaultValue="Select Component"
            >
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
          </div>
          <input
            className="inputdesign1"
            type="number"
            required="required"
            placeholder="Quantity"
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
          <button
            className="addcomponentbutton"
            type="submit"
            disabled={disabled}
          >
            Add Component
          </button>
        </form>
        <div className="product-add">
          <input
            className="product-adder"
            type="text"
            onChange={(e) => {
              setNewProduct(e.target.value);
            }}
            required="required"
            placeholder="Enter Product name"
          />
          <button
            className="buttondesign"
            disabled={!singleComponent || !quantity}
            type="submit"
            onClick={handleSubmit}
          >
            Add Product
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductsList;
