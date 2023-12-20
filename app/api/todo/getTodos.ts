import { Todo } from "./types";

export const getTodos = async (): Promise<Todo[]> => {

    const res = await fetch('https://65829d9b02f747c83679b58c.mockapi.io/todos');
    const todos = await res.json();
    
    return todos as Todo[];

}