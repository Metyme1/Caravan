// src/components/Admin.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Ensure correct import path

const Admin = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const querySnapshot = await getDocs(collection(db, 'reservations'));
      const reservationsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setReservations(reservationsList);
    };

    fetchReservations();
  }, []);

  return (
    <div>
      <h2>Reservations</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            {reservation.name} - {reservation.email} - {reservation.phone} - {reservation.roomType} - 
            {reservation.checkIn} to {reservation.checkOut} - {reservation.adults} adults - {reservation.children} children
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
