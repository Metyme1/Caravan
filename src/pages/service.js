import React from 'react';
import { Link } from 'react-router-dom'; 

import service1 from '../assets/sweet1.JPG';
import service2 from '../assets/wifi.jpeg';
import service3 from '../assets/park.JPG';
import service4 from '../assets/meeting.JPG';
import service5 from '../assets/res.JPG';

const services = [
  {
    id: 1,
    name: "Room Service",
    image: service1,
    description: "Enjoy 24/7 room service with a wide range of options to satisfy your hunger at any time. Whether it's a late-night snack or a full meal, our attentive staff ensures your dining needs are met with promptness and quality.",
    link: "/rooms" 
  },
  {
    id: 2,
    name: "Restaurant",
    image: service5,
    description: "Experience our restaurant with a variety of delicious dishes and beverages. From local specialties to international cuisines, our chefs craft each dish with care using fresh, seasonal ingredients to ensure a delightful dining experience for every guest.",
    link: "/restaurant" 
  },
  {
    id: 3,
    name: "Meeting Hall",
    image: service4,
    description: "Our spacious meeting hall is equipped with modern facilities to accommodate various events. Whether you're hosting a corporate meeting, seminar, or social gathering, we offer flexible setups, audiovisual equipment,. The hall can accommodate up to 361 people, with options for tea breaks and lunch buffets tailored to your event's needs.",
    link: "/meeting"
  },
  {
    id: 4,
    name: "Parking",
    image: service3,
    description: "Secure parking is available for all guests, ensuring peace of mind during your stay. Our well-lit and monitored parking area offers convenient access to the hotel, making it easy to unload your belongings and start your visit without hassle.",
    link: "/services/parking" 
  },
  {
    id: 5,
    name: "Internet",
    image: service2,
    description: "Stay connected with high-speed internet available throughout the hotel. Whether you're catching up on work, streaming your favorite shows, or staying in touch with loved ones, our reliable internet service ensures seamless connectivity during your stay.",
    link: "/services/internet"
  },
];

const Services = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold font-times text-gray-800">Discover Our Services</h1>
        </div>
      </header>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-white shadow-md rounded-lg overflow-hidden mb-12 flex flex-col sm:flex-row ${index % 2 === 0 ? '' : 'sm:flex-row-reverse'}`} 
              data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}
            >
              <div className="sm:w-1/2">
                <img 
                  src={service.image} 
                  alt={service.name} 
                  className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col justify-between sm:w-1/2">
                <div>
                  <h3 className="text-2xl font-semibold font-times text-gray-800 mb-2">{service.name}</h3>
                  <p className="text-gray-600 font-times mb-4">{service.description}</p>
                </div>
                <div className="text-center sm:text-right">
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
