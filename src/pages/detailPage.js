import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import ReservationForm from '../components/reservation'; // Assuming the form is in the same directory
import room1 from '../assets/standard.JPG';
import room2 from '../assets/twin1.JPG';
import room3 from '../assets/semi1.jpg';
import room4 from '../assets/sweet1.JPG';

import twin1 from '../assets/twin2.JPG';
import twin2 from '../assets/twin3.JPG';
import twin3 from '../assets/twin4.JPG';
import twin4 from '../assets/twin5.JPG';
import twin5 from '../assets/twin6.JPG';

import sweet1 from '../assets/sweet.JPG';
import sweet2 from '../assets/sweet2.JPG';
import sweet3 from '../assets/sweet4.JPG';
import sweet4 from '../assets/sweet5.JPG';
import sweet5 from '../assets/sweet6.JPG';

import standard1 from '../assets/standard1.JPG';
import standard2 from '../assets/standard2.JPG';
import tabel from '../assets/semi2.jpg'

import semi1 from '../assets/semi3.JPG';
import semi2 from '../assets/semi4.JPG';
import semi3 from '../assets/semi5.JPG';
import semi4 from '../assets/semi6.JPG';
import semi5 from '../assets/semi7.JPG';
import semi6 from '../assets/semi8.JPG';

const roomDetails = [
  {
    id: 1,
    name: "Standard Room",
    image: room1,
    gallery: [standard1, standard2, tabel],
    price: "1500/Night",
    description: "Our Standard Rooms are comfortable and well-equipped for a pleasant stay. They feature a cozy bed, modern amenities, and a serene ambiance.",
    characteristics: [
      { icon: "👥", label: "2 Persons" },
      { icon: "📶", label: "Free Wifi" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "🍽️", label: "Breakfast Included" },
      { icon: "🛁", label: "Towels" },
      { icon: "📺", label: "TV" },
      { icon: "🪑", label: "Table and Chair" },
      { icon: "🏞️", label: "Patio" },
    ],
    policies: {
      checkIn: "Check-in anytime",
      checkOut: "Check-out until 11 AM",
    
      pets: "Pets are not allowed.",
    },
  },
  {
    id: 2,
    name: "Twin Bed Room",
    image: room2,
    gallery: [twin1, twin2, twin3, twin4, twin5, tabel],
    price: "1800/Night",
    description: "Our Twin Bed Rooms are spacious and perfect for two guests. They offer twin beds, a comfortable seating area, and beautiful views.",
    additionalServices: "Internet Access, Breakfast, In-room Dining",
    characteristics: [
      { icon: "👥", label: "2-4 Persons" },
      { icon: "🛏️", label: "Twin Beds" },
      { icon: "📶", label: "Free Wifi" },
      { icon: "🍽️", label: "Breakfast Included" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "🛁", label: "Towels" },
      { icon: "📺", label: "TV" },
      { icon: "🪑", label: "Table and Chair" },
      { icon: "🏞️", label: "Patio" },
    ],
    policies: {
      checkIn: "Check-in anytime",
      checkOut: "Check-out until 11 AM",
    
      pets: "Pets are not allowed.",
    },
  },
  {
    id: 3,
    name: "Semi-Sweet Room",
    image: room3,
    gallery: [semi1, semi2, semi3, semi4, semi5, semi6, tabel],
    price: "1600/Night",
    description: "Our Semi-sweet Rooms offer extra space and comfort for your stay. They include a cooking space for your convenience, along with all essential amenities.",
    characteristics: [
      { icon: "👥", label: "1-2 Persons" },
      { icon: "📶", label: "Free Wifi" },
      { icon: "🍽️", label: "Breakfast Included" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "🍳", label: "Cooking Space" },
      { icon: "🛁", label: "Towels" },
      { icon: "📺", label: "TV" },
      { icon: "🪑", label: "Table and Chair" },
      { icon: "🏞️", label: "Patio" },
    ],
    policies: {
      checkIn: "Check-in anytime",
      checkOut: "Check-out until 11 AM",
    
      pets: "Pets are not allowed.",
    },
  },
  {
    id: 4,
    name: "Sweet Room",
    image: room4,
    gallery: [sweet1, sweet2, sweet3, sweet4, sweet5, tabel],
    price: "3000/Night",
    description: "Our Sweet Rooms provide luxury and comfort for a premium stay. They feature a separate salon, bedroom, two bathrooms, air conditioning, and a fully equipped kitchen.",
    characteristics: [
      { icon: "👥", label: "1-2 Persons" },
      { icon: "📶", label: "Free Wifi" },
      { icon: "🍽️", label: "Breakfast Included" },
      { icon: "🛋️", label: "Separate Salon" },
      { icon: "🛌", label: "Separate Bedroom" },
      { icon: "🚽", label: "Two Bathrooms" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "🍳", label: "Full Kitchen" },
      { icon: "🛁", label: "Towels" },
      { icon: "📺", label: "TV" },
      { icon: "🪑", label: "Table and Chair" },
      { icon: "🏞️", label: "Patio" },
    ],
    policies: {
      checkIn: "Check-in anytime",
      checkOut: "Check-out until 11 AM",
      
      pets: "Pets are not allowed.",
    },
  }
];



const RoomDetail = () => {
  const { id } = useParams();
  const room = roomDetails.find(room => room.id === parseInt(id));

  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);

  if (!room) {
    return <div>Room not found</div>;
  }


  const handleReservationSuccess = () => {
    setIsSuccessDialogOpen(true);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white min-h-screen py-4">
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-times">{room.name}</h1>
        </div>
      </header>
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-md overflow-hidden mb-8">
            <img src={room.image} alt={room.name} className="w-full h-96 object-cover" />
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
                <h3 className="text-xl md:text-2xl font-times mb-2"> Amenities:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {room.characteristics.map((characteristic, idx) => (
                    <div key={idx} className="flex items-center font-times space-x-2 mb-2">
                      <span role="img" aria-label="characteristic-icon">{characteristic.icon}</span>
                      <span>{characteristic.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-times text-custom-blue">Price: ${room.price}</p>
              </div>
              <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
  <h3 className="text-2xl md:text-2xl font-times mb-4 text-gray-800">Rules</h3>
  <ul className="list-none space-y-3 text-gray-900 font-times text-lg">
    <li className="flex items-center">
      <span className="mr-2 text-blue-500">🕓</span>
      <span>{room.policies.checkIn}</span>
    </li>
    <li className="flex items-center">
      <span className="mr-2 text-blue-500">🚪</span>
      <span>{room.policies.checkOut}</span>
    </li>
    <li className="flex items-center">
      <span className="mr-2 text-blue-500">💵</span>
      <span>
        Pay at the property -{" "}
        <span className="text-sm text-red-600">
          Payment should be made within 24 hours after reservation, otherwise the reservation will be canceled.
        </span>
      </span>
    </li>
    <li className="flex items-center">
      <span className="mr-2 text-blue-500">🐾</span>
      <span>{room.policies.pets}</span>
    </li>
  </ul>
</div>

<div className="text-right mt-4">
  <button
    className="bg-custom-blue text-white font-times py-2 px-4 rounded-full text-lg  hover:bg-blue-600 focus:outline-none"
    onClick={() => setIsModalOpen(true)}
  >
    Make Reservation
  </button>
</div>

            </div>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full h-full overflow-y-auto">
            <div className="max-w-lg mx-auto" onClick={(e) => e.stopPropagation()}>
              <ReservationForm room={room} onSuccess={handleReservationSuccess} onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
      {isSuccessDialogOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
            <h2 className="text-2xl font-times mb-4 text-green-500 ">Reservation Successful</h2>
            <p className="mb-4 font-times text-sm" >You have successfully reserved your room.</p>
            <button
             className="w-full bg-custom-blue text-white py-2 font-times rounded-custom hover:bg-blue-600 transition duration-200"
              onClick={() => setIsSuccessDialogOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default RoomDetail;
