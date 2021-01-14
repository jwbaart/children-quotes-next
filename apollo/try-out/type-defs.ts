import { gql } from '@apollo/client';

// Construct a schema, using GraphQL schema language
export const TryOut = gql`
  extend type Query {
    rates(currency: String!): [ExchangeRate]
    viewer: User
  }

  type ExchangeRate {
    currency: String
    rate: String
    name: String
  }

  # type User {
  #   id: ID!
  #   name: String!
  #   status: String!
  # }
`;
