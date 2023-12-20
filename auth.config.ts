
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: "/login"
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            
            //Här avgör vi vilka sidor som ska vara privata eller publika
            const isLoggedIn = !!auth?.user;
            
            if (nextUrl.pathname.startsWith("/publik")) {
                return true;
            }
            
            const isOnStartpage = nextUrl.pathname === "/";
            
            if (isOnStartpage) {
                if (isLoggedIn) return true;
                return false;
            } else if (isLoggedIn) {
                return Response.redirect(new URL("/", nextUrl));
            }
            return true;
        }
    },
    providers: []
} satisfies NextAuthConfig