import 'firebase/auth';
import getFirebaseAdmin from '../firebase/admin';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
async function verifyCookie(cookie) {
  const admin = await getFirebaseAdmin();
  if (!admin) {
    return null;
  }

  let usermail = '';
  let bAuth = false;
  await admin
    .auth()
    .verifySessionCookie(cookie, true /** checkRevoked */)
    .then((decodedClaims) => {
      bAuth = true;
      usermail = decodedClaims.email;
    })
    .catch(() => {
      // Session cookie is unavailable or invalid. Force user to login.
      bAuth = false;
    });

  return {
    authenticated: bAuth,
    usermail: usermail,
  };
}

export default verifyCookie;
