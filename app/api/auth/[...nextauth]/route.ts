import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import OktaProvider from "next-auth/providers/okta";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID ?? "",
      clientSecret: process.env.AUTH_GITHUB_SECRET ?? "",
    }),

    OktaProvider({
      clientId: process.env.AUTH_OKTA_ID ?? "",
      clientSecret: process.env.AUTH_OKTA_SECRET ?? "",
      issuer: process.env.AUTH_OKTA_ISSUER ?? "",
      idToken: true,
    }),
  ],
});

export { handler as GET, handler as POST };
