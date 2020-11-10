import { parseCookies } from 'nookies';
import 'firebase/auth';
import verifyCookie from '../utils/verifyCookie';
import Layout from '../components/Layout';

type UserProps = {
  authenticated: boolean;
  usermail: string;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getServerSideProps(context) {
  const propsObject: UserProps = {
    authenticated: false,
    usermail: '',
  };

  const cookies = parseCookies(context);

  if (cookies.user) {
    const authentication = await verifyCookie(cookies.user);
    propsObject.authenticated = authentication
      ? authentication.authenticated
      : false;
    propsObject.usermail = authentication ? authentication.usermail : '';
  }

  return {
    props: propsObject, // will be passed to the page component as props
  };
}

const User = (props: UserProps): JSX.Element => (
  <Layout>
    <div>
      {props.authenticated
        ? 'Welcome user ' + props.usermail
        : 'You are a guest'}
    </div>
  </Layout>
);

export default User;
