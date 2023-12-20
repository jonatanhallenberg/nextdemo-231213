import NextAuth from 'next-auth'
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';

type User = {
  id: string,
  email: string,
  firstname: string,
  lastname: string
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log('authorize')
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          if (email === "jonatan.hallenberg@gmail.com" && password === "hejsan") {
            console.log('returning user')
            return {
              id: "5",
              email,
              firstname: "Jonatan",
              lastname: "Hallenberg"
            } as User;
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
});