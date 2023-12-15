import { useState } from "react";
import { ModeValues, ThemeContext } from "./ThemeContext"

export const ThemeContextProvider = ({ children }) => {

    const [mode, setMode] = useState<ModeValues>("dark");

    const themeContext = {
        mode,
        setMode
    }

    return <ThemeContext.Provider value={themeContext}>
        {children}
    </ThemeContext.Provider>

}