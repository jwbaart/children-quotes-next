import { gql } from '@apollo/client';

export const Quotes = gql`
  type Quote {
    uid: String!
    title: String
    text: String!
  }

  #   input getQuoteInput {
  #     uid: String!
  #   }

  extend type Query {
    quotes: [Quote]!
  }
`;
