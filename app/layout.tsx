// app/layout.tsx
import "app/globals.css";
import { ReactNode } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div>
          <header className="bg-blue-600 text-white p-4">
            <nav className="container mx-auto flex justify-between">
              <div className="text-lg font-bold">TDAC</div>
              <ul className="flex space-x-4">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>
          <main className="container mx-auto p-4">
            {children}
          </main>
          <footer className="bg-gray-800 text-white p-4 text-center">
            &copy; {new Date().getFullYear()} That Disability Adventure Company
          </footer>
        </div>
      </body>
    </html>
  );
}