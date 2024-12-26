import React from 'react';
import { Link } from 'react-scroll';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-dracula-background shadow-lg z-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold typing-effect">
        <span className="text-dracula-keyword">from </span>
        <span className="text-white toni">toni </span>
        <span className="text-dracula-keyword">import </span>
        <span className="text-white portfolio">portfolio</span>
      </h1>
        <ul className="flex space-x-6">
          {['about', 'projects', 'journey', 'education', 'myblog'].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-dracula-string text-dracula-text"
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
