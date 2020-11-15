import { createContext, useState } from 'react';

export type AuthState = {
  user: boolean;
  isAuthenticated: boolean;
  signIn: () => Promise<null>;
  signOut: () => Promise<null>;
};

const defaultAuthState: AuthState = {
  user: false,
  isAuthenticated: false,
};

const AuthContext = createContext<AuthState | undefined>(undefined);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ ...defaultAuthState });
  console.log('authState', authState);

  return (
    <AuthContext.Provider value={[authState, setAuthState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
