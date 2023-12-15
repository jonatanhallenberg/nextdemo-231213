"use client"

import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const TodoList = ({ todos, setTodos }) => {

    const { setMode } = useContext(ThemeContext);

    const addTodo = () => {
        //todos.push("Ny todo");

        setTodos([...todos, "Ny todo"]);
    }

    return (
        <>
            <ul>{todos.map(todo => <li key={todo}>{todo}</li>)}</ul>
            <button onClick={() => addTodo()}>Add todo</button>
            <button onClick={() => setMode("light")}>Set light mode</button>
        </>
    )

}