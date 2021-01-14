import { gql } from '@apollo/client';

export const QUOTES = gql`
  query Quotes {
    quotes {
      title
      text
      author {
        name
      }
    }
  }
`;
