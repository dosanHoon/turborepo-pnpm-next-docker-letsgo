import { AuthOptions } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

const {
  AUTH_KEYCLOAK_ID = "",
  AUTH_KEYCLOAK_SECRET = "",
  AUTH_KEYCLOAK_ISSUER = "",
  NEXTAUTH_SECRET = "",
} = process.env;

const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: AUTH_KEYCLOAK_ID,
      clientSecret: AUTH_KEYCLOAK_SECRET,
      issuer: AUTH_KEYCLOAK_ISSUER,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
        user: {
          ...session.user,
          id: token.sub,
        },
      };
    },
    async jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
        };
      }
      return token;
    },
  },
  secret: NEXTAUTH_SECRET,
};

export default authOptions;

// export default NextAuth(authOptions);

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
  }
}
