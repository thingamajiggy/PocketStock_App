import React from "react";
import ComponentsList from "../Components/ComponentsList";
import Key from "../Components/Tablekey";
import '../StyleSheets/Inventory.css'


const Inventory = () => {

  return (
    <div className="inventoryPage">
      <Key />
      <ComponentsList className='components' />
    </div>
  );
};
export default Inventory;
