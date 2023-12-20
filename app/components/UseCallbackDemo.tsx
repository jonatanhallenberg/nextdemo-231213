import React, { useState, useCallback } from 'react';



const ChildComponent = React.memo(function ChildComponent({ onButtonClick, click }: { onButtonClick: () => void; click: number }) {
    console.log('Child component rendered:', click);
    return <button onClick={onButtonClick}>Klicka mig</button>;
});

const ParentComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [clickCount, setClickCount] = useState(0);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Använd useCallback för att undvika att skapa en ny funktion vid varje render
    //   const handleButtonClick = useCallback(() => {
    //     setClickCount((prevCount) => prevCount + 1);
    //   }, []);

    const handleButtonClick = useCallback(() => {
        setClickCount((prevCount) => prevCount + 1);
    }, []);

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <ChildComponent onButtonClick={handleButtonClick} click={clickCount} />
            <p>Antal klick: {clickCount}</p>
        </div>
    );
};

export default ParentComponent;