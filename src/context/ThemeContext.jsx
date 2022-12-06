import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }){
    const [theme, setTheme] = useState("light"); 
	const toggleTheme = () => setTheme(curr => curr === "light" ? "dark" : "light");
	const data = { theme, toggleTheme }
    
    return(
        <ThemeContext.Provider value={data}>
            { children }
        </ThemeContext.Provider>
    )
}


