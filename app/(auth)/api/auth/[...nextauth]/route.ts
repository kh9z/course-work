import NextAuth, {NextAuthOptions} from "next-auth";
import {authOptions} from "@/app/(auth)/api/auth/[...nextauth]/authOptions";

const handler = NextAuth(authOptions)

export {handler as GET, handler as POST}