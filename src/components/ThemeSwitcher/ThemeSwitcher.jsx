import { useTheme } from "../Context/ThemeContext.jsx";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button className={theme} onClick={toggleTheme}>
        Mode: {theme}
      </button>
    </>
  );
}
