'use client';
import { signIn } from "next-auth/react";
import { FaFacebook } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Social Media Dashboard</h1>
        <button
          onClick={() => signIn("facebook")}
          className="bg-blue-600 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-blue-700"
        >
          <FaFacebook className="text-xl" />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
}
