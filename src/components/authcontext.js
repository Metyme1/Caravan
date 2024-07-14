import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase'; // Ensure db is imported for Firestore operations

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const logout = () => {
    return auth.signOut(); // Firebase auth signOut method
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch additional user info if needed, for example, checking if the user is an admin
        const userInfo = await fetchUserInfo(user.uid); // Fetch user info from Firestore
        setCurrentUser({ ...user, ...userInfo });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, loading, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// Function to fetch user info from Firestore
const fetchUserInfo = async (uid) => {
  try {
    const userDocRef = doc(db, 'users', uid); // Assume user data is stored in 'users' collection
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      return userDoc.data();
    } else {
      console.error('No such user document!');
      return {};
    }
  } catch (error) {
    console.error('Error fetching user info:', error);
    return {};
  }
};
