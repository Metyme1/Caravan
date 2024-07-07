// src/components/Admin.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
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

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'reservations', id));
      setReservations(prevReservations => prevReservations.filter(reservation => reservation.id !== id));
      console.log('Reservation deleted successfully');
    } catch (error) {
      console.error('Error deleting reservation: ', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="bg-white py-4 mb-8 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-times text-gray-800">Reservations</h2>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-full bg-white">
            <thead className="bg-custom-blue text-white">
              <tr>
                <th className="w-1/6 py-3 px-4 uppercase font-times text-sm">Name</th>
                <th className="w-1/6 py-3 px-4 uppercase font-times text-sm">Email</th>
                <th className="w-1/6 py-3 px-4 uppercase font-times text-sm">Phone</th>
                <th className="w-1/6 py-3 px-4 uppercase font-times text-sm">Room Type</th>
                <th className="w-1/6 py-3 px-4 uppercase font-times text-sm">Check-In</th>
                <th className="w-1/6 py-3 px-4 uppercase font-times text-sm">Check-Out</th>
                <th className="w-1/6 py-3 px-4 uppercase font-times text-sm">Adults</th>
                <th className="w-1/6 py-3 px-4 uppercase font-times text-sm">Children</th>
                <th className="w-1/6 py-3 px-4 uppercase font-times text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {reservations.map((reservation) => (
                <tr key={reservation.id} className="bg-gray-100 hover:bg-gray-200">
                  <td className="w-1/6 py-3 px-4">{reservation.name}</td>
                  <td className="w-1/6 py-3 px-4">{reservation.email}</td>
                  <td className="w-1/6 py-3 px-4">{reservation.phone}</td>
                  <td className="w-1/6 py-3 px-4">{reservation.roomType}</td>
                  <td className="w-1/6 py-3 px-4">{reservation.checkIn}</td>
                  <td className="w-1/6 py-3 px-4">{reservation.checkOut}</td>
                  <td className="w-1/6 py-3 px-4">{reservation.adults}</td>
                  <td className="w-1/6 py-3 px-4">{reservation.children}</td>
                  <td className="w-1/6 py-3 px-4">
                    <button
                      className="text-red-500 hover:text-red-700 font-bold font-times"
                      onClick={() => handleDelete(reservation.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Admin;
