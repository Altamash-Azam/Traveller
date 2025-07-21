import NextAuth, {DefaultSession, DefaultUser} from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface User extends DefaultUser {
         username: string,
    }

    interface session {
        user: {
            id: string,
            username: string,
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt"{
    interface JWT extends DefaultJWT {
        id: string,
        username: string
    }
}