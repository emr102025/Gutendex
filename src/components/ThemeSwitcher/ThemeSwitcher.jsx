import { useTheme } from "../Context/ThemeContext.jsx";
import styles from "../Header/Header.module.css";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button className={styles.theme} onClick={toggleTheme}>
        Mode: {theme}
      </button>
    </>
  );
}
