import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import client from "./mongodb-client";

export const {handlers, auth, signIn, signOut} = NextAuth({
    adapter: MongoDBAdapter(client),
    session: {strategy: 'jwt'},
    providers: [Google]
})