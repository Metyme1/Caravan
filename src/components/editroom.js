import React, { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';
import { useParams, Navigate } from 'react-router-dom';
import { useAuth } from './authcontext';

const EditRoom = () => {
  const { currentUser } = useAuth();
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    const fetchRoom = async () => {
      const roomDoc = await getDoc(doc(db, 'rooms', id));
      if (roomDoc.exists()) {
        setRoom(roomDoc.data());
        setEditData(roomDoc.data());
      }
    };

    fetchRoom();
  }, [id]);

  const handleInputChange = (field, value) => {
    setEditData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      if (!currentUser) {
        throw new Error('User not authenticated.');
      }
  
      const { Avaliablerooms, price } = editData;
      if (! Avaliablerooms || !price) {
        throw new Error('Invalid data format.');
      }
  
      const docRef = doc(db, 'rooms', id);
      await updateDoc(docRef, {
        Avaliablerooms: parseInt( Avaliablerooms, 10),
        price: parseFloat(price),
      });
  
      console.log('Room updated successfully!');
      alert('Room updated successfully!');
      window.location.href = '/edit-rooms'; // Navigate back to EditRooms page
    } catch (error) {
      console.error('Error updating room:', error.message);
      alert('Failed to update room. Please try again.');
    }
  };
  

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (!room) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <header className="bg-white py-4 mb-4 sm:mb-8 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-times text-gray-800">Edit Room</h2>
        </div>
      </header>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-md rounded my-4 sm:my-6 p-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Room Type</label>
            <input
              type="text"
              value={editData.roomType || ''}
              onChange={(e) => handleInputChange('roomType', e.target.value)}
              className="w-full px-3 py-2 border rounded"
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Available Rooms</label>
            <input
              type="number"
              value={editData.Avaliablerooms || ''}
              onChange={(e) => handleInputChange('Avaliablerooms', e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
            <input
              type="number"
              value={editData.price || ''}
              onChange={(e) => handleInputChange('price', e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </section>
    </div>
  );
};

export default EditRoom;
