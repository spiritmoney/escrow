import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signUp } from "@/app/api/auth/signup/route";
import { User } from "next-auth";

// Add this type declaration
declare module "next-auth" {
  interface User {
    userType?: string;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add your authentication logic here
        // For example, check credentials against your database
        if (
          credentials.email === "user@example.com" &&
          credentials.password === "password"
        ) {
          return { id: "1", name: "User", email: "user@example.com" };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userType = user.userType;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.userType = token.userType as string | undefined;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
