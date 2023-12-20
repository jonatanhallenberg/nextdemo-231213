"use client"

import { useFormState } from "react-dom";
import { authenticate } from "../lib/signInAction";

const LoginPage = () => {

    const [errorMessage, dispatch] = useFormState(authenticate, "");

    return <form action={dispatch}>
        {errorMessage && <div>{errorMessage}</div>}
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