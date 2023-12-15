"use client"

import { useState } from "react";
import { Counter } from "../components/Counter";
import { TodoList } from "../components/TodoList";
import { Timer } from "../components/Timer";
import { Fakestore } from "../components/Fakestore";

const ClientDemo = () => {

    const [todos, setTodos] = useState([]);

    return (
        <>
            <div className="flex flex-row">
                {/* <div>
                    <Counter numberOfTodos={todos.length} />
                </div>
                <div>
                    <TodoList todos={todos} setTodos={setTodos} />
                </div> */}
                {/* <Timer /> */}
                <Fakestore />
            </div>
        </>
    )
}

export default ClientDemo;