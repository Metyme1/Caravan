import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import room1 from '../assets/room1.jpg';
import room2 from '../assets/room2.jpg';
import room3 from '../assets/r3.jpg';
import room4 from '../assets/room1.jpg';
import room5 from '../assets/room2.jpg';
import room6 from '../assets/r3.jpg';
import room7 from '../assets/room1.jpg';
import room8 from '../assets/room2.jpg';
import room9 from '../assets/r3.jpg';
import room10 from '../assets/room1.jpg';
import room11 from '../assets/room2.jpg';
import room12 from '../assets/r3.jpg';

const roomDetails = [
  {
    id: 1,
    name: "Standard Room",
    image: room1,
    gallery: [room1, room2, room3,room10,room12],
    price: "1500",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nulla quam, ullamcorper in bibendum quis, volutpat ut lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus sagittis placerat velit ac euismod. Aliquam erat volutpat. Duis nec tincidunt maurisamenities.",
    additionalServices: "Internet Access, Breakfast, Inroom Dining",
   
  },
  {
    id: 2,
    name: "DoubleBed",
    image: room4,
    gallery: [room4, room5, room6],
    price: "2000",
    description: "A deluxe room with superior amenities.",
    additionalServices: "Internet Access, Breakfast, Inroom Dining",
  },
  {
    id: 3,
    name: "Semi-Sweet Room",
    image: room7,
    gallery: [room7, room8, room9],
    price: "2500",
    description: "An executive room with premium features.",
    additionalServices: "Internet Access, Breakfast, Inroom Dining",
  },
  {
    id: 4,
    name: "Sweet Room",
    image: room10,
    gallery: [room10, room11, room12],
    price: "3000",
    description: "A luxurious suite with exclusive amenities.",
    additionalServices: "Internet Access, Breakfast, Inroom Dining",
  }
];
const RoomDetail = () => {
  const { id } = useParams();
  const room = roomDetails.find(room => room.id === parseInt(id));

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!room) {
    return <div>Room not found</div>;
  }

return (
  <div className="bg-white min-h-screen py-4">

    <header className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl  font-times">{room.name}</h1>
      </div>
    </header>
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md overflow-hidden mb-8">
          <img src={room.image} alt={room.name} className="w-full h-96 object-cover"/>
        </div>
        <section className="">
          <div className="flex overflow-x-auto space-x-4">
            {room.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-64 h-64 object-cover shadow-md cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              />
            ))}
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={room.gallery[photoIndex]}
              nextSrc={room.gallery[(photoIndex + 1) % room.gallery.length]}
              prevSrc={room.gallery[(photoIndex + room.gallery.length - 1) % room.gallery.length]}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + room.gallery.length - 1) % room.gallery.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % room.gallery.length)
              }
            />
          )}
        </section>
        <div className="bg-white overflow-hidden mb-8">
          <div className="p-8">
          
            <p className="text-gray-900 font-times mb-6 text-lg">{room.description}</p>
            <div className="mb-4">
              <h3 className="text-2xl font-times  font-bold mb-2">Additional Services:</h3>
              <p>{room.additionalServices.split(', ').map((service, index) => (
                <span key={index} className="block font-times text-gray-600">{service}</span>
              ))}</p>
            </div>
            <div className="text-right">
                <p className="text-2xl font-times text-custom-blue">Price: ${room.price}</p>
              </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}

export default RoomDetail;