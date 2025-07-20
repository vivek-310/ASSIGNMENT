import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { label: 'HOME', path: '/' },
    { label: 'COLLECTION', path: '/' },
    { label: 'ABOUT', path: '/' },
    { label: 'CONTACT', path: '/' },
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-indigo-600">
            <NavLink to="/">Brand</NavLink>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex space-x-8 text-sm font-medium text-gray-700">
            {navItems.map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex flex-col items-center transition-all ${
                      isActive ? '' : ''
                    }`
                  }
                >
                  <span>{label}</span>
                  {/* Active underline */}
                  
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
