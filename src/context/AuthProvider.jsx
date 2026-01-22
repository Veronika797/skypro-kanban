import { useState, useEffect } from "react";
import { getUser } from "../services/auth";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
      getUser()
        .then((userData) => setUser(userData))
        .catch(() => {
          setIsAuth(false);
          localStorage.removeItem("token");
        });
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("token", userData.token);
    setIsAuth(true);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
