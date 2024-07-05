// src/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-custom-blue text-white border-b-2 border-white">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-times">Carivan Dire Hotel</h1>
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
              to="/reservation" 
              className={({ isActive }) => 
                `text-white px-3 py-2 rounded-md text-lg font-times ${isActive ? 'underline' : ''}`
              }
            >
              Reservation
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
      </div>
      <div className="bg-custom-blue text-white py-4 border-t-2 border-white px-6">
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
