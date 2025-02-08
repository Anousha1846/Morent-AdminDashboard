const orderSchema = {
  name: "order",
  title: "Order",
  type: "document", // Use 'document' for top-level entries
  fields: [
    { name: "customerName", title: "Customer Name", type: "string" },
    { name: "phoneNumber", title: "Phone Number", type: "string" },
    { name: "town", title: "Town", type: "string" },
    { name: "city", title: "City", type: "string" },
    { name: "pickupLocation", title: "Pickup Location", type: "string" },
    { name: "pickupDate", title: "Pickup Date", type: "date" },
    { name: "pickupTime", title: "Pickup Time", type: "string" },
    { name: "dropoffLocation", title: "Dropoff Location", type: "string" },
    { name: "dropoffDate", title: "Dropoff Date", type: "date" },
    { name: "dropoffTime", title: "Dropoff Time", type: "string" },
    { name: "paymentMethod", title: "Payment Method", type: "string" },
    {
      name: "carDetails",
      title: "Car Details",
      type: "object",
      fields: [
        { name: "name", title: "Car Name", type: "string" },
        { name: "price", title: "Car Price", type: "string" },
        { name: "image", title: "Car Image", type: "url" },
      ],
    },
  ],
};

export default orderSchema; // ✅ Fix: Assigned to a variable before exporting
