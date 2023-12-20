import { Todo, TodoSchema } from "./types";

export const postTodo = async (todo: Todo) => {

    const res = await fetch('https://65829d9b02f747c83679b58c.mockapi.io/todos', {
        method: "POST"
    });
    const newTodo = await res.json();

    const validatedTodo = TodoSchema.parse(newTodo);

    return validatedTodo;

}