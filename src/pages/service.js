
import React from 'react';
import { Link } from 'react-router-dom'; 

import service1 from '../assets/twin1.JPG';
import service2 from '../assets/wifi.jpeg';
import service3 from '../assets/park.JPG';
import service4 from '../assets/meeting.jpeg';
import service5 from '../assets/res.jpg';

const services = [
  {
    id: 1,
    name: "Room Service",
    image: service1,
    description: "Enjoy 24/7 room service with a wide range of options to satisfy your hunger at any time.",
    link: "/rooms" 
  },
  {
    id: 2,
    name: "Restaurant",
    image: service5,
    description: "Experience our restaurant with a variety of delicious dishes and beverages.",
    link: "/restaurant" 
  },
  {
    id: 3,
    name: "Meeting Hall",
    image: service4,
    description: "Spacious meeting hall with facilities for tea breaks and lunch buffets as needed.",
    link: "/services/meeting-hall"
  },

  {
    id: 4,
    name: "Parking",
    image: service3,
    description: "Secure parking available for all guests with easy access to the hotel.",
    link: "/services/parking" 
  },

  {
    id: 5,
    name: "Internet",
    image: service2,
    description: "High-speed internet available throughout the hotel to keep you connected.",
    link: "/services/internet"
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-times text-gray-800">Discover Our Services</h1>
        </div>
      </header>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white shadow-md rounded-lg overflow-hidden mb-12 flex ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} 
              data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}
              style={{ height: '400px' }} // Adjust the height here
            >
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-1/2 h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-8 flex flex-col justify-between w-1/2">
                <div>
                  <h3 className="text-2xl font-semibold font-times text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-600 font-times mb-4">{service.description}</p>
                </div>
                <div className="text-right">
                  <Link 
                    to={service.link} 
                    className="bg-custom-blue text-white py-2 px-6 font-times hover:bg-blue-700 transition duration-300 text-center rounded-full inline-block"
                  >
                    View More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
