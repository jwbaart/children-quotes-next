import { quotes } from './firestore';

export const quotesResolvers = {
  Query: {
    getQuotes: () => quotes,
  },
};
