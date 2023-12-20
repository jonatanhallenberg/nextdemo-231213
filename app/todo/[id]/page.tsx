import { getTodoById } from "@/app/api/todo/getTodoById";
import { notFound } from "next/navigation";

const Todo = async ({ params }) => {

    try {
        const todo = await getTodoById(params.id);
        return <>
            <h1>Todo page</h1>
            <div>{todo.title}</div></>
    } catch {
        notFound()
    }

}

export default Todo;