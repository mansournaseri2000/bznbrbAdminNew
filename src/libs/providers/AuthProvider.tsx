'use client';

import React, { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';

import { useRouter } from '@bprogress/next';
import Cookies from 'universal-cookie';

// Define the User type
export interface User {
  token: string | null;
}

// Define the actions for the reducer
type Action = { type: 'LOGIN'; payload: User } | { type: 'LOGOUT' };

// Define the context type
interface UserContextType {
  user: User | null;
  dispatch: React.Dispatch<Action>;
}

// Create the context
const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the reducer
const userReducer = (state: User | null, action: Action): User | null => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

// Create a custom hook to use the UserContext
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within an AuthProvider');
  }
  return context;
};

// Define the provider props
interface UserProviderProps {
  children: ReactNode;
}

// Create the provider component
export const AuthProvider: React.FC<UserProviderProps> = ({ children }) => {
  const cookies = new Cookies();
  const token = cookies.get('token');
  const [user, dispatch] = useReducer(userReducer, { token: token ? token : null });
  const router = useRouter();

  useEffect(() => {
    if (!user?.token) {
      router.push('/auth/login/receiveCode');
    }
  }, [user?.token, router]);

  useEffect(() => {
    if (user?.token) {
      cookies.set('token', user.token, { path: '/' });
    } else {
      cookies.remove('token', { path: '/' });
    }
  }, [user, cookies]);

  return <UserContext.Provider value={{ user, dispatch }}>{children}</UserContext.Provider>;
};
