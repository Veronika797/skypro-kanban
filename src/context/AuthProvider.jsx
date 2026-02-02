import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    const storageAuth = localStorage.getItem("token");
    return storageAuth ? true : false;
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
