import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        if (
          username !== process.env.AUTH_USER ||
          password !== process.env.AUTH_PASS
        ) {
          throw new Error("invalid credentials");
        }

        return {
          id: Math.random().toString(),
          name: username,
          role: "admin",
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/signIn",
  },
  callbacks: {
    jwt(params) {
      return params.token;
    },
  },
};

export default NextAuth(authOptions);
