import React from "react";

import ComponentsList from "../Components/ComponentsList";
import '../StyleSheets/Inventory.css'


const Inventory = () => {
  return (
    <div className="inventoryPage">
      <h1>Inventory</h1>
      <ComponentsList className='components'/>
    </div>
  );
};
export default Inventory;
