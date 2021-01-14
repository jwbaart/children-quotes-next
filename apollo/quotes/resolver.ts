import { authenticated } from '../utils/auth';
import { quotes } from './firestore';

export interface Quote {
  id: string;
  title: string;
  text: string;
}

export const quotesResolvers = {
  Query: {
    quotes: authenticated((_, __, ctx): Quote[] => {
      return quotes;
    }),
  },
};
