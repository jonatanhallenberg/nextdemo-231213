import { useState } from "react"

export const useCounter = (initialValue: number) => {

    const [ count, setCount ] = useState(initialValue);

    return {
        count,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1),
    }
}