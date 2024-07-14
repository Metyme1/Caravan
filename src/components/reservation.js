import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';

const ReservationForm = ({ room, onSuccess, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'reservations'), {
        name,
        email,
        phone,
        roomType: room.name,
        checkIn,
        checkOut,
        adults,
        children,
        timestamp: serverTimestamp(), // Set timestamp to server timestamp
      });
      console.log('Reservation made with ID: ', docRef.id);
      onSuccess(); // Call the success callback
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  const handleCancel = () => {
    setName('');
    setEmail('');
    setPhone('');
    setCheckIn('');
    setCheckOut('');
    setAdults(1);
    setChildren(0);
    onClose(); // Optional: Close the form if needed
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 md:p-8 bg-white rounded shadow-md">
      <h2 className="text-xl md:text-2xl mb-4 md:mb-6 font-times text-gray-800 text-center">Reserve {room.name}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-times mb-2" htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg font-times focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-times mb-2" htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg font-times focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-times mb-2" htmlFor="phone">Phone</label>
        <div className="relative">
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg font-times focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Phone Number"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="mb-4">
          <label className="block text-gray-700 font-times mb-2" htmlFor="checkIn">Check-In</label>
          <input
            type="date"
            id="checkIn"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg font-times focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-times mb-2" htmlFor="checkOut">Check-Out</label>
          <input
            type="date"
            id="checkOut"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg font-times focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="mb-4">
          <label className="block text-gray-700 font-times mb-2" htmlFor="adults">Adults</label>
          <input
            type="number"
            id="adults"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg font-times focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-times mb-2" htmlFor="children">Children</label>
          <input
            type="number"
            id="children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg font-times focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <p className="text-red-600 font-times text-sm mb-4">Note: Reservation will be canceled after 24 hours if payment is not completed.</p>
      <p className="text-gray-700 font-times mb-4">Contact our team for more information: <a href="tel:+1234567890" className="text-blue-600 hover:underline">0254114312</a></p>
      <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4 justify-end">
        <button
          type="button"
          onClick={handleCancel}
          className="text-red-600 hover:text-red-700 font-times text-sm focus:outline-none"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="w-full md:w-auto bg-custom-blue text-white py-2 font-times rounded-custom hover:bg-blue-600 transition duration-200"
        >
          Make Reservation
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
