import React from "react";
import ComponentsList from "../Components/ComponentsList";
import Key from "../Components/Tablekey";
import "../StyleSheets/Inventory.css";

const Inventory = ({ setPatching }) => {
  return (
    <div className="inventoryPage">
      <Key />
      <ComponentsList className="components" setPatching={setPatching} />
    </div>
  );
};
export default Inventory;
