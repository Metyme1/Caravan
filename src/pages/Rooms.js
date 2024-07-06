// src/components/Rooms.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import room1 from '../assets/standard.JPG';
import room2 from '../assets/twin1.JPG';
import room3 from '../assets/semi1.jpg';
import room4 from '../assets/sweet5.JPG';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Modal from '../components/Modal';
import ReservationForm from '../components/reservation';

const rooms = [
  {
    id: 1,
    name: "Standard Room",
    image: room1,
    price: "1500 / Night",
    description: "Our Standard Rooms are comfortable and well-equipped for a pleasant stay.",
    characteristics: [
      { icon: "👥", label: "2 Persons" },
      { icon: "📶", label: "Free Wifi" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "🍽️", label: "Breakfast Included" },
    ],
  },
  {
    id: 2,
    name: "Twin Bed",
    image: room2,
    price: "1800 / Night",
    description: "Our Twin Bed Rooms are spacious and perfect for two guests.",
    characteristics: [
      { icon: "👥", label: "2-4 Persons" },
      { icon: "🛏️", label: "Twin Beds" },
      { icon: "📶", label: "Free Wifi" },
      { icon: "🍽️", label: "Breakfast Included" },
      { icon: "❄️", label: "Air Conditioning" },
    ],
  },
  {
    id: 3,
    name: "Semi-Sweet Room",
    image: room3,
    price: "1600 / Night",
    description: "Our Semi-Suite Rooms offer extra space and comfort for your stay. They include a cooking space for your convenience.",
    characteristics: [
      { icon: "👥", label: "1-2 Persons" },
      { icon: "📶", label: "Free Wifi" },
      { icon: "🍽️", label: "Breakfast Included" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "🍳", label: "Cooking Space" },
    ],
  },
  {
    id: 4,
    name: "Sweet Room",
    image: room4,
    price: "3000 / Night",
    description: "Our Suite Rooms provide luxury and comfort for a premium stay. They feature a separate salon, bedroom, two bathrooms, air conditioning, and a fully equipped kitchen.",
    characteristics: [
      { icon: "👥", label: "1-2 Persons" },
      { icon: "📶", label: "Free Wifi" },
      { icon: "🍽️", label: "Breakfast Included" },
      { icon: "🛋️", label: "Separate Salon" },
      { icon: "🛌", label: "Separate Bedroom" },
      { icon: "🚽", label: "Two Bathrooms" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "🍳", label: "Full Kitchen" },
    ],
  },
];

const Rooms = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedRoom(null);
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold font-times">Rooms and Suites</h1>
        </div>
      </header>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`relative mb-16 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
              data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}
            >
              <img
                src={room.image}
                alt={room.name}
                className="h-112 object-cover w-3/5"
              />
              <div
                className="absolute bg-white p-12 shadow-md"
                style={{
                  width: '40%',
                  top: '10%',
                  left: index % 2 === 0 ? 'auto' : '5%',
                  right: index % 2 === 0 ? '5%' : 'auto',
                  transform: 'translateY(0%)',
                }}
              >
                <p className="text-lg font-bold text-gray-700 mb-2 font-times">{room.price}</p>
                <h3 className="text-3xl font-bold mb-2 font-times">{room.name}</h3>
                <p className="text-gray-600 mb-4 font-times">{room.description}</p>
                <div className="flex flex-wrap items-center space-x-4 mb-4">
                  {room.characteristics.map((characteristic, idx) => (
                    <div key={idx} className="flex items-center space-x-2 mb-2">
                      <span role="img" aria-label="characteristic-icon">{characteristic.icon}</span>
                      <span>{characteristic.label}</span>
                    </div>
                  ))}
                </div>
                <Link to={`/rooms/${room.id}`} className="text-custom-blue hover:underline">
                  View → Detail
                </Link>
                <button
  className="ml-4 text-blue-500 underline hover:text-blue-600"
  onClick={() => openModal(room)}
>
  Make Reservation
</button>

              </div>
            </div>
          ))}
        </div>
      </section>
      <Modal isVisible={isModalVisible} onClose={closeModal}>
        <ReservationForm room={selectedRoom} />
      </Modal>
    </div>
  );
};

export default Rooms;
