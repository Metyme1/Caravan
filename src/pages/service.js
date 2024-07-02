import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

import service1 from '../assets/room1.jpg'; // adjust the path as necessary
import service2 from '../assets/wifi.jpeg';
import service3 from '../assets/parking.jpg';
import service4 from '../assets/meeting.jpeg';
import service5 from '../assets/res.jpg';

const services = [
  {
    id: 1,
    name: "Room Service",
    image: service1,
    description: "Enjoy 24/7 room service with a wide range of options to satisfy your hunger at any time."
  },
  {
    id: 2,
    name: "Internet",
    image: service2,
    description: "High-speed internet available throughout the hotel to keep you connected."
  },
  {
    id: 3,
    name: "Parking",
    image: service3,
    description: "Secure parking available for all guests with easy access to the hotel."
  },
  {
    id: 4,
    name: "Meeting Hall",
    image: service4,
    description: "Spacious meeting hall with facilities for tea breaks and lunch buffets as needed."
  },
  {
    id: 5,
    name: "Restaurant",
    image: service5,
    description: "Experience our restaurant with a variety of delicious dishes and beverages."
  }
];

const Services = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-times">Discover Our Services</h1>
        </div>
      </header>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white shadow-md overflow-hidden mb-8 flex ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} 
              data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}
              style={{ height: '400px' }} // Adjust the height here
            >
              <img src={service.image} alt={service.name} className="w-1/2 h-full object-cover"/>
              <div className="p-4 flex flex-col justify-between w-1/2">
                <div>
                  <h3 className="text-2xl font-times mb-2">{service.name}</h3>
                  <p className="text-gray-600 font-times mb-4">{service.description}</p>
                </div>
                <Link 
                  to={`/services/${service.id}`} 
                  className="bg-custom-blue text-white py-2 px-6 hover:bg-blue-700 transition duration-300"
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
