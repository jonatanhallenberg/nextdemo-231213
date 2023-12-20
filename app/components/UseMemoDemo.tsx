"use client"

import { useMemo, useState } from "react";

const expensiveCalculation = (num, howSlow) => {
    for (let i = 0; i < howSlow; i++) {
        num += 1;
    }
    return num;
};

export const TodoList = ({ howSlow }: { howSlow: number}) => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");
    
    console.time("Calculating...");
    const calculation = expensiveCalculation(count, howSlow);
    console.timeEnd("Calculating...");

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, text]);
        setText("");
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <input type="text" onChange={(e) => setText(e.target.value)} />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );



}