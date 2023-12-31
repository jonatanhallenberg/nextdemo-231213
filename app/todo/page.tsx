import Link from "next/link";
import { getTodos } from "../api/todo/getTodos"

const TodoPage = async () => {
    throw new Error("Todo kunde inte laddas")
    const todos = await getTodos();

    return <>
    <Link href="/todo/add">Add todo</Link>
    <ul>
        {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
    </ul>
    
    </>

}

export default TodoPage;