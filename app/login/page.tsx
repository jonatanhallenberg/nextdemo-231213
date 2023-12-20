"use client"

import { useFormState } from "react-dom";
import { authenticate, State } from "../lib/signInAction";

const initialState: State = {
    errors: {},
    message: null
}

const LoginPage = () => {

    const [errorMessage, dispatch] = useFormState(authenticate, initialState);

    return <form action={dispatch}>
        <div>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email"></input>
        </div>
        <div>
            <label htmlFor="password">Lösenord</label>
            <input type="password" name="password"></input>
        </div>
        <button type="submit">Logga in</button>
    </form>

}

export default LoginPage;