"use client";

import { useEffect, useState } from "react";
import { FaShoppingCart, FaClock, FaMapMarkerAlt } from "react-icons/fa";

interface Order {
  pickupTime: string;
  city: string;
}

const DashboardCards = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [cityCounts, setCityCounts] = useState<Record<string, number>>({});
  const [peakBookingHour, setPeakBookingHour] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("/api/orders");
      const data: Order[] = await res.json();
      setOrders(data);

      // Count city bookings
      const cityCounter: Record<string, number> = {};
      data.forEach((order) => {
        cityCounter[order.city] = (cityCounter[order.city] || 0) + 1;
      });
      setCityCounts(cityCounter);

      // Find peak booking hour
      const hourCounts: Record<string, number> = {};
      data.forEach((order) => {
        const hour = order.pickupTime.split(":")[0]; // Extract hour
        hourCounts[hour] = (hourCounts[hour] || 0) + 1;
      });

      const peakHour = Object.entries(hourCounts).sort((a, b) => b[1] - a[1])[0]?.[0];
      setPeakBookingHour(peakHour ? `${peakHour}:00 - ${parseInt(peakHour) + 1}:00` : "N/A");
    };

    fetchOrders();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-4">
      {/* Total Orders */}
      <div className="bg-white shadow-md border rounded-sm p-4 flex items-center gap-4">
        <FaShoppingCart className="text-blue-700 text-3xl" />
        <div>
          <p className="text-gray-600 text-sm">Total Orders</p>
          <h3 className="text-xl font-bold">{orders.length}</h3>
        </div>
      </div>

      {/* Peak Booking Hours */}
      <div className="bg-white shadow-md border rounded-sm p-4 flex items-center gap-4">
        <FaClock className="text-blue-700 text-3xl" />
        <div>
          <p className="text-gray-600 text-sm">Peak Booking Hours</p>
          <h3 className="text-xl font-bold">{peakBookingHour}</h3>
        </div>
      </div>

      {/* Cities/Towns with Most Bookings */}
      <div className="bg-white shadow-md border rounded-sm p-4">
        <h2 className="text-lg font-bold mb-3 text-blue-600 flex items-center gap-2">
          <FaMapMarkerAlt /> Cities/Towns with Most Bookings
        </h2>
        <ul className="bg-gray-100 p-3 rounded-lg">
          {Object.entries(cityCounts)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5)
            .map(([city, count]) => (
              <li key={city} className="text-gray-800">
                {city}: {count} bookings
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardCards;
