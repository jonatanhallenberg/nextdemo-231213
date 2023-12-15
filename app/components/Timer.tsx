import { useEffect, useState } from "react";

export const Timer = () => {

    const [secondsLeft, setSecondsLeft] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft((prevValue) => prevValue - 1)
        }, 1000)

        return () => {
            clearInterval(interval);
        }

    }, [])

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        // Uppstädning körs när komponenten unmountas
        // eller när dependencies ändras
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return <>
        <p>sekunder kvar: {secondsLeft}</p>
        <button onClick={() => setSecondsLeft(60)}>Starta om</button>
        <p>Fönstrets bredd är: {width}</p>
    </>

}