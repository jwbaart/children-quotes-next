import { users } from '../users/firestore';
import { User } from '../users';
import { authenticated } from '../utils/auth';
import { quotes } from './firestore';

export interface Quote {
  id: string;
  title: string;
  text: string;
  author: any;
}

export const quotesResolvers = {
  Query: {
    quotes: authenticated((_, __, ctx): Quote[] => {
      return quotes;
    }),
  },
  Quote: {
    author(quote: Quote): User {
      return users.find((user) => user.id === quote.author);
    },
  },
};
