import React from "react";

const ReadOnlyRow = ({ component, handleEditClick }) => {
  let classname = "";
  if (
    component.stockLevel < component.triggerPoint &&
    component.stockLevel > 0
  ) {
    classname = "outofstock";
  } else if (component.stockLevel < 0) {
    classname = "ordernow";
  }

  return (
    <tr className={classname}>
      <td>{component.component}</td>
      <td>{component.stockLevel}</td>
      <td>{component.triggerPoint}</td>
      <td>
        <button
          className="editcomponent"
          type="button"
          onClick={(event) => handleEditClick(event, component)}
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
