import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../components/firebase'; // Make sure this path is correct
import room1 from '../assets/standard.JPG';
import room2 from '../assets/twin1.JPG';
import room3 from '../assets/semi1.jpg';
import room4 from '../assets/sweet1.JPG';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Modal from '../components/Modal';
import ReservationForm from '../components/reservation';

const initialRooms = [
  {
    id: 1,
    name: "Standard Room",
    image: room1,
    price: "1500 / Night",
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
    availableRooms: 0, // Placeholder for Firestore data
    firestoreId: "6HzTIjNK2r9eyzGcAQI3"
  },
  {
    id: 2,
    name: "Twin Bed",
    image: room2,
    price: "1800 / Night",
    description: "Our Twin Bed Rooms are spacious and perfect for two guests. They offer twin beds, a comfortable seating area, and beautiful views.",
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
    availableRooms: 0, // Placeholder for Firestore data
    firestoreId: "RBLDbJTlaRMzNbbiwCTM"
  },
  {
    id: 3,
    name: "Semi-Sweet Room",
    image: room3,
    price: "1600 / Night",
    description: "Our Semi-Suite Rooms offer extra space and comfort for your stay. They include a cooking space for your convenience, along with all essential amenities.",
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
    availableRooms: 0, // Placeholder for Firestore data
    firestoreId: "d164GZDSAgw5H0OcUH9j"
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
      { icon: "🛁", label: "Towels" },
      { icon: "📺", label: "TV" },
      { icon: "🪑", label: "Table and Chair" },
      { icon: "🏞️", label: "Patio" },
    ],
    availableRooms: 0, // Placeholder for Firestore data
    firestoreId: "P9f8KDSGcqW83X4EWECi"
  },
];

const Rooms = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isSuccessDialogVisible, setIsSuccessDialogVisible] = useState(false);
  const [rooms, setRooms] = useState(initialRooms);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const fetchRoomData = async () => {
      const updatedRooms = await Promise.all(
        initialRooms.map(async (room) => {
          const docRef = doc(db, 'rooms', room.firestoreId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const roomData = docSnap.data();
            return { ...room, availableRooms: roomData.Avaliablerooms };
          } else {
            console.log(`No such document for ${room.name}`);
            return room;
          }
        })
      );
      setRooms(updatedRooms);
    };

    fetchRoomData();
  }, []);

  const openModal = (room) => {
    setSelectedRoom(room);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setSelectedRoom(null);
  };

  const handleSuccess = () => {
    closeModal();
    setIsSuccessDialogVisible(true);
  };

  const closeSuccessDialog = () => {
    setIsSuccessDialogVisible(false);
  };

  return (
    <div className="bg-gray-100">
      <header className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-times">Rooms and Suites</h1>
        </div>
      </header>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {rooms.map((room, index) => (
            <div
              key={room.id}
              className={`relative mb-16 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              data-aos={`${index % 2 === 0 ? 'fade-right' : 'fade-left'}`}
            >
              <img
                src={room.image}
                alt={room.name}
                className="h-112 object-cover w-full md:w-3/5"
              />
              <div
                className="bg-white p-6 md:p-12 shadow-md w-full md:w-2/5 md:relative"
                style={{
                  top: '10%',
                  left: index % 2 === 0 ? 'auto' : '5%',
                  right: index % 2 === 0 ? '5%' : 'auto',
                  transform: 'translateY(0%)',
                }}
              >
                <p className="text-lg font-bold text-gray-700 mb-2 font-times">{room.price}</p>
                <h3 className="text-2xl md:text-3xl mb-2 font-times">{room.name}</h3>
                <p className="text-gray-600 mb-4 font-times">{room.description}</p>
                <p className="text-gray-600 mb-4 font-times">Available Rooms: {room.availableRooms}</p>
                <div className="flex flex-wrap items-center space-x-4 mb-4">
                  {room.characteristics.map((characteristic, idx) => (
                    <div key={idx} className="flex items-center space-x-2 mb-2 font-times">
                      <span role="img" aria-label="characteristic-icon">{characteristic.icon}</span>
                      <span>{characteristic.label}</span>
                    </div>
                  ))}
                </div>
                <Link to={`/rooms/${room.id}`} className="text-custom-blue font-times hover:underline">
                  View → Detail
                </Link>
                <button
                  className="ml-4 text-custom-blue underline hover:text-blue-600 font-times"
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
        <ReservationForm room={selectedRoom} onSuccess={handleSuccess} onClose={closeModal} />
      </Modal>
      {isSuccessDialogVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md text-center">
            <h2 className="text-2xl mb-4 font-times text-green-500">Reservation Successful!</h2>
            <p className="mb-4 font-times">Your reservation has been made successfully.</p>
            <button
              className="text-custom-blue underline hover:text-blue-600 font-times"
              onClick={closeSuccessDialog}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;
