import React, { createContext, useState, useEffect } from 'react';
import ApiAxios from './ApiClient/UserApiClient';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Intenta cargar el estado de autenticación desde localStorage
    const savedAuthState = localStorage.getItem('isAuthenticated');
    return savedAuthState ? JSON.parse(savedAuthState) : false;
  });

  const [userInfo, setUserInfo] = useState(() => {
    // Intenta cargar la información del usuario desde localStorage
    const savedUserInfo = localStorage.getItem('userInfo');
    return savedUserInfo ? JSON.parse(savedUserInfo) : { id: null, email: null };
  });

  const checkAuthentication = async () => {
    try {
      // Llamada a la API para verificar si el usuario está activo
      const response = await ApiAxios.checkUserIsActive();
      const { message, user } = response.status;

      // Convertir el mensaje a un booleano
      const isActive = message.toLowerCase() === 'true';

      // Actualizar el estado de autenticación
      setIsAuthenticated(isActive);

      // Actualizar la información del usuario
      setUserInfo({ id: user.id, email: user.email });

      // Persistir el estado de autenticación e información del usuario en localStorage
      localStorage.setItem('isAuthenticated', JSON.stringify(isActive));
      localStorage.setItem('userInfo', JSON.stringify({ id: user.id, email: user.email }));

      // Log para verificar los valores de isAuthenticated y userInfo
      console.log('AuthContext - isAuthenticated:', isActive);
      console.log('AuthContext - userInfo:', { id: user.id, email: user.email });
    } catch (error) {
      console.error('Error al verificar autenticación:', error);

      // En caso de error, asegurarse de que isAuthenticated se marque como false
      setIsAuthenticated(false);
      localStorage.setItem('isAuthenticated', JSON.stringify(false));

      // Limpia la información del usuario en caso de error
      setUserInfo({ id: null, email: null });
      localStorage.setItem('userInfo', JSON.stringify({ id: null, email: null }));
    }
  };

  useEffect(() => {
    checkAuthentication();
  }, []);

  const signin = async (userData) => {
    try {
      const response = await ApiAxios.loginUser(userData);
      await checkAuthentication(); // Verifica nuevamente la autenticación después de iniciar sesión
      return response;
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await ApiAxios.logoutUser();
      setIsAuthenticated(false); // Cierra sesión
      setUserInfo({ id: null, email: null }); // Limpia la información del usuario
      localStorage.setItem('isAuthenticated', JSON.stringify(false)); // Limpia la persistencia del estado
      localStorage.setItem('userInfo', JSON.stringify({ id: null, email: null }));
      console.log('User logged out, isAuthenticated set to false');
      // Redirigir a la página de inicio o login si es necesario
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userInfo, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};