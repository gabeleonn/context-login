import React, { useState, useCallback, createContext, useContext } from 'react';

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  email: string;
  password: string;
}

interface AuthState {
  user: User;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): boolean;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const user = localStorage.getItem('@Login:user');
    if (user) {
      return { user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(({ email, password }) => {
    if (email === 'admin@admin.com' && password === 'password') {
      localStorage.setItem('@Login:user', JSON.stringify({ email, password }));
      setData({ user: { email, password } });
      return true;
    }
    return false;
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Login:user');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth precisa ser usando dentro de um AuthProvider.');
  }

  return context;
};

export default { AuthProvider, useAuth };
