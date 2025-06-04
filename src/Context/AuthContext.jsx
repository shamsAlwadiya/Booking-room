import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userPhoto, setUserPhoto] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUsername(user.displayName || user.email);
      setUserPhoto(user.photoUrl || "");
    }
  }, []);
  return (
    <AuthContext.Provider
      value={
        { 
            isLoggedIn,
             setIsLoggedIn, 
             username,
              setUsername,
              userPhoto,
              setUserPhoto
             }}
    >
      {children}
    </AuthContext.Provider>
  );
};
