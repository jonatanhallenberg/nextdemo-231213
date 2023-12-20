"use server"

import { signIn } from "@/auth"


export type State = {
    errors?: {
        email?: string[],
        password?: string[]
    },
    message: string
}

export const authenticate = async (
    prevState: State,
    formData: FormData
) => {
    try {
        console.log('authentication in progress');
        await signIn('credentials', formData)
        return {};
    } catch (e) {
        console.log('exception in signInAction', e);
    }
}