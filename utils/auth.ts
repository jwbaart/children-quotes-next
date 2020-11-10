import getFirebase from '../firebase/firebase';

const firebase = getFirebase();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const signIn = async () =>
  firebase
    .auth()
    .signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(async (response) => {
      if (response && response.user) {
        return await postUserToken(await response.user.getIdToken());
      }
      return null;
    });

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

export default signIn;
