import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const ProductsList = () => {
  const [components, setComponents] = useState([]);
  const [products, setProducts] = useState([])
  const [addComponents, setAddComponents] = useState([])

  useEffect(() => {
    axios
      .get("https://finalproject-team3.herokuapp.com/api/components")
      .then((response) => {
        setComponents(response.data);
        console.log(components)
      });
  }, []);

    const handleAddComponent = () => {
         
    }

    const handleAddFormChange = () => {

    }


  return (
    <div>
      <h2> Add a Product</h2>
      <form> 
      <form >
        <input
          type="text"
          name="component"
          required="required"
          placeholder="Enter Product name"
         
        />
        <br />
        <form onSubmit={handleAddComponent}>
         <select>
        {components.map((component) => {
          return <option value={component.component} key={component._id} onChange={handleAddFormChange} >
            {component.component}
          </option>
        })}
        </select>
        <input
          type="number"
          name="Quantity"
          required="required"
          placeholder="Quantity"
          onChange={handleAddFormChange}
         />
         <button type="submit">Add Component</button>
         <br />
        </form>
        <button type="submit">Add Product</button>
      </form>
      </form>
    </div>
  );
};

export default ProductsList;
