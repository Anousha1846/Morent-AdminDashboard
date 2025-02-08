import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "d5y0w0t2", // Your Project ID
  dataset: "production",
  useCdn: false, // Use true for faster responses (caching)
  apiVersion: "2024-02-07",
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN, // Add this in .env.local
});

export async function getOrders() {
  return await sanityClient.fetch(`*[_type == "order"]{ _id, customerName, carDetails }`);
}

export async function deleteOrder(orderId: string) {
  return await sanityClient.delete(orderId);
}
