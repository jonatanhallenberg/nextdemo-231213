import { createContext } from 'react';

// Kunna hämta ett värde på mode som kan vara dark / light
// Kunna uppdatera värdet på mode som kan vara dark / light, med setMode()

//export type ModeValue = "dark" | "light"

type ThemeContextType = {
    mode: "dark" | "light",
    setMode: (mode: "dark" | "light") => void,
}

export type ModeValues = ThemeContextType["mode"];

export const ThemeContext = createContext<ThemeContextType>({
    mode: "dark",
    setMode: (newMode: string) => {}
});