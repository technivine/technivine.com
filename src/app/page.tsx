import React from "react";
import Header from "./header"; 

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <Header />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <h2 className="text-lg font-bold mb-4">Sidebar Menu</h2>
          <ul className="space-y-2">
            <li><a href="#dashboard" className="block hover:bg-gray-700 p-2 rounded">Dashboard</a></li>
            <li><a href="#projects" className="block hover:bg-gray-700 p-2 rounded">Projects</a></li>
            <li><a href="#settings" className="block hover:bg-gray-700 p-2 rounded">Settings</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-8">
          <div className="relative text-center mb-8">
            <p className="text-2xl font-bold">Coming soon ⏳...</p>
            <p className="mt-4">
              Sedang Sibuk Kerja Kontraktor dan Container, Besok Baru gas ga si ges duh lama amay!!❤️
            </p>
          </div>
          <div className="relative text-center">
            <p>by: maspimen &amp; og</p>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 My Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
