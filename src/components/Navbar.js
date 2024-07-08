import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-custom-blue text-white border-b-2 border-white">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-times">Caravan Dire Hotel</h1>
          </div>
        </div>
        <div className="hidden md:flex flex-1 justify-end">
          <div className="flex space-x-6">
            <NavLink
              exact
              to="/"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-lg font-times ${isActive ? 'underline' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/rooms"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-lg font-times ${isActive ? 'underline' : ''}`
              }
            >
              Rooms
            </NavLink>
            <NavLink
              to="/restaurant"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-lg font-times ${isActive ? 'underline' : ''}`
              }
            >
              Restaurant
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-lg font-times ${isActive ? 'underline' : ''}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-lg font-times ${isActive ? 'underline' : ''}`
              }
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `text-white px-3 py-2 rounded-md text-lg font-times ${isActive ? 'underline' : ''}`
              }
            >
              Admin
            </NavLink>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
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
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavLink
            exact
            to="/"
            className={({ isActive }) =>
              `block text-white px-3 py-2 rounded-md text-base font-times ${isActive ? 'underline' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              `block text-white px-3 py-2 rounded-md text-base font-times ${isActive ? 'underline' : ''}`
            }
          >
            Rooms
          </NavLink>
          <NavLink
            to="/restaurant"
            className={({ isActive }) =>
              `block text-white px-3 py-2 rounded-md text-base font-times ${isActive ? 'underline' : ''}`
            }
          >
            Restaurant
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block text-white px-3 py-2 rounded-md text-base font-times ${isActive ? 'underline' : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block text-white px-3 py-2 rounded-md text-base font-times ${isActive ? 'underline' : ''}`
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              `block text-white px-3 py-2 rounded-md text-base font-times ${isActive ? 'underline' : ''}`
            }
          >
            Admin
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `block text-white px-3 py-2 rounded-md text-base font-times ${isActive ? 'underline' : ''}`
            }
          >
            Gallery
          </NavLink>
          <div className="flex items-center space-x-2 mt-4">
            <span role="img" aria-label="phone">📞</span>
            <span className="text-lg font-times">09090909090</span>
          </div>
        </div>
      </div>
      <div className="bg-custom-blue text-white py-4 border-t-2 border-white px-6 hidden md:block">
        <div className="flex justify-end items-center space-x-6">
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-lg font-times ${isActive ? 'underline' : ''}`
            }
          >
            Gallery
          </NavLink>
          <div className="flex items-center space-x-2">
            <span role="img" aria-label="phone">📞</span>
            <span className="text-lg font-times">09090909090</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
