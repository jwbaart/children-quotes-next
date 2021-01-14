import { gql } from '@apollo/client';
import { makeExecutableSchema } from 'graphql-tools';
import { merge } from 'lodash';

import { quotesResolvers, Quotes } from './quotes';
import { tryOutResolvers, TryOut } from './try-out';
import { usersResolvers, Users } from './users';

const Query = gql`
  type Query {
    _empty: String
  }
`;

const resolvers = {};

export const schema = makeExecutableSchema({
  typeDefs: [Query, TryOut, Quotes, Users],
  resolvers: merge(resolvers, tryOutResolvers, quotesResolvers, usersResolvers),
});
