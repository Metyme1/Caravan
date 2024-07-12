import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import restaurantImage from '../assets/res.JPG'; 
import special from '../assets/combo1.JPG'
import pizza from'../assets/pizza.JPG'
import burger from '../assets/burger.JPG'
import chicken from '../assets/chicken.JPG'
import club from '../assets/club.JPG'
import openair from '../assets/outdoor.JPG'; 

import diningImage2 from '../assets/res.JPG'; 
import roomdining from'../assets/sweet.JPG'
import cafeImage from'../assets/indoor2.JPG'



import guestImage1 from '../assets/room1.jpg'; 
import guestImage2 from '../assets/room2.jpg';
import guestImage3 from '../assets/r3.jpg';

const Restaurant = () => {


  const testimonials = [
    {
      quote: "I had an amazing stay at New Level Hotel. The staff was incredibly friendly and attentive, and the rooms were spacious and luxurious. The location was perfect, with easy access to nearby attractions. I would highly recommend this hotel to anyone visiting Diradawa.",
      name: "Emily Brown",
      image: guestImage1,
    },
    {
      quote: "The experience at the hotel was excellent. The rooms were clean, and the staff was very helpful. The amenities were top-notch. I will definitely stay here again.",
      name: "John Doe",
      image: guestImage2,
    },
    {
      quote: "Fantastic service and great location. The staff went above and beyond to make sure we had everything we needed. Highly recommended!",
      name: "Jane Smith",
      image: guestImage3,
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);




  return (
    <div className="bg-white min-h-screen">
    
      <div className="relative bg-white shadow-md overflow-hidden mb-8 w-screen">
        <img src={restaurantImage} alt="Restaurant" className="w-full h-160 object-cover"/>
      </div>
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div>
            <h2 className="text-2xl font-times text-gray-800 ">Dining</h2>
            <p className="text-gray-600 font-times">
            Come and enjoy our restaurant, where you can taste a variety of delicious dishes and drinks. We offer everything from local favorites to international cuisines. Our chefs carefully prepare each dish using fresh, seasonal ingredients to ensure that every meal is a delightful experience for our guests.

You can explore our menu and savor dishes crafted with care. Whether you're here for breakfast, lunch, or dinner, we aim to provide great food and a welcoming atmosphere. Our friendly staff is here to make sure you have a wonderful dining experience with us.

Join us to see why dining at our restaurant is more than just eating—it's about enjoying good food and great times with family and friends.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-times pt-8 pb-4 text-gray-800 mb-2">Dining areas</h2>
          <div className="bg-white overflow-hidden max-w-7xl px-4 mb-8 flex flex-wrap -mx-4 pt-8">
            <div className="w-full md:w-1/3 px-4 mb-8 transform transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img src={openair} alt="Open Air Dining" className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
                <div className="p-8">
                  <h3 className="text-2xl font-times mb-4">Open Air Dining</h3>
                  <p className="text-gray-600 font-times mb-4">
                    Experience the beauty of nature while enjoying your meal in our open-air dining area...
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-8 mb-8 transform transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img src={diningImage2} alt="Indoor Dining" className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
                <div className="p-8">
                  <h3 className="text-2xl font-times mb-4">Indoor Dining</h3>
                  <p className="text-gray-600 font-times mb-4">
                    Our indoor dining area offers a cozy and elegant setting for you to enjoy your meals...
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 transform transition-transform duration-300 hover:scale-105">
  <div className="relative">
    <img src={cafeImage} alt="Cafe" className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
    <div className="p-8">
      <h3 className="text-2xl font-times mb-4">Cafe</h3>
      <p className="text-gray-600 font-times mb-4">
        Enjoy a variety of delicious coffee, tea, and cakes served any time of the day or night...
      </p>
    </div>
  </div>
</div>

          </div>
        </div>
        <section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mt-8 bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src={roomdining} alt="Restaurant" className="w-full h-full object-cover" />
      </div>
      <div className="md:w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-3xl font-times text-gray-900 text-center mb-8">In-Room Dining</h2>
        <p className="text-gray-600 text-lg font-times mb-4">
          Enjoy a variety of delicious dishes and beverages right in the comfort of your room. From local favorites to international flavors, our chefs meticulously prepare each dish using fresh, seasonal ingredients to ensure a delightful dining experience for every guest.
        </p>
        <Link to="/restaurant">
          <button className="bg-custom-blue text-white font-times text-lg px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 w-48">Discover More</button>
        </Link>
      </div>
    </div>
  </div>
</section>

        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
            <h2 className="text-3xl font-times py-4 px-6 bg-custom-blue text-white rounded-t-lg">Popular Menu Items</h2>
            <div className="flex space-x-6 overflow-x-auto p-4" id="scroll-container">
              <div className="bg-white p-4 flex-shrink-0 w-72 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={special} alt="Menu Item" className="w-full h-40 object-cover mb-4 rounded-lg"/>
                <h3 className="text-xl font-times text-gray-900 mb-2">Special Combo</h3>
                <p className="text-gray-600 font-times">Description of the menu item.</p>
              </div>
              <div className="bg-white p-4 flex-shrink-0 w-72 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={chicken} alt="Menu Item" className="w-full h-40 object-cover mb-4 rounded-lg"/>
                <h3 className="text-xl font-times text-gray-900 mb-2">Mandi</h3>
                <p className="text-gray-600 font-times">Description of the menu item.</p>
              </div>
              <div className="bg-white p-4 flex-shrink-0 w-72 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={pizza} alt="Menu Item" className="w-full h-40 object-cover mb-4 rounded-lg"/>
                <h3 className="text-xl font-times text-gray-900 mb-2">Pizza</h3>
                <p className="text-gray-600 font-times">Description of the menu item.</p>
              </div>
              <div className="bg-white p-4 flex-shrink-0 w-72 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={burger} alt="Menu Item" className="w-full h-40 object-cover mb-4 rounded-lg"/>
                <h3 className="text-xl font-times text-gray-900 mb-2">Burger</h3>
                <p className="text-gray-600 font-times">Description of the menu item.</p>
              </div>
              <div className="bg-white p-4 flex-shrink-0 w-72 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={club} alt="Menu Item" className="w-full h-40 object-cover mb-4 rounded-lg"/>
                <h3 className="text-xl font-times text-gray-900 mb-2">Club Sandwich</h3>
                <p className="text-gray-600 font-times">Description of the menu item.</p>
              </div>
            </div>
            <div className="flex justify-center mt-6 mb-4">
              <Link to="/menu">
                <button className="bg-custom-blue text-white text-lg px-6 py-2 font-times rounded-full shadow-lg hover:bg-blue-900 transition duration-300">
                  View Full Menu
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-screen mb-10 bg-custom-blue py-4">
          <div className="container mx-auto text-center text-white px-4">
            <h2 className="text-2xl text font-times mb-6">Testimonials</h2>
            <h1 className="text-2xl font-times mb-6">What our clients Say?</h1>
            <div className="flex flex-col items-center mb-4 bg-custom-blue bg-opacity-50 p-6 rounded-lg max-w-4xl mx-auto">
              <div className="text-left mb-4">
                <div className="text-xl font-times mb-4">{testimonials[currentTestimonial].quote}</div>
              </div>
              <div className="flex items-center">
                <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} className="w-16 h-16 rounded-full mb-4 mr-4"/>
                <div className="text-left">
                  <div className="flex items-center">
                    <div className="text-lg font-semibold font-times">{testimonials[currentTestimonial].name}</div>
                  </div>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-500">★★★★☆</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 rounded-full ${index === currentTestimonial ? 'bg-white' : 'bg-gray-400'}`}
                  onClick={() => setCurrentTestimonial(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Restaurant;
