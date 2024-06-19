// src/RoomDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import room1 from './assets/room1.jpg';
import room2 from './assets/room2.jpg';
import room3 from './assets/r3.jpg';
import room4 from './assets/room1.jpg';

const roomDetails = [
  {
    id: 1,
    name: "Standard Room",
    image: room1,
    price: "1500",
    description: "A comfortable room with all standard amenities.",
    additionalServices: "Internet Access, Breakfast",
    totalRooms: 15
  },
  {
    id: 2,
    name: "Standard Room",
    image: room2,
    price: "1500",
    description: "A comfortable room with all standard amenities.",
    additionalServices: "Internet Access, Breakfast",
    totalRooms: 15
  },
  {
    id: 3,
    name: "Standard Room",
    image: room3,
    price: "1500",
    description: "A comfortable room with all standard amenities.",
    additionalServices: "Internet Access, Breakfast",
    totalRooms: 15
  },
  {
    id: 4,
    name: "Sweet Room",
    image: room4,
    price: "2000",
    description: "A luxurious room with additional features.",
    additionalServices: "Internet Access, Breakfast",
    totalRooms: 10
  }
];

const RoomDetail = () => {
  const { id } = useParams();
  const room = roomDetails.find(room => room.id === parseInt(id));

  if (!room) {
    return <div>Room not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold">{room.name}</h1>
        </div>
      </header>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={room.image} alt={room.name} className="w-full h-64 object-cover border-b-4 border-custom-blue"/>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{room.name}</h3>
              <p className="text-gray-600 mb-6">{room.description}</p>
              <div className="flex justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold mb-2">Additional Services with rooms</h4>
                  <p>{room.additionalServices.split(', ').map((service, index) => (
                    <span key={index} className="block">{service}</span>
                  ))}</p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Total Rooms:</h4>
                  <p className="text-gray-600">{room.totalRooms}</p>
                </div>
              </div>
              <p className="text-xl font-bold mb-4">Price: {room.price}</p>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}

export default RoomDetail;
