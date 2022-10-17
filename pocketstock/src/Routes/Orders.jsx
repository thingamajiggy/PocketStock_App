import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleOrder from "../Components/SingleOrder";
import { deleteOrder, getOrders, postOrder } from "../util/api"


const Orders = () => {
 
  
  const [quantity, setQuantity] = useState('');
  const [product, setProduct] = useState('')
  const [orders, setOrders] = useState([]);
  const [deleteInfo, setDeleteInfo] = useState(false)
  const [products, setProducts] = useState([])
  const [disabled, setDisabled] = useState(true)
  const [components, setComponents] = useState([])

  useEffect(() => {
    axios
    .get("https://finalproject-team3.herokuapp.com/api/product")
    .then((response) => {
      setProducts(response.data);
    });
  },[])

  useEffect(() => {
    axios.get("https://finalproject-team3.herokuapp.com/api/components")
    .then((response) => setComponents(response.data))
  },[])
 
  useEffect(() => {
    getOrders().then((data) => {
      setOrders(data);
    })
  }, [])

    const handleChange = (e) => {
          setDisabled(false)
          let obj = JSON.parse(e.target.value);
          setProduct(obj)


    }

    const handleSubmit = (e) => {

          e.preventDefault();
          const orderbody = {
            product: product.productName,
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
    product.components.forEach((component) => {
      console.log(component)
     let id = component.componentId
     let newQty = component.quantity * quantity
     let item = components.filter((component) => {
      if(id === component._id){
        return component.stockLevel
      }})
      let stockLevel = item[0].stockLevel - newQty
      axios.patch(`https://finalproject-team3.herokuapp.com/api/components/${id}`, {
    stockLevel: stockLevel
})
.then((response) => {
  console.log(response)
})
    })


    setQuantity('')
    }


  return (
    <>
    <h1> Orders </h1>
    <section>
      <h3>Add order</h3>
      <form onSubmit={(e) => {handleSubmit(e)}} > 
        <select onChange={handleChange} id="product-add" >
        <option value="" disabled selected>
            Select Product
          </option>
        {products.map((product) => {
          return <option  value={JSON.stringify(product)} key={product._id} >
            {product.productName}
          </option>
        })}
        </select>
        <input  required="required" placeholder="Enter quantity" value={quantity} type='text' pattern="[0-9]*"
          onChange={(event) => {setQuantity(event.target.value)}} />
        <button type="submit" disabled={disabled} >Confirm</button>
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
