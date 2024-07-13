import React, { useState, useEffect } from 'react';
import { collection,onSnapshot } from 'firebase/firestore';
import { db } from './firebase';
import { useAuth } from './authcontext';
import { Navigate, Link } from 'react-router-dom';

const EditRooms = () => {
  const { currentUser } = useAuth();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'rooms'), (snapshot) => {
      const roomsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRooms(roomsList);
    });

    return () => unsubscribe(); // Unsubscribe from snapshot listener on unmount
  }, []);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <header className="bg-white py-4 mb-4 sm:mb-8 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-times text-gray-800">Edit Rooms</h2>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <div className="bg-white shadow-md rounded my-4 sm:my-6">
            <table className="min-w-full bg-white">
              <thead className="bg-custom-blue text-white">
                <tr>
                  <th className="w-1/4 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Room Type</th>
                  <th className="w-1/4 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Available Rooms</th>
                  <th className="w-1/4 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Price</th>
                  <th className="w-1/4 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {rooms.map((room) => (
                  <tr key={room.id} className="bg-gray-100 hover:bg-gray-200">
                    <td className="py-3 px-4 sm:px-6 font-times lg:px-8">{room.type}</td>
                    <td className="py-3 px-4 sm:px-6 font-times lg:px-8">{room.Avaliablerooms}</td>
                    <td className="py-3 px-4 sm:px-6 font-times lg:px-8">{room.price}</td>
                    <td className="py-3 px-4 sm:px-6 font-times lg:px-8">
                      <Link to={`/edit-room/${room.id}`} className="text-blue-500 hover:text-blue-700 font-bold font-times">
                        Edit
                      </Link>
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

export default EditRooms;
