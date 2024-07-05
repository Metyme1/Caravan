// src/components/ReservationForm.js (or src/pages/Reservation.js)
import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure correct import path

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [roomType, setRoomType] = useState('');
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
        roomType,
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
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      <select value={roomType} onChange={(e) => setRoomType(e.target.value)} required>
        <option value="">Select Room Type</option>
        <option value="single">Single</option>
        <option value="double">Double</option>
        <option value="suite">Suite</option>
      </select>
      <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
      <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
      <input type="number" placeholder="Adults" value={adults} onChange={(e) => setAdults(e.target.value)} required />
      <input type="number" placeholder="Children" value={children} onChange={(e) => setChildren(e.target.value)} />
      <button type="submit">Make Reservation</button>
    </form>
  );
};

export default ReservationForm;
