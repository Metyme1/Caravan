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
    description: "Our Standard Rooms are comfortable and well-equipped for a pleasant stay.",
    characteristics: [
      { icon: "👥", label: "2 Persons" },
      { icon: "📶", label: "Free Wifi" },
      { icon: "❄️", label: "Air Conditioning" },
      { icon: "🍽️", label: "Breakfast Included" },
    ],
    availableRooms: 0, // Placeholder for Firestore data
    firestoreId: "6HzTIjNK2r9eyzGcAQI3"
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
    availableRooms: 0, // Placeholder for Firestore data
    firestoreId: "RBLDbJTlaRMzNbbiwCTM"
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
            console.log(`No such document for room ID ${room.firestoreId}!`);
            return room;
          }
        })
      );
      setRooms(updatedRooms);
    };

    fetchRoomData();
  }, []);

  const openReservationModal = (room) => {
    setSelectedRoom(room);
    setIsModalVisible(true);
  };

  const closeReservationModal = () => {
    setIsModalVisible(false);
    setSelectedRoom(null);
  };

  const handleSuccessDialogClose = () => {
    setIsSuccessDialogVisible(false);
  };

  const handleReservationSuccess = () => {
    setIsModalVisible(false);
    setIsSuccessDialogVisible(true);
  };

  return (
    <div className="w-full mx-auto max-w-7xl px-4 py-8">
      <div className="text-center pb-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 font-times">Rooms</h1>
        <p className="text-lg md:text-xl font-times">Choose from our variety of rooms for a comfortable stay.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {rooms.map((room) => (
          <div
            key={room.id}
            className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg p-4 max-w-md md:max-w-3xl w-full"
            data-aos="fade-up"
          >
            <img
              src={room.image}
              alt={room.name}
              className="object-cover w-full h-48 md:w-1/3 md:h-auto rounded-lg mb-4 md:mb-0"
            />
            <div className="flex flex-col justify-between p-4 w-full">
              <div>
                <h2 className="text-2xl font-bold mb-2 font-times">{room.name}</h2>
                <p className="text-lg mb-4 font-times">{room.price}</p>
                <p className="text-gray-700 mb-4 font-times">{room.description}</p>
                <ul className="space-y-2 mb-4">
                  {room.characteristics.map((char, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2">{char.icon}</span>
                      <span className="font-times">{char.label}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 font-times">
                  Available Rooms: {room.availableRooms}
                </p>
                <Link to={`/rooms/${room.id}`} className="text-custom-blue font-times hover:underline">
                  View → Detail
                </Link>
              </div>
              <button
                  className="ml-4 text-custom-blue underline hover:text-blue-600 font-times"
                  onClick={() => openReservationModal(room)}
                >
                  Make Reservation
                </button>
            </div>
          </div>
        ))}
      </div>

      <Modal isVisible={isModalVisible} onClose={closeReservationModal}>
        {selectedRoom && (
          <ReservationForm
            room={selectedRoom}
            onSuccess={handleReservationSuccess}
            onClose={closeReservationModal}
          />
        )}
      </Modal>

      {isSuccessDialogVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-xs w-full">
            <h2 className="text-2xl font-bold mb-4 font-times">Reservation Successful!</h2>
            <p className="mb-4 font-times">
              Your reservation has been successfully placed.
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 font-times"
              onClick={handleSuccessDialogClose}
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
