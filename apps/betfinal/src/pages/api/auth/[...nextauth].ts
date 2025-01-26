import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { useData } from '@repo/utils/data';
import type { ContextType } from '@repo/custom-types/contextType';
import type { User } from '@repo/custom-types/user';

const getUsers = () => {
  const data: ContextType = useData();
  const users: User[] = data.users as User[];

  return users;
};

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials, req) {
        const { username } = credentials as {
          username: string;
        };
        return (
          getUsers().find(
            (user: { username: string }) => user.username === username
          ) || null
        );
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
};

export default NextAuth(authOptions);
