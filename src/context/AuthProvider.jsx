import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  getAuthToken,
  setAuthToken,
  clearAuthToken,
  reg,
  login,
} from "../services/auth";
import { setAuthHeader } from "../services/posts";

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    return !!getAuthToken();
  });

  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const handleRegister = async (userData) => {
    try {
      const response = await reg(userData);
      setAuthToken(response.user.token);
      setAuthHeader(response.user.token);
      setUser({ name: response.user.name, email: response.user.login });
      setIsAuth(true);
      return response;
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      throw error;
    }
  };

  const handleLogin = async (loginData) => {
    try {
      const response = await login(loginData);
      setAuthToken(response.user.token);
      setAuthHeader(response.user.token);
      setUser({ name: response.user.name, email: response.user.login });
      setIsAuth(true);
      return response;
    } catch (error) {
      console.error("Ошибка входа:", error);
      throw error;
    }
  };

  const handleLogout = () => {
    clearAuthToken();
    setUser(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        user,
        setUser,
        handleRegister,
        handleLogin,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
