import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure correct import path

const Admin = () => {
  const [reservations, setReservations] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

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
      if (!window.confirm('Are you sure you want to delete this reservation?')) {
        return; // If cancel is clicked, do not proceed with deletion
      }
      
      await deleteDoc(doc(db, 'reservations', id));
      setReservations(prevReservations => prevReservations.filter(reservation => reservation.id !== id));
      setDeleteConfirmation('Reservation deleted successfully');
      setTimeout(() => {
        setDeleteConfirmation(null);
      }, 3000); // Clear confirmation after 3 seconds
    } catch (error) {
      console.error('Error deleting reservation: ', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <header className="bg-white py-4 mb-4 sm:mb-8 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-times text-gray-800">Reservations</h2>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <div className="bg-white shadow-md rounded my-4 sm:my-6">
            <table className="min-w-full bg-white">
              <thead className="bg-custom-blue text-white">
                <tr>
                  <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Name</th>
                  <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Email</th>
                  <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Phone</th>
                  <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Room Type</th>
                  <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Check-In</th>
                  <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Check-Out</th>
                  <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Adults</th>
                  <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Children</th>
                  <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {reservations.map((reservation) => (
                  <tr key={reservation.id} className="bg-gray-100 hover:bg-gray-200">
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.name}</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.email}</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.phone}</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.roomType}</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.checkIn}</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.checkOut}</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.adults}</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.children}</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">
                      <button
                        className="text-red-500 hover:text-red-700 font-bold font-times"
                        onClick={() => handleDelete(reservation.id)}
                      >
                        Delete
                      </button>
                      {deleteConfirmation && (
                        <span className="text-green-600 ml-2">{deleteConfirmation}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admin;
