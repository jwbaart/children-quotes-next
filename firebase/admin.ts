import admin from 'firebase-admin';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('./serviceaccount.json');

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function getFirebaseAdmin() {
  if (!admin.apps.length) {
    await admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
  }
  return admin;
}

export default getFirebaseAdmin;

// Based on https://medium.com/javascript-in-plain-english/next-js-firebase-authentication-including-ssr-1045b097ee18
