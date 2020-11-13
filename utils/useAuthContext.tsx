import { useContext, useEffect } from 'react';
import getFirebase from '../firebase/firebase';
import { AuthContext } from './auth.provider';

const firebase = getFirebase();

const useAuthContext = () => {
  const [user, setUser] = useContext(AuthContext);

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  const signIn = async () =>
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(async (response) => {
        if (response && response.user) {
          await postUserToken(await response.user.getIdToken());
          setUser(response);
          return;
        }
        return null;
      });

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => setUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(() => setUser(false));
    return () => unsubscribe();
  }, [setUser]);

  return {
    user,
    signIn,
    signOut,
  };
};

const postUserToken = async (token) => {
  const path = '/api/auth';
  const url = process.env.NEXT_PUBLIC_BASE_API_URL + path;
  const data = { token: token };
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

export { useAuthContext };
