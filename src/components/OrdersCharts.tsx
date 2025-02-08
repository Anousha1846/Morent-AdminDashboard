"use client";

import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface Order {
  pickupDate: string;
}

const OrdersChart = () => {
  const [chartData, setChartData] = useState<{ date: string; count: number }[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await fetch("/api/orders");
      const orders: Order[] = await res.json();

      if (!orders.length) {
        setChartData([]);
        return;
      }

      const orderCounts: Record<string, number> = {};
      orders.forEach(order => {
        const date = new Date(order.pickupDate).toISOString().split("T")[0];
        orderCounts[date] = (orderCounts[date] || 0) + 1;
      });

      const formattedData = Object.entries(orderCounts).map(([date, count]) => ({ date, count }));
      setChartData(formattedData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 30000); // Refresh every 30 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-100 p-4 my-8 shadow-md rounded-sm">
      <h2 className="text-xl font-bold mb-8 text-blue-700">Orders Over Time</h2>

      {loading ? (
        <p className="text-gray-500">Loading data...</p>
      ) : chartData.length === 0 ? (
        <p className="text-gray-500">No orders placed yet.</p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="count" stroke="#007bff" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default OrdersChart;
