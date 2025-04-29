import authOptions from "./options";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export default handler;
