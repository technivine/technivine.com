

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24 bg-gray-50">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white py-4 shadow-md">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="/" className="text-xl font-bold">Company Name</a>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-gray-300">Home</a></li>
            <li><a href="/about" className="hover:text-gray-300">About</a></li>
            <li><a href="/services" className="hover:text-gray-300">Services</a></li>
            <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <section className="relative text-center mt-10">
        {/* Decorative Backgrounds */}
        <div className="absolute inset-0 z-0 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]" />
        
        <div className="relative z-10">
          <p className="text-2xl font-semibold text-gray-800 dark:text-white">Coming soon ⏳...</p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Sedang Sibuk Kerja Kontraktor dan Container, Besok Baru gas ga si ges duh lama amayyy!!❤️
          </p>
        </div>
      </section>

      {/* Credits Section */}
      <div className="relative text-center mt-6">
        <p className="text-gray-600 dark:text-gray-300">by: maspimen &amp; og</p>
      </div>

      {/* Footer */}
      <footer className="w-full bg-blue-600 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Perusahaan Kami. All Rights Reserved.</p>
          <p className="text-sm">
            Follow us on{" "}
            <a href="https://twitter.com" className="underline" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>{" "}
            and{" "}
            <a href="https://facebook.com" className="underline" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
};

