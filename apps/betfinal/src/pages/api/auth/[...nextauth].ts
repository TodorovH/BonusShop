import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// import { useData } from '@repo/utils/data';
// import type { ContextType } from '@repo/custom-types/contextType';
// import type { User } from '@repo/custom-types/user';

// const getUsers = () => {
//   const data: ContextType = useData();
//   const users: User[] = data.users as User[];
//   console.log(users);
//   return users;
//   return [];
// };

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      authorize(credentials) {
        const { username } = credentials as {
          username: string;
        };
        // const user = getUsers().find(
        //   (user: { username: string }) => user.username === username
        // );
        // if (!user) throw new Error('Invalid credentials');
        // return user;
        if (username !== 'testuser') return null;
        return {
          id: '1234',
          username: 'testuser',
          email: 'testuser@gmail.com',
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
};

export default NextAuth(authOptions);
