"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, User, signOut, getIdTokenResult } from 'firebase/auth';
import { auth } from '../lib/firebaseConfig';
import { useRouter } from 'next/navigation';

type UserRole = 'user' | 'admin';

type AuthContextType = {
  user: User | null;
  loading: boolean;
  role: UserRole;
  isAdmin: boolean;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  role: 'user',
  isAdmin: false,
  logout: async () => {},
  refreshUser: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<UserRole>('user');
  const router = useRouter();

  const refreshUser = async () => {
    if (auth.currentUser) {
      await auth.currentUser.getIdToken(true);
      const tokenResult = await getIdTokenResult(auth.currentUser);
      setRole(tokenResult.claims.admin ? 'admin' : 'user');
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const tokenResult = await getIdTokenResult(currentUser);
        setRole(tokenResult.claims.admin ? 'admin' : 'user');
      } else {
        setRole('user');
      }
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading, 
      role,
      isAdmin: role === 'admin',
      logout,
      refreshUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);