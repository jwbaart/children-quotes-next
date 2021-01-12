import { ApolloServer } from 'apollo-server-micro';
import { schema } from '../../apollo/schema';

const apolloServer = new ApolloServer({
  context: (ctx) => ctx,
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
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
