"use client"

import { getTodos } from '@/app/api/todo/getTodos';
import Link from 'next/link';
import { useQuery } from 'react-query';

const TodoPage = () => {
    //    const todos = await getTodos();

    const { data: todos, error, isLoading } = useQuery('todos', getTodos);

    return <>
        <Link href="/todo/add">Add todo</Link>
        {error && <span>{error.toString()}</span>}
        {isLoading && <span>Loading...</span>}
        {!error && !isLoading && <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title}</li>)}
        </ul>}

    </>
}

export default TodoPage;