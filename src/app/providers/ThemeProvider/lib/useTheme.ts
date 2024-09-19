import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        if (setTheme) {
            const newTheme = theme === Theme.PRIMARY ? Theme.SECONDARY : Theme.PRIMARY;
            setTheme(newTheme);
            localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        } else {
            console.error("setTheme is undefined");
        }
    };

    return {
        theme: theme ?? Theme.PRIMARY,
        toggleTheme,
    };
}
