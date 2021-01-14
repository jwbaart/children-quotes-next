import { authenticated } from '../utils/auth';
import { users } from './firestore';

export interface User {
  id: string;
  name: string;
}

export const usersResolvers = {
  Query: {
    users: authenticated((_, __, ctx): User[] => {
      console.log('users', users);
      return users;
    }),
  },
};
