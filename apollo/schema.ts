import { gql } from '@apollo/client';
import { makeExecutableSchema } from 'graphql-tools';
import { quotesResolvers } from './quotes/resolver';
import { Quotes } from './quotes/type-def';
import { tryOutResolvers, TryOut } from './try-out';
import { merge } from 'lodash';

const Query = gql`
  type Query {
    _empty: String
  }
`;

const resolvers = {};

export const schema = makeExecutableSchema({
  typeDefs: [Query, TryOut, Quotes],
  resolvers: merge(resolvers, tryOutResolvers, quotesResolvers),
});
