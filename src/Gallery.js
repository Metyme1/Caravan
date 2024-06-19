// src/Gallery.js
import React from 'react';
import room1 from './assets/room1.jpg';
import room2 from './assets/room2.jpg';
import room3 from './assets/r3.jpg';
import hotelView1 from './assets/v1.jpeg';
import hotelView2 from './assets/v2.jpeg';
import hotelView3 from './assets/v3.jpeg';
import dining1 from './assets/d1.jpeg';
import dining2 from './assets/d2.jpeg';
import dining3 from './assets/d3.jpeg';

const Gallery = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-custom-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold">Gallery</h1>
        </div>
      </header>
      <nav className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-6">
          <a href="#rooms" className="text-custom-blue font-medium hover:underline">Rooms</a>
          <a href="#hotelView" className="text-custom-blue font-medium hover:underline">Hotel View</a>
          <a href="#services" className="text-custom-blue font-medium hover:underline">Services</a>
          <a href="#dining" className="text-custom-blue font-medium hover:underline">Dining</a>
          <a href="#events" className="text-custom-blue font-medium hover:underline">Event and Meeting</a>
        </div>
      </nav>
      <section id="rooms" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={room1} alt="Room 1" className="w-full h-64 object-cover rounded-lg"/>
            <img src={room2} alt="Room 2" className="w-full h-64 object-cover rounded-lg"/>
            <img src={room3} alt="Room 3" className="w-full h-64 object-cover rounded-lg"/>
          </div>
        </div>
      </section>
      <section id="hotelView" className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Hotel View</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={hotelView1} alt="Hotel View 1" className="w-full h-64 object-cover rounded-lg"/>
            <img src={hotelView2} alt="Hotel View 2" className="w-full h-64 object-cover rounded-lg"/>
            <img src={hotelView3} alt="Hotel View 3" className="w-full h-64 object-cover rounded-lg"/>
          </div>
        </div>
      </section>
      <section id="services" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Services</h2>
          <p className="text-gray-600">Details about the services provided by the hotel can be placed here.</p>
        </div>
      </section>
      <section id="dining" className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Dining</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img src={dining1} alt="Dining 1" className="w-full h-64 object-cover rounded-lg"/>
            <img src={dining2} alt="Dining 2" className="w-full h-64 object-cover rounded-lg"/>
            <img src={dining3} alt="Dining 3" className="w-full h-64 object-cover rounded-lg"/>
          </div>
        </div>
      </section>
      <section id="events" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8">Event and Meeting</h2>
          <p className="text-gray-600">Details about events and meetings held at the hotel can be placed here.</p>
        </div>
      </section>
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
        </div>
      </footer>
    </div>
  );
}

export default Gallery;
