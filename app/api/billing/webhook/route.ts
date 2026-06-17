import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    console.log("[WEBHOOK RECEIVED]: Processing payment gateway notification metrics", payload);

    // Parse notification responses here (e.g., PayPal subscription approvals or M-Pesa transaction results)
    // Update customer subscription state to 'active' or 'cancelled' in your database.

    return NextResponse.json({ status: "Webhook event parsed successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to parse webhook notification stream" }, { status: 400 });
  }
}
