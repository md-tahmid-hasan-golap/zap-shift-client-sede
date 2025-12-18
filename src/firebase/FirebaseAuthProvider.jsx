import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import { auth } from "./firebase.init";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // creatUser
  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signInUser;
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // signInWithGoogle
  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  //update user profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // Observe User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log("Auth State Changed:", currentUser);
    });

    return () => unsubscribe();
  }, []);

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    creatUser,
    signInUser,
    signInWithGoogle,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default FirebaseAuthProvider;
