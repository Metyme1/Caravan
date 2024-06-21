// src/RoomDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import room1 from './assets/room1.jpg';
import room2 from './assets/room2.jpg';
import room3 from './assets/r3.jpg';
import room4 from './assets/room1.jpg';
import room5 from './assets/room2.jpg';
import room6 from './assets/r3.jpg';
import room7 from './assets/room1.jpg';
import room8 from './assets/room2.jpg';
import room9 from './assets/r3.jpg';
import room10 from './assets/room1.jpg';
import room11 from './assets/room2.jpg';
import room12 from './assets/r3.jpg';

const roomDetails = [
  {
    id: 1,
    name: "Standard Room",
    image: room1,
    gallery: [room1, room2, room3],
    price: "1500",
    description: "A comfortable room with all standard amenities.",
    additionalServices: "Internet Access, Breakfast",
   
    facilities: ["2-3 guests", "35 squares", "King size bed"]
  },
  {
    id: 2,
    name: "Deluxe Room",
    image: room4,
    gallery: [room4, room5, room6],
    price: "2000",
    description: "A deluxe room with superior amenities.",
    additionalServices: "Internet Access, Breakfast, Mini Bar",
    facilities: ["2-3 guests", "40 squares", "King size bed"]
  },
  {
    id: 3,
    name: "Executive Room",
    image: room7,
    gallery: [room7, room8, room9],
    price: "2500",
    description: "An executive room with premium features.",
    additionalServices: "Internet Access, Breakfast, Mini Bar, Access to Executive Lounge",
    
    facilities: ["2-4 guests", "50 squares", "King size bed"]
  },
  {
    id: 4,
    name: "Suite",
    image: room10,
    gallery: [room10, room11, room12],
    price: "3000",
    description: "A luxurious suite with exclusive amenities.",
    additionalServices: "Internet Access, Breakfast, Mini Bar, Access to Executive Lounge, Private Pool",
    
    facilities: ["2-4 guests", "60 squares", "King size bed"]
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
      {/* <nav className="bg-white py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-custom-blue hover:underline">Home</Link> &gt; 
          <Link to="/rooms" className="text-custom-blue hover:underline"> Rooms</Link> &gt; 
          <span className="text-gray-500"> {room.name}</span>
        </div>
      </nav> */}
      {/* <header className="bg-white py-8 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-times">{room.name}</h1>
        </div>
      </header> */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-8">
            <h2 className="text-3xl font-times mb-8 text-center">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {room.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover shadow-md"
                />
              ))}
            </div>
          </section>
          <div className="bg-white shadow-md overflow-hidden mb-8">
            <img src={room.image} alt={room.name} className="w-full h-96 object-cover"/>
            <div className="p-8">
              <h2 className="text-3xl font-times mb-4">{room.name}</h2>
              <p className="text-gray-600 font-times mb-6">{room.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-times mb-2">Additional Services:</h3>
                <p>{room.additionalServices.split(', ').map((service, index) => (
                  <span key={index} className="block text-gray-600">{service}</span>
                ))}</p>
              </div>
              <p className="text-2xl font-times text-custom-blue">Price: ${room.price}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RoomDetail;