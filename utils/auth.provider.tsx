import { createContext, useState } from 'react';

export interface IAuthState {
  user: boolean;
  isAuthenticated: boolean;
}

const defaultAuthState: IAuthState = {
  user: false,
  isAuthenticated: false,
};

const AuthContext = createContext<IAuthState | undefined>(undefined);

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
