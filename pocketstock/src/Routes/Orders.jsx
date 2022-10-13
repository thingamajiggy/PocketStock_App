import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleOrder from "../Components/SingleOrder";
import { deleteOrder, getOrders, postOrder } from "../util/api"


const Orders = () => {
  const products = [{id: 1, item: 'table', table_leg: 4}, {id: 2, item: 'sofa', swallow: 6}, {id:3, item: 'bed', table_panel: 2}];
  
  const [quantity, setQuantity] = useState('');
  const [product, setProduct] = useState('')
  const [orders, setOrders] = useState([]);
  const [deleteInfo, setDeleteInfo] = useState(false)

 
  useEffect(() => {
    getOrders().then((data) => {
      setOrders(data);
    })
  }, [])

    const handleChange = (e) => {
          setProduct(e.target.value)
    }

    const handleSubmit = (e) => {
          e.preventDefault();
          const orderbody = {
            product: product,
            quantity: quantity
          }
          // postOrder(orderbody)
          // .then((data) => {
          //   setOrders((currOrders) => {
          //     return [data.data, ...currOrders]
          //   })
          // })
    axios.post('https://finalproject-team3.herokuapp.com/api/order',
     orderbody).then((data) => {
     setOrders((currOrders) => {
        return [data.data, ...currOrders]
      })
    })
    setQuantity('')
    }


  return (
    <>
    <section>
      <h3>Add order</h3>
      <form onSubmit={(e) => {handleSubmit(e)}} > 
        <select onChange={handleChange} id="product-add" >
        {products.map((product) => {
          return <option value={product.item} key={product.item} >
            {product.item}
          </option>
        })}
        </select>
        <input  required="required" placeholder="Enter quantity" value={quantity} type='text' pattern="[0-9]*"
          onChange={(event) => {setQuantity(event.target.value)}} />
        <button type="submit" >Confirm</button>
      </form>
    </section>
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
         <SingleOrder key={order._id} order={order} setDeleteInfo={setDeleteInfo}/>
         ))}
        </tbody>
      </table>
      <p>{deleteInfo ? 'Order deleted!' : ''}</p>
    </div>
    </>
  )


};
export default Orders;
