"use client"

import { State, createTodo } from "@/app/lib/actions";
import { error } from "console";
import { useFormState } from "react-dom";

// 1. Lägg till ett fält för description
// 2. Uppdatera både <form> och Server action (actions.ts)
// 3. Kontrollera att värdet kommer ut i consolen när ni postar formuläret
// 4. Båda fälten ska vara validerade

const initialState: State = {
    errors: {},
    message: null
}

const AddTodoPage = () => {

    const [errorMessage, dispatch] = useFormState(createTodo, initialState);

    console.log('errorMessage', errorMessage);

    return <>
        <h1>Add todo</h1>
        <form action={dispatch}>
            {errorMessage.message && <div style={{ color: "red" }}>{errorMessage.message}</div>}
            <div>
                <label htmlFor="title">Titel:</label>
                <input type="text" name="title" style={{ borderColor: errorMessage.errors.title ? "red" : "inherit" }} />
            </div>
            <div>
                <label htmlFor="description">Beskrivning:</label>
                <input type="text" name="description" style={{ borderColor: errorMessage.errors.description ? "red" : "inherit" }} />
            </div>
            <button type="submit">Add todo</button>
        </form>
    </>
}

export default AddTodoPage;