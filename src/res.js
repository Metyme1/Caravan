// src/Restaurant.js
import React from 'react';
import restaurantImage from './assets/res.jpg'; 
import { Link } from 'react-router-dom';

const Restaurant = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold">Restaurant</h1>
        </div>
      </header>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={restaurantImage} alt="Restaurant" className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
            <div className="p-8 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Dining In Room Available 24/7</h3>
                <p className="text-gray-600 mb-4">Enjoy a variety of delicious meals served to your room at any time of the day or night.</p>
              </div>
              <Link to="/menu" className="bg-custom-blue text-white px-4 py-2 rounded-md inline-block text-center">View Menu</Link>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}

export default Restaurant;
