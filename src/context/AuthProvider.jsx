import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    const storageAuth = localStorage.getItem("token");
    return storageAuth ? true : false;
  });

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
