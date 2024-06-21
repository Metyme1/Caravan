import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-blue text-white py-8">
      <div className="px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h1 className="text-3xl font-times">Carivan Dire Hotel</h1>
          
          </div>
          <div>
            <h2 className="text-2xl font-times">About Us</h2>
            <ul className="mt-4 space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-white font-times">About Us</a></li>
              <li><a href="#" className="hover:text-white font-times">Careers</a></li>
              <li><a href="#" className="hover:text-white font-times">Blog</a></li>
              <li><a href="#" className="hover:text-white font-times">Press Room</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-times">Resources</h2>
            <ul className="mt-4 space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-white font-times">Our Work</a></li>
              <li><a href="#" className="hover:text-white font-times">Services</a></li>
              <li><a href="#" className="hover:text-white font-times">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-times">Contact Us</h2>
            <ul className="mt-4 space-y-2 text-gray-200">
              <li><a href="#" className="hover:text-white font-times">About Us</a></li>
              <li><a href="#" className="hover:text-white font-times">Menu</a></li>
              <li><a href="#" className="hover:text-white font-times">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full">
  <div className="mt-8 border-t border-gray-700 pt-4 flex justify-center items-center">
    <p className="text-gray-200 text-center font-times">CopyRight©Carivan Dire. All Rights Reserved</p>
  </div>
</div>

      </div>
    </footer>
  );
}

export default Footer;
