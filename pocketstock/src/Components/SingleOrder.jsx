import axios from "axios";
import { useState } from "react";

 const SingleOrder = ({order, setDeleteInfo}) => {

    const [buttonDisable, setButtonDisable] = useState(false);
 

    const handleDelete = (orderId) => {
        // const newOrders = [...orders];
        // const index = orders.findIndex((order) => order.id === orderId);
        // newOrders.splice(index, 1);
        // setOrders(newOrders);
       
        setButtonDisable(true);
        setDeleteInfo(true)
        axios.delete(`https://super-pocket-stock.herokuapp.com/api/orders/${orderId}`)
        .then(() => {})
      }

    return (
        <>
        <tr >
           <td>{order.product}</td>
           <td>{order.quantity}</td>
           <td><button type="button" disabled={buttonDisable} onClick={() => {handleDelete(order._id)}} >delete</button></td>
         </tr>
        
        </>   
    )
}

export default SingleOrder;