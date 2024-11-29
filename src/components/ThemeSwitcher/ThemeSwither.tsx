import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const themeTitle = isDark ? 'Dark' : 'Light';
  const ThemeIcon = isDark ? FaMoon : FaSun;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [isDark]);

  const handleClickToggleTheme = () => {
    setIsDark(!isDark);
  }

  return (
    <button onClick={handleClickToggleTheme} className={styles.themeSwither}>
      <span className={styles.themeSwitherTitle}>{themeTitle}</span>
      <ThemeIcon className={styles.themeSwitherIcon}/>
    </button>
  )
}
