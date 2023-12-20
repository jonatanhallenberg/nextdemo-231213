import { useCounter } from "../hooks/useCounter";

export const UseCounterDemo = () => {

    const { count, increment, decrement } = useCounter(99);

    throw new Error("Något gick fel!");

    return <div>
        <div>Count: {count}</div>
        <button onClick={() => increment()}>Öka</button>
        <button onClick={() => decrement()}>Minska</button>
    </div>;

}