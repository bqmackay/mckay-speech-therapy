import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mackay Speech Therapy",
  description: "Professional speech therapy services for children ages 0-18",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Mackay Speech Therapy
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
                  Home
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 transition">
                  Services
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-8 mt-20">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2">© 2024 Mackay Speech Therapy. All rights reserved.</p>
            <p className="text-gray-400">Helping children find their voice</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
