import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../apollo/schema';
import auth0 from '../../utils/auth0';

const apolloServer = new ApolloServer({
  /**
   * Add introspection to view the schema / docs in playground after running `next build` and `next start`
   * Without introspection, you'll get a message saying "Server cannot be reached"
   */
  introspection: true,
  playground: {
    settings: {
      'request.credentials': 'same-origin',
    },
  },
  schema,
  context: async (ctx) => {
    const { user } = await auth0.getSession(ctx.req);
    return { user };
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
