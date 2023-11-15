import type { AuthOptions } from "next-auth";
import credentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  providers: [
    credentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, req) {
        const user = { id: "1", email: "ajmir@gmail.com" };
        if (credentials?.email === user.email) return user;
        return null;
      },
    }),
  ],
};

export default authOptions;
