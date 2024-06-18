import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-custom-blue text-white border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-lg font-bold">CARIVAN DIRE HOTEL</h1>
            </div>
            <div className="hidden md:flex flex-1 justify-center">
              <div className="flex space-x-4">
                <a href="#" className="text-white px-3 py-2 rounded-md text-m font-medium hover:underline">HOME</a>
                <a href="#" className="text-white px-3 py-2 rounded-md text-m font-medium hover:underline">ROOMS</a>
                <a href="#" className="text-white px-3 py-2 rounded-md text-m font-medium hover:underline">RESTURANT</a>
                <a href="#" className="text-white px-3 py-2 rounded-md text-m font-medium hover:underline">SERVICES</a>
                <a href="#" className="text-white px-3 py-2 rounded-md text-m font-medium hover:underline">CONTACT US</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="bg-custom-blue text-white py-2 border-t-2 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end">
          <div className="flex space-x-4">
            <div className="text-white px-3 py-2 rounded-md text-sm font-medium">Gallery</div>
            <div className="text-white px-3 py-2 rounded-md text-sm font-medium">📞 09090909090</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
