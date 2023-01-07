import React from "react";
import { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import axios from "axios";
import { useRef } from "react";
import "../StyleSheets/ComponentsList.css";

const ComponentsList = ({ setPatching }) => {
  const [components, setComponents] = useState([]);
  const [addComponent, setAddComponent] = useState({
    component: "",
    stockLevel: "",
    triggerPoint: "",
  });
  const [editFormData, SetEditFormData] = useState({
    component: "",
    stockLevel: "",
    triggerPoint: "",
  });
  const [editComponent_id, setEditComponent_id] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  let formRef = useRef();

  useEffect(() => {
    axios
      .get("https://pocketstock-app.herokuapp.com/api/components")
      .then((response) => {
        setComponents(response.data);
        setSubmitting(false);
      });
  }, [submitting]);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addComponent };
    newFormData[fieldName] = fieldValue;
    setAddComponent(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    SetEditFormData(newFormData);
  };

  const handleEditClick = (event, component) => {
    event.preventDefault();
    setEditComponent_id(component._id);

    const formValues = {
      component: component.component,
      stockLevel: component.stockLevel,
      triggerPoint: component.triggerPoint,
    };

    SetEditFormData(formValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComponent = {
      _id: nanoid(),
      component: addComponent.component,
      stockLevel: addComponent.stockLevel,
      triggerPoint: addComponent.triggerPoint,
    };
    axios.post("https://pocketstock-app.herokuapp.com/api/components", {
      component: newComponent.component,
      stockLevel: newComponent.stockLevel,
      triggerPoint: newComponent.triggerPoint,
    });

    formRef.current.reset();
    setSubmitting(true);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedComponent = {
      _id: editComponent_id,
      component: editFormData.component,
      stockLevel: editFormData.stockLevel,
      triggerPoint: editFormData.triggerPoint,
    };

    axios
      .patch(
        `https://pocketstock-app.herokuapp.com/api/components/${editComponent_id}`,
        {
          component: editedComponent.component,
          stockLevel: editedComponent.stockLevel,
          triggerPoint: editedComponent.triggerPoint,
        }
      )
      .then(() => {
        setPatching(true);
      });

    const newComponents = [...components];
    const index = components.findIndex(
      (component) => component._id === editComponent_id
    );

    newComponents[index] = editedComponent;
    setComponents(newComponents);
    setEditComponent_id(null);
  };

  const handleCancelClick = () => {
    setEditComponent_id(null);
  };

  const handleDeleteClick = () => {
    setComponents((currComponents) =>
      currComponents.filter((component) => component._id !== editComponent_id)
    );
    axios.delete(
      `https://pocketstock-app.herokuapp.com/api/components/${editComponent_id}`
    );
  };

  return (
    <div className="components-section">
      <div className="components-table">
        <form onSubmit={handleEditFormSubmit} className="tablecontents">
          <table className="table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Stock Level</th>
                <th>Trigger Point</th>
                <th>Manage Component</th>
              </tr>
            </thead>
            <tbody>
              {components.map((component) => {
                return (
                  <Fragment>
                    {editComponent_id === component._id ? (
                      <EditableRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                        handleDeleteClick={handleDeleteClick}
                      />
                    ) : (
                      <ReadOnlyRow
                        component={component}
                        handleEditClick={handleEditClick}
                      />
                    )}
                  </Fragment>
                );
              })}
            </tbody>
          </table>
        </form>

        <div className="addnewcomponent">
          <h3 className="componenttitle">Add New Component</h3>
          <div className="formcomponent">
            <form className="formdesign" onSubmit={handleSubmit} ref={formRef}>
              <input
                className="inputdesign"
                type="text"
                name="component"
                required="required"
                placeholder="Enter component name"
                onChange={handleAddFormChange}
              />
              <input
                className="inputdesign"
                type="number"
                name="stockLevel"
                required="required"
                placeholder="Enter stock level"
                onChange={handleAddFormChange}
              />
              <input
                className="inputdesign"
                type="number"
                name="triggerPoint"
                required="required"
                placeholder="Enter trigger point"
                onChange={handleAddFormChange}
              />
              <button className="addbutton" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ComponentsList;
