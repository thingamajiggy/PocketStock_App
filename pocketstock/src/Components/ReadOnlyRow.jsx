import React from "react";

const ReadOnlyRow = ({ component, handleEditClick }) => {
    return (

              <tr>
                <td>{component.component}</td>
                <td>{component.stockLevel}</td>
                <td>{component.triggerPoint}</td>
                <td>
                    <button type='button' onClick={(event) => handleEditClick(event, component)}>Edit</button>
                </td>
              </tr>
    )
}

export default ReadOnlyRow