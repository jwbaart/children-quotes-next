import { createContext, useState } from 'react';

const defaultState = {
  user: false,
  isAuthenticated: false,
};

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [state, setState] = useState({ ...defaultState });

  return (
    <AuthContext.Provider value={[state, setState]}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
