

// import React, { useState, useEffect } from 'react';
// import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
// import { db } from './firebase'; // Ensure correct import path
// import { useAuth } from './authcontext';
// import { Navigate, Link } from 'react-router-dom';

// const Admin = () => {
//   const { currentUser, logout } = useAuth(); // Get currentUser and logout function from AuthContext
//   const [reservations, setReservations] = useState([]);
//   const [deleteConfirmation, setDeleteConfirmation] = useState(null);

//   useEffect(() => {
//     const fetchReservations = async () => {
//       const querySnapshot = await getDocs(collection(db, 'reservations'));
//       const reservationsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setReservations(reservationsList);
//     };

//     fetchReservations();
//   }, []);

//   const handleDelete = async (id) => {
//     try {
//       if (!window.confirm('Are you sure you want to delete this reservation?')) {
//         return;
//       }
      
//       await deleteDoc(doc(db, 'reservations', id));
//       setReservations(prevReservations => prevReservations.filter(reservation => reservation.id !== id));
//       setDeleteConfirmation('Reservation deleted successfully');
//       setTimeout(() => {
//         setDeleteConfirmation(null);
//       }, 3000); // Clear confirmation after 3 seconds
//     } catch (error) {
//       console.error('Error deleting reservation: ', error);
//     }
//   };

//   if (!currentUser) {
//     return <Navigate to="/login" replace />; // Redirect to login if user is not authenticated
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
//       <header className="bg-white py-4 mb-4 sm:mb-8 shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//           <Link to="/edit-rooms" className="text-blue-500 hover:text-blue-700 font-bold font-times">
//             Edit Rooms and Prices
//           </Link>
//           <h2 className="text-3xl font-times text-gray-800">Reservations</h2>
//           <button onClick={() => logout()} className="ml-4 text-red-500 hover:text-red-700 font-bold font-times">Logout</button>
//         </div>
//       </header>
//       <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="overflow-x-auto">
//           <div className="bg-white shadow-md rounded my-4 sm:my-6">
//             <table className="min-w-full bg-white">
//               <thead className="bg-custom-blue text-white">
//                 <tr>
//                   <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Name</th>
//                   <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Email</th>
//                   <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Phone</th>
//                   <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Room Type</th>
//                   <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Check-In</th>
//                   <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Check-Out</th>
//                   <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Adults</th>
//                   <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Children</th>
//                   <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="text-gray-700">
//                 {reservations.map((reservation) => (
//                   <tr key={reservation.id} className="bg-gray-100 hover:bg-gray-200">
//                     <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.name}</td>
//                     <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.email}</td>
//                     <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.phone}</td>
//                     <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.roomType}</td>
//                     <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.checkIn}</td>
//                     <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.checkOut}</td>
//                     <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.adults}</td>
//                     <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.children}</td>
//                     <td className="py-3 px-4 sm:px-6 lg:px-8">
//                       <button
//                         className="text-red-500 hover:text-red-700 font-bold font-times"
//                         onClick={() => handleDelete(reservation.id)}
//                       >
//                         Delete
//                       </button>
//                       {deleteConfirmation && (
//                         <span className="text-green-600 ml-2">{deleteConfirmation}</span>
//                       )}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </section>
      
//     </div>
//   );
  
// };

// export default Admin;

import React, { useState, useEffect } from 'react';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase'; // Ensure correct import path
import { useAuth } from './authcontext'; // Import useAuth from your authcontext
import { Link, Navigate } from 'react-router-dom';

const Admin = () => {
  const { currentUser, logout } = useAuth(); // Get currentUser and logout function from AuthContext
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'reservations'));
        const reservationsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setReservations(reservationsList);
      } catch (error) {
        setError('Failed to fetch reservations. Please try again later.');
        console.error('Error fetching reservations:', error);
      } finally {
        setLoading(false);
      }
    };

    const intervalId = setInterval(() => {
      setCurrentTime(new Date()); // Update current time every second
    }, 1000);

    fetchReservations();

    return () => {
      clearInterval(intervalId); // Clean up interval on component unmount
    };
  }, []);

  const handleDelete = async (id) => {
    try {
      if (!window.confirm('Are you sure you want to delete this reservation?')) {
        return;
      }
      
      setLoading(true);
      await deleteDoc(doc(db, 'reservations', id));
      setReservations(prevReservations => prevReservations.filter(reservation => reservation.id !== id));
      setDeleteConfirmation('Reservation deleted successfully');
      setTimeout(() => {
        setDeleteConfirmation(null);
      }, 3000); // Clear confirmation after 3 seconds
    } catch (error) {
      console.error('Error deleting reservation: ', error);
      setError('Failed to delete reservation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getTimePassed = (timestamp) => {
    if (!timestamp) {
      return 'Timestamp not available'; // Handle if timestamp is not defined
    }
    const reservationTime = timestamp.toDate();
    const difference = currentTime - reservationTime;
    const secondsPassed = Math.floor(difference / 1000);
    const minutesPassed = Math.floor(secondsPassed / 60);
    const hoursPassed = Math.floor(minutesPassed / 60);
  
    if (hoursPassed > 0) {
      return `${hoursPassed} ${hoursPassed === 1 ? 'hour' : 'hours'} ago`;
    } else if (minutesPassed > 0) {
      return `${minutesPassed} ${minutesPassed === 1 ? 'minute' : 'minutes'} ago`;
    } else {
      return `${secondsPassed} ${secondsPassed === 1 ? 'second' : 'seconds'} ago`;
    }
  };

  const handleLogout = async () => {
    try {
      await logout(); // Call logout function
    } catch (error) {
      console.error('Logout failed:', error);
      // Handle logout failure if necessary
    }
  };

  if (!currentUser) {
    return <Navigate to="/login" replace />; // Redirect to login if user is not authenticated
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
      <header className="bg-white py-4 mb-4 sm:mb-8 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/edit-rooms" className="text-blue-500 hover:text-blue-700 font-bold font-times">
            Edit Rooms and Prices
          </Link>
          <h2 className="text-3xl font-times text-gray-800">Reservations</h2>
          <button onClick={handleLogout} className="ml-4 text-red-500 hover:text-red-700 font-bold font-times">Logout</button>
        </div>
      </header>
      <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {error && <div className="text-red-500">{error}</div>}
        {deleteConfirmation && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4">
            {deleteConfirmation}
          </div>
        )}
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
                  <th className="w-1/6 py-3 px-4 sm:px-6 lg:px-8 uppercase font-times text-sm sm:text-base">Time Passed</th>
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
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{getTimePassed(reservation.timestamp)}</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.adults}</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{reservation.children}</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </div>
  );
};

export default Admin;
