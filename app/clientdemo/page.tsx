"use client"

import { useState } from "react";
import { Counter } from "../components/Counter";
// import { TodoList } from "../components/TodoList";
import { Timer } from "../components/Timer";
import { Fakestore } from "../components/Fakestore";
import { ThemeContext } from '../context/ThemeContext';
import { ThemeContextProvider } from "../context/ThemeContextProvider";
import { UseCounterDemo } from "../components/UseCounterDemo";
import { ErrorBoundary } from "react-error-boundary";
import { TodoList } from "../components/UseMemoDemo";
import UseCallbackDemo from '../components/UseCallbackDemo';

const ClientDemo = () => {

    const [todos, setTodos] = useState([]);

    return (
        <ThemeContextProvider>
            <div className="flex flex-row">
                {/* <UseCallbackDemo /> */}
                <TodoList howSlow={1000000000} />
                <TodoList howSlow={100000000} />
                {/* <ErrorBoundary fallback={<div>Något gick fel!</div>}>
                    <UseCounterDemo />
                </ErrorBoundary>     
                <div>Något utanför error boundary</div> */}
                {/* <div>
                    <Counter numberOfTodos={todos.length} />
                </div>
                <div>
                    <TodoList todos={todos} setTodos={setTodos} />
                </div> */}
                {/* <Timer /> */}
                {/* <Fakestore /> */}

            </div>
        </ThemeContextProvider>
    )
}

export default ClientDemo;