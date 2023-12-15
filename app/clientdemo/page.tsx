"use client"

import { useState } from "react";
import { Counter } from "../components/Counter";
import { TodoList } from "../components/TodoList";
import { Timer } from "../components/Timer";
import { Fakestore } from "../components/Fakestore";
import { ThemeContext } from '../context/ThemeContext';
import { ThemeContextProvider } from "../context/ThemeContextProvider";

const ClientDemo = () => {

    const [todos, setTodos] = useState([]);

    return (
        <ThemeContextProvider>
            <div className="flex flex-row">
                {/* <div>
                    <Counter numberOfTodos={todos.length} />
                </div>
                <div>
                    <TodoList todos={todos} setTodos={setTodos} />
                </div>
                <Timer /> */}
                <Fakestore />
            </div>
        </ThemeContextProvider>
    )
}

export default ClientDemo;