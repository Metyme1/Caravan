import React, { useState, useEffect } from 'react';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../components/firebase';
import { useAuth } from './authcontext';

const AdminDashboard = () => {
  const { user, loading } = useAuth(); // Custom hook to get user and loading state
  const [rooms, setRooms] = useState([]);
  
  useEffect(() => {
    if (loading) return; // Wait until the user state is resolved
    if (!user || !user.token.admin) {
     
      return;
    }

    const fetchRooms = async () => {
      try {
        const roomsSnapshot = await getDocs(collection(db, 'rooms'));
        const roomsData = roomsSnapshot.docs.reduce((acc, doc) => {
          const { type, ...roomData } = doc.data();
          if (!acc[type]) {
            acc[type] = [];
          }
          acc[type].push({ id: doc.id, ...roomData });
          return acc;
        }, {});
        setRooms(Object.entries(roomsData).map(([type, rooms]) => ({ type, rooms })));
      } catch (error) {
        console.error('Error fetching rooms: ', error);
      }
    };

    fetchRooms();
  }, [loading, user]);

  const handleUpdateRooms = async (roomType, roomId, updatedRooms) => {
    try {
      const roomRef = doc(db, 'rooms', roomType, roomId);
      await updateDoc(roomRef, {
        availableRooms: updatedRooms,
      });
    } catch (error) {
      console.error('Error updating rooms: ', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Show a loading state
  }

  if (!user || !user.token.admin) {
    return <div>Access Denied. Admins only.</div>; // Show an access denied message
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      {rooms.map((roomType) => (
        <div key={roomType.type} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{roomType.type.toUpperCase()} Rooms</h3>
          <div className="grid grid-cols-2 gap-4">
            {roomType.rooms.map((room) => (
              <div key={room.id} className="bg-white shadow-md p-4 rounded-lg">
                <p className="font-bold">{room.name}</p>
                <p>Available Rooms: {room.availableRooms}</p>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    value={room.availableRooms}
                    onChange={(e) => {
                      const updatedRooms = parseInt(e.target.value, 10);
                      handleUpdateRooms(roomType.type, room.id, updatedRooms);
                    }}
                    className="border-gray-300 rounded-md px-2 py-1 w-20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    onClick={() => {
                      const updatedRooms = room.availableRooms + 1; // Example: increase by 1
                      handleUpdateRooms(roomType.type, room.id, updatedRooms);
                    }}
                    className="bg-indigo-600 text-white px-4 py-1 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    +1
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
