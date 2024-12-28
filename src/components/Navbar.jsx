import React, { useState } from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-dracula-background shadow-lg z-50">
      <div className="w-full p-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          className="font-bold typing-effect text-left text-sm md:text-lg lg:text-xl pl-0 ml-0"
          style={{ marginLeft: '0', paddingLeft: '0' }} // Tambahan gaya inline
        >
          <span className="text-dracula-keyword">from </span>
          <span className="text-white toni">toni </span>
          <span className="text-dracula-keyword">import </span>
          <span className="text-white portfolio">portfolio</span>
        </h1>

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-dracula-text hover:text-dracula-string"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navbar Links */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 md:static absolute top-16 left-0 w-full md:w-auto bg-dracula-background md:bg-transparent p-4 md:p-0`}
        >
          {['about', 'projects', 'journey', 'education', 'myblog'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)} // Menutup menu setelah link diklik
                className="block py-2 md:py-0 text-dracula-text hover:text-dracula-string"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
