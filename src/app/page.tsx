export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Website</h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

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
