"use client"

import { createTodo } from "@/app/lib/actions";

// 1. Lägg till ett fält för description
// 2. Uppdatera både <form> och Server action (actions.ts)
// 3. Kontrollera att värdet kommer ut i consolen när ni postar formuläret
// 4. Båda fälten ska vara validerade

const AddTodoPage = () => {

    return <>
        <h1>Add todo</h1>
        <form action={createTodo}>
            <div>
                <label htmlFor="title">Titel:</label>
                <input type="text" name="title" />
            </div>
            <button type="submit">Add todo</button>
        </form>
    </>
}

export default AddTodoPage;