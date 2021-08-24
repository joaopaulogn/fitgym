import React, { createContext, useContext, useEffect, useState } from 'react';
import { User } from '../entities/User';
import api from '../services/api';
import fetchUserData from '../services/auth';

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(): Promise<User | null>;
  signOut(): void;
}

interface AuthProviderProps {
  children: JSX.Element;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (function loadStorageData() {
      const storageUser = localStorage.getItem('user');
      const storageToken = localStorage.getItem('token');

      if (storageUser && storageToken) {
        api.defaults.headers['x-access-token'] = storageToken;
        setUser(JSON.parse(storageUser));
      }
    })();
  }, []);

  async function signIn(): Promise<User | null> {
    try {
      const response = await fetchUserData();
      const newUser: User = new User(
        response.user.getID(),
        response.user.getCNPJ(),
        response.user.getName(),
      );

      api.defaults.headers['x-access-token'] = response.token;
      localStorage.setItem('user', JSON.stringify(newUser));
      localStorage.setItem('token', response.token);

      setTimeout(() => setUser(newUser), 300);

      return newUser;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  function signOut(): void {
    const token = localStorage.getItem('token');

    api.post('/logout', {}, { headers: { 'x-access-token': token } });
    localStorage.clear();
    setTimeout(() => setUser(null), 300);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext() {
  const context = useContext(AuthContext);

  return context;
}
