import React, { createContext, useContext, useEffect, useState } from 'react';
import User from '../entities/User';
import AuthRepository from '../repositories/AuthRepository';
import LocalStorageRepository from '../repositories/LocalStorageRepository';
import api from '../services/api';

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

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (function loadStorageData() {
      const localStorageRepository: LocalStorageRepository = new LocalStorageRepository();
      const {
        storageUser,
        storageToken,
      } = localStorageRepository.getUserData();

      if (storageUser && storageToken) {
        api.defaults.headers['x-access-token'] = storageToken;
        setUser(JSON.parse(storageUser));
      }
    })();
  }, []);

  async function signIn(): Promise<User | null> {
    try {
      const auth: AuthRepository = new AuthRepository();
      const user = (await auth.signIn()).getUser();

      await auth.signIn();
      setTimeout(() => setUser(user), 300);

      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  function signOut(): void {
    const auth: AuthRepository = new AuthRepository();
    auth.signOut();

    setTimeout(() => {
      setUser(null);
    }, 300);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuthContext(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
