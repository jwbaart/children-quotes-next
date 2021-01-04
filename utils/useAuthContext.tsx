import { useContext, useEffect } from 'react';
import getFirebase from '../firebase/firebase';
import { AuthContext, IAuthState } from './auth.provider';

const firebase = getFirebase();

export interface IAuthContext extends IAuthState {
  signIn: () => Promise<null>;
  signOut: () => Promise<null>;
}

export const useAuthContext = (): IAuthState => {
  const [authState, setAuthState] = useContext(AuthContext);

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  const signIn = async () =>
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(async (response) => {
        if (response && response.user) {
          await postUserToken(await response.user.getIdToken());
          setAuthState({ ...authState, user: response, isAuthenticated: true });
          return;
        }
        return null;
      });

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() =>
        setAuthState({ ...authState, user: false, isAuthenticated: false })
      );
  };

  useEffect(() => {
    console.log('useEffect');
    const unsubscribe = firebase
      .auth()
      .onIdTokenChanged(() =>
        setAuthState({ ...authState, user: false, isAuthenticated: false })
      );
    return () => unsubscribe();
  }, [setAuthState, authState]);

  return {
    ...authState,
    signIn,
    signOut,
  };
};

const postUserToken = async (token) => {
  const path = '/api/auth';
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + path;
  const data = { token: token };
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};
