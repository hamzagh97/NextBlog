import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await axios.post("http://localhost:5000/login", {
          email: credentials.email,
          password: credentials.password,
        });

        if (!user) {
          throw new Error("Invalid credentials");
        }

        return user.data;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user, session }) {
      return { ...user, ...token };
    },
    async session({ session, token, user }) {
      session = token;
      return session;
    },
  },

  pages: {
    signIn: "/login",
    // signUp: "/register",
  },
  session: {
    strategy: "jwt",
  },
  secret: "foo",
};

export default NextAuth(authOptions);
