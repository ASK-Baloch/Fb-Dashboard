import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export const metadata = {
  title: "Social Media Dashboard",
  description: "Manage your Facebook posts and groups easily.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <header className="bg-blue-600 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-lg font-bold">Social Media Dashboard</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
        <footer className="bg-gray-800 text-white py-4 mt-auto">
          <div className="max-w-7xl mx-auto px-4 text-center">
            © 2025 Social Media Dashboard. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
