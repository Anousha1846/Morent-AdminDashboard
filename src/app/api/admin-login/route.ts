import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const ADMIN_EMAIL = "admin@gmail.com";
const ADMIN_PASSWORD = "12345";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    cookies().set("admin_auth", "true", { httpOnly: true, secure: true });
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}
