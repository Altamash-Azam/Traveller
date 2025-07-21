import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import userModel from "./models/user.model";
import connectDB from "./lib/mongodb";

export const {handlers , signIn, signOut, auth} = NextAuth({
    session: {strategy:'jwt'},
    providers:[
        Credentials({
            credentials: {
                email: {label: "Email", type:"email"},
                password: {label:"Password", type:"password"}
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    return null;
                }

                await connectDB();

                const user = await userModel.findOne({email: credentials.email});

                if(!user || !user.hashedPassword){
                    return null;
                }

                const isPasswordCorrect = await bcrypt.compare(
                    credentials.password as string,
                    user.hashedPassword
                )

                if(!isPasswordCorrect){
                    return null;
                }

                return {
                    id: user._id.toString(),
                    username: user.username,
                    email: user.email
                }
            }
        })
    ],
    callbacks: {

        async jwt({token, user}) {
            if(user){
                token.id = user.id as string;
                token.username = user.username;
            }
            return token;
        },

        async session({session, token}) {
            if(session.user){
                session.user.username = token.username;
                session.user.id = token.id;
            }
            return session;
        }
    }
});