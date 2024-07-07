import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-8">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h1 className="text-3xl font-times">Caravan Dire Hotel</h1>
          </div>
          <div>
      <h2 className="text-2xl font-times">About Us</h2>
      <p className="mt-4 font-times text-gray-200">
        Welcome to Caravan Dire! We specialize in providing high-quality caravan products and services.
      </p>
      <br /><br />
      <h2 className="font-times text-lg">Who built this website?</h2>
      <div className="font-times text-gray-200">
        <div className="flex items-center">
          <a href="https://www.linkedin.com/in/mety-million29/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center">
            Mety Million <FaLinkedin className="ml-2" />
          </a>
        </div>
        <div className="flex items-center mt-2">
          <a href="https://www.linkedin.com/in/kidus-mikael-877b63235/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center">
            Kidus Mikael <FaLinkedin className="ml-2" />
          </a>
        </div>
      </div>
    </div>

          <div>
            <h2 className="text-2xl font-times">Resources</h2>
            <ul className="mt-4 space-y-2 text-gray-200">
              <li><a href="/services" className="hover:text-white font-times">Services</a></li>
              <li><a href="/menu" className="hover:text-white font-times">Menu</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-times">Contact Us</h2>
            <ul className="mt-4 space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-white font-times">About Us</a></li>
              <li><a href="/contact" className="hover:text-white font-times">Contact</a></li>
              <li><a href="/contact" className="hover:text-white font-times">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div className="mt-8 border-t border-gray-700 pt-4 flex justify-center items-center">
            <p className="text-gray-200 text-center font-times">
              CopyRight©Caravan Dire. All Rights Reserved
              
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
