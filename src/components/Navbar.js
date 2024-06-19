import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-custom-blue text-white border-b-2 border-white">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Carivan Dire Hotel</h1>
          </div>
        </div>
        <div className="hidden md:flex flex-1 justify-end">
          <div className="flex space-x-6">
            <Link to="/" className="text-white px-3 py-2 rounded-md text-m font-medium hover:underline">Home</Link>
            <Link to="/rooms" className="text-white px-3 py-2 rounded-md text-m font-medium hover:underline">Rooms</Link>
            <Link to="/restaurant" className="text-white px-3 py-2 rounded-md text-m font-medium hover:underline">Restaurant</Link>
            <Link to="/services" className="text-white px-3 py-2 rounded-md text-m font-medium hover:underline">Services</Link>
            <Link to="/contact" className="text-white px-3 py-2 rounded-md text-m font-medium hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="bg-custom-blue text-white py-4 border-t-2 border-white px-6">
        <div className="flex justify-end items-center space-x-6">
          <Link to="/gallery" className="text-white px-3 py-2 rounded-md text-m font-medium hover:underline">Gallery</Link>
          <div className="flex items-center space-x-2">
            <span role="img" aria-label="phone">📞</span>
            <span className="text-m font-medium">09090909090</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
