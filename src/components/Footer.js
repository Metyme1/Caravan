// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div>
            <h1 className="text-lg font-bold">Carivan Dire Hotel</h1>
          </div>
          <div>
            <p>Contact Us</p>
            <p>+251 0909090909</p>
          </div>
        </div>
        <div className="mt-4">
          <p>Who Build this website</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
