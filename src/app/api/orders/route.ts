import { NextResponse } from "next/server";
import { sanityClient } from "@/sanity/lib/sanity"; // Ensure correct import

export async function GET() {
  try {
    const query = `*[_type == "order"]`;
    const orders = await sanityClient.fetch(query);
    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error); // ✅ Logs error to avoid ESLint warning
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}
