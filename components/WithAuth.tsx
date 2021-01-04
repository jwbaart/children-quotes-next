import React, { Component } from 'react';

import auth0 from '../utils/auth0';
import createLoginUrl from '../utils/url-helper';
import { fetchUser } from '../utils/user';
import RedirectToLogin from './LoginRedirect';

type AuthenticatedProps = {
  user?: any;
  loading: boolean;
  children: React.ReactChild | React.ReactChildren;
};

export default function withAuth(
  InnerComponent: React.ElementType | React.FunctionComponent
): React.ComponentType {
  return class Authenticated extends Component<AuthenticatedProps> {
    static async getInitialProps(ctx) {
      if (!ctx.req) {
        const user = await fetchUser();
        return {
          user,
        };
      }

      const session = await auth0.getSession(ctx.req);
      if (!session || !session.user) {
        ctx.res.writeHead(302, {
          Location: createLoginUrl(ctx.req.url),
        });
        ctx.res.end();
        return;
      }

      return { user: session.user };
    }

    constructor(props) {
      super(props);
    }

    render() {
      if (!this.props.user) {
        return <RedirectToLogin />;
      }

      return <>{<InnerComponent {...this.props} user={this.props.user} />}</>;
    }
  };
}
