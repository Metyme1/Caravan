// src/Rooms.js
import React from 'react';
import { Link } from 'react-router-dom';
import room1 from './assets/room1.jpg';
import room2 from './assets/room2.jpg';
import room3 from './assets/r3.jpg';
import room4 from './assets/r3.jpg';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    image: room1,
    price: "1500",
    description: "A comfortable room with all standard amenities."
  },
  {
    id: 2,
    name: "Standard Room",
    image: room2,
    price: "1500",
    description: "A comfortable room with all standard amenities."
  },
  {
    id: 3,
    name: "Standard Room",
    image: room3,
    price: "1500",
    description: "A comfortable room with all standard amenities."
  },
  {
    id: 4,
    name: "Sweet Room",
    image: room4,
    price: "2000",
    description: "A luxurious room with additional features."
  }
];

const Rooms = () => {
  return (
    <div className="bg-gray-100">
      <header className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold">Rooms and Suites</h1>
        </div>
      </header>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {rooms.map((room, index) => (
            <div 
              key={room.id} 
              className={`bg-white shadow-md rounded-lg overflow-hidden mb-8 flex ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} 
              data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}
              style={{ height: '400px' }} // Adjust the height here
            >
              <img src={room.image} alt={room.name} className="w-1/2 h-full object-cover"/>
              <div className="p-4 flex flex-col justify-between w-1/2">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                </div>
                <div>
                  <p className="text-xl font-bold mb-2">Price {room.price}</p>
                  <Link to={`/rooms/${room.id}`} className="bg-custom-blue text-white px-4 py-2 rounded-md">View Detail</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Rooms;
