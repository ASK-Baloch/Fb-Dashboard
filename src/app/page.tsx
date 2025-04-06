'use client';

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to Social Media Dashboard</h1>
      <p className="text-lg mb-8 text-gray-700 text-center">
        Manage your Facebook posts and groups effortlessly.
      </p>
      <button
        onClick={() => router.push("/login")}
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
      >
        Get Started
      </button>
    </div>
  );
}
