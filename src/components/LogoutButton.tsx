"use client";
import { SignOutButton } from "@clerk/nextjs";

export default function LogoutButton() {
  return (
    <SignOutButton>
      <button className="bg-blue-700 text-white px-4 py-2 rounded">
        Logout
      </button>
    </SignOutButton>
  );
}
