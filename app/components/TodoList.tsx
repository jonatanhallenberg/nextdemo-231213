"use client"

import { useState } from "react";

export const TodoList = ({ todos, setTodos }) => {

    const addTodo = () => {
        //todos.push("Ny todo");

        setTodos([...todos, "Ny todo"]);

    }

    return (
        <>
            <ul>{todos.map(todo => <li key={todo}>{todo}</li>)}</ul>
            <button onClick={() => addTodo()}>Add todo</button>
        </>
    )

}