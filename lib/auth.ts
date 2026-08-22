import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Demo user store - in production, use database
const users = [
  {
    id: "1",
    email: "admin@hexa-bd.com",
    name: "Admin",
    password: "admin123",
    role: "ADMIN",
  },
  {
    id: "2",
    email: "editor@hexa-bd.com",
    name: "Editor",
    password: "editor123",
    role: "EDITOR",
  },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = users.find(
          (u) =>
            u.email === credentials.email &&
            u.password === credentials.password
        );

        if (user) {
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            role: user.role,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as unknown as { role: string }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as unknown as { role: string }).role = token.role as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/admin/login",
  },
});
