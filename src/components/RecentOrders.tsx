//Show a sortable & filterable table of orders.
"use client";

import { useEffect, useState } from "react";

interface Order {
  customerName: string;
  carDetails: { name: string };
  pickupDate: string;
  dropoffDate: string;
  paymentMethod: string;
}

const RecentOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("/api/orders");
      const data = await res.json();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-xl text-blue-700 font-bold mb-2">Recent Bookings</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 text-left">Customer</th>
            {/* <th className="border p-2 text-left">Car</th> */}
            <th className="border p-2 text-left">Pickup Date</th>
            <th className="border p-2 text-left">Dropoff Date</th>
            <th className="border p-2 text-left">Payment</th>
          </tr>
        </thead>
        <tbody>
          {orders.slice(0, 5).map((order, index) => (
            <tr key={index} className="border-b">
              <td className="border p-2">{order.customerName}</td>
              {/* <td className="border p-2">{order.carDetails.name}</td> */}
              <td className="border p-2">{order.pickupDate}</td>
              <td className="border p-2">{order.dropoffDate}</td>
              <td className="border p-2">{order.paymentMethod}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
