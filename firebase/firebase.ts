import firebase from 'firebase/app';
import 'firebase/auth';

import config from './config';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function getFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

  return firebase;
}

export default getFirebase;
