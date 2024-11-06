import "./ThemeToggle.css";
import { useEffect, useState } from 'react';
import { MdSunny } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { useMediaQuery } from "react-responsive";

const ThemeToggle = () => {
    const storageKey = "theme";
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage?.getItem(storageKey);
        return savedTheme ? JSON.parse(savedTheme) : false;
    });

    useMediaQuery(
        { query: "(prefers-color-scheme: dark)" },
        undefined,
        (preferDark) => setIsDark(preferDark)
    );

    useEffect(() => {
        const theme = isDark ? "dark" : "light";
        document?.firstElementChild?.setAttribute("data-theme", theme);
        localStorage?.setItem(storageKey, JSON.stringify(isDark));
    }, [isDark]);

    return (
        <label className="theme__toggle">
            <input
              type="checkbox"
              checked={isDark}
              onChange={(e) => setIsDark(e.target.checked)}
            />
            <div className="icon__container">
                <MdSunny className="sun" />
                <CgDarkMode className="moon" />
            </div>
        </label>
    );
};

export default ThemeToggle;
