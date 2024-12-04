import React from "react";

const Header = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="tel:08221243232432" className="hover:underline">Call Us</a></li>
          <li>
            <a 
              href="https://wa.me/6281333556337?text=Hi%2C%20Technivine." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a 
              href="mailto:firmanherda26@gmail.com?subject=Inquiry%20about%20Services&body=Hi%2C%20Technivine." 
              className="hover:underline"
            >
              Email Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
