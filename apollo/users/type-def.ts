import { gql } from '@apollo/client';

export const Users = gql`
  type User {
    id: ID!
    name: String!
  }

  extend type Query {
    users: [User]!
  }
`;
