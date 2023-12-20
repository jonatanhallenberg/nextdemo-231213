import { Todo } from "./types";

export const getTodoById = async (id: string): Promise<Todo> => {

    const res = await fetch(`https://65829d9b02f747c83679b58c.mockapi.io/todos/${id}`);

    if (!res.ok) {
        throw new Error("Todo not found");
    }
    
    const todo = await res.json();
    
    return todo as Todo;

}