import Link from "next/link";

export default function Home() {
  return (
<div>
<main className="flex flex-col gap-9 items-center justify-center min-h-screen w-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-700">Admin Pannel</h1>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800 transition">
  <Link href="/admin/login">Go To Admin Dashboard</Link>
</button>
    </main>
  
</div>
  );
}
