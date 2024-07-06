import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

const ReservationForm = ({ room }) => {
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
      });
      console.log('Reservation made with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl  mb-6 font-times text-gray-800">Reserve {room.name}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-times  mb-2" htmlFor="name">Name</label>
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
        <label className="block text-gray-700 font-times  mb-2" htmlFor="email">Email</label>
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
        <label className="block text-gray-700 font-times  mb-2" htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg font-times focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-times  mb-2" htmlFor="checkIn">Check-In</label>
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
        <label className="block text-gray-700 font-times  mb-2" htmlFor="checkOut">Check-Out</label>
        <input
          type="date"
          id="checkOut"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full px-3 py-2 border font-times rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-times  mb-2" htmlFor="adults">Adults</label>
        <input
          type="number"
          id="adults"
          value={adults}
          onChange={(e) => setAdults(e.target.value)}
          className="w-full px-3 py-2 border font-times rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-times  mb-2" htmlFor="children">Children</label>
        <input
          type="number"
          id="children"
          value={children}
          onChange={(e) => setChildren(e.target.value)}
          className="w-full px-3 py-2 border font-times rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
  type="submit"
  className="w-full bg-custom-blue text-white py-2 font-times rounded-custom  hover:bg-blue-600 transition duration-200"
>
  Make Reservation
</button>


    </form>
  );
};

export default ReservationForm;
