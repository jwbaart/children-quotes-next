import { gql } from '@apollo/client';

export const Quotes = gql`
  type Quote {
    id: ID!
    title: String
    text: String!
    author: User!
  }

  #   input getQuoteInput {
  #     uid: String!
  #   }

  extend type Query {
    quotes: [Quote]!
  }
`;
