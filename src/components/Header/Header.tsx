import { ThemeSwitcher } from 'components/ThemeSwitcher';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <h2 className={styles.headerText}>Searcher Github<br/> Repositories</h2>
      <ThemeSwitcher />
    </div>
  )
}
