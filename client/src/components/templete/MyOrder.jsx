// import React from "react";

// const MyOrder = () => {
//   return <div>MyOrder hgfhgfhgfhfgfhfg</div>;
// };

// export default MyOrder;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch user's orders from the API
        axios.get('http://localhost:4000/api/orders')
            .then(res => {
                setOrders(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to fetch orders.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">My Orders</h2>
            {orders.length === 0 ? (
                <p>You have no orders yet.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {orders.map(order => (
                        <div key={order._id} className="border p-4 rounded shadow">
                            <h3 className="text-xl font-semibold">Order #{order._id}</h3>
                            <p><strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>
                            <p><strong>Total:</strong> ₹{order.totalPrice}</p>
                            <p><strong>Status:</strong> {order.status}</p>
                            <ul className="mt-2">
                                {order.items.map(item => (
                                    <li key={item.productId}>
                                        {item.name} - ₹{item.price} x {item.quantity}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyOrders;
