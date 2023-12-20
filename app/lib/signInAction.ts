"use server"

import { signIn } from "@/auth"
import { AuthError } from 'next-auth';



export const authenticate = async (
    prevState: string | undefined,
    formData: FormData
) => {
    try {
        console.log('authentication in progress');
        await signIn('credentials', formData)
    } catch (e) {
        if (e instanceof AuthError) {
            switch (e.type) {
                case 'CredentialsSignin':
                    return "Fel inloggningsuppgifter";
                default:
                    return "Något gick fel"
            }
        }
        throw e;
    }
}