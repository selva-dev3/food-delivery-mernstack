import { useEffect, useState } from 'react'
import React from 'react';
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets } from '../../assets/assets';
import './Orders.css'
const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);
  const fetchAllOrders = async (req, res) => {
    console.log('hiii')
    const response = await axios.get(url + '/api/order/list');
    if (response.data.success) {
      setOrders(response.data.data)
      console.log(response.data.data)
    } else {
      toast.error("error")
    }
  }
 const statusHandler = async (event,orderId) => {
  const response = await axios.post(url+ '/api/order/status',{orderId,status: event.target.value});
  if(response.data.success){
    await fetchAllOrders();
  }
 }
  useEffect(() => {
    fetchAllOrders();
  }, [])
  return (
    <div className='order'>
      <h3>Order Page</h3>
      <div className='order-list'>
        {orders.map((orders, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt='' />
            <div className='order-item-food'>
              <p className='order-item-food'>
                {orders.items.map((item, index) => {
                  if (index === orders.items.length - 1) {
                    return item.name + " X " + item.quantity
                  } else {
                    return item.name + " X " + item.quantity + ", "
                  }
                })}
              </p>
              <p className='order-item-name'>{orders.address.firstName + " " + orders.address.lastName}</p>
              <div className='order-item-address'>
                <p>{orders.address.street + ', '}</p>
                <p>{orders.address.city + ', ' + orders.address.state + ', ' + orders.address.country + ', ' + orders.address.zipcode}</p>
                </div>
                <p className='order-item-phone'>{orders.address.phone} </p>
            </div>
            <p>Item: {orders.items.length}</p>
            <p>${orders.amount}</p>
            <select onChange={(event) => statusHandler(event,orders._id)} value={orders.status}>
              <option value="Food Processing">Food Processing</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Orders
