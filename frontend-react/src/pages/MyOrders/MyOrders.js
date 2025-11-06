import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/frontend_assets/assets';
const MyOrders = () => {

    const [data, setData] = useState([]);
    const { url, token } = useContext(StoreContext);

    const fetchOrders = async () => {
        const response = await axios.post(url + '/api/order/userorders', {}, { headers: { token } });
        setData(response.data.data);
        console.log(response.data.data)
    }

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token])

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className='container'>
                {
                    data.map((order, index) => {
                        return (
                            <div className='my-orders-order' key={index}>
                                <img src={assets.parcel_icon} alt='' />
                                <p>{order.items.map((item, index) => {
                                    if (index === order.items.length - 1) {
                                        return item.name + " X " + item.quantity
                                    }
                                    else {
                                        return item.name + " X " + item.quantity + ", "
                                    }
                                })}</p>
                                <p>${order.amount}.00</p>
                                <p>Items: {order.items.length} </p>
                                <p><span>&#x25cf;</span> {order.status} </p>
                                <button onClick={fetchOrders}>track Order</button>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default MyOrders
