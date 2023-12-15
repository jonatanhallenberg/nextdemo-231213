"use client"
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Counter = ({ numberOfTodos }) => {

    const { mode } = useContext(ThemeContext);

    const [newName, setNewName] = useState("Ford");

    const [cars, setCars] = useState([
        {
            id: 1,
            manufacturer: "Volvo",
            model: "V70"
        },
        {
            id: 2,
            manufacturer: "Saab",
            model: "9000"
        }
    ]);

    const updateManufacturerByCarId = (id) => {
        setCars(
            cars.map(car => car.id === id ? { ...car, manufacturer: newName } : { ...car })
        )
    }

    const removeCarById = (id) => {
        setCars(
            //Vi behåller alla bilar utom den som har angett id
            cars.filter(car => car.id !== id)
        )
    }

    return <>Counter<br />
        <ul>
            {cars.map((car, index) => <li key={car.id}>{car.manufacturer} ({car.model})</li>)}
        </ul>
        Rename Volvo: <input type="text" value={newName} onChange={(event) => setNewName(event.target.value)} />
        <br />
        <button onClick={() => updateManufacturerByCarId(1)}>Uppdatera namn på Volvo</button>
        <button onClick={() => removeCarById(1)}>Ta bort Volvo</button>

        <p>Number of todos: {numberOfTodos}</p>
        <p>Theme mode: {mode}</p>
    </>
}