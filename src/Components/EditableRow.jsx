import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleDeleteClick,
}) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          name="component"
          required="required"
          placeholder="Enter component name"
          onChange={handleEditFormChange}
          value={editFormData.component}
        />
      </td>
      <td>
        <input
          type="number"
          name="stockLevel"
          required="required"
          placeholder="Enter stock level"
          onChange={handleEditFormChange}
          value={editFormData.stockLevel}
        />
      </td>
      <td>
        <input
          type="number"
          name="triggerPoint"
          required="required"
          placeholder="Enter trigger point"
          onChange={handleEditFormChange}
          value={editFormData.triggerPoint}
        />
      </td>
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
        <button type="button" onClick={handleDeleteClick}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
