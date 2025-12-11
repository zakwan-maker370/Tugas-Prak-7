import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
            </div>
            <span className="text-xl font-semibold text-blue-600">
              ruang
              <br />
              ekspresi
            </span>
          </div>
          <ul className="hidden md:flex gap-8 text-gray-700">
            <li>
              <a href="#home" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600 transition">
                About
              </a>
            </li>
            <li>
              <a href="#program" className="hover:text-blue-600 transition">
                Program
              </a>
            </li>
            <li>
              <a href="#project" className="hover:text-blue-600 transition">
                Project
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-blue-600 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
