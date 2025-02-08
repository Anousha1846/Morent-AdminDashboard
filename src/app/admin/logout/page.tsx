"use client";

import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/admin/login");
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2">
      Logout
    </button>
  );
}
