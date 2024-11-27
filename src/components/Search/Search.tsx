import { FaSearch } from 'react-icons/fa';
import { Button } from 'components/Button';
import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export const Search = ({hasError, onSubmit}: SearchProps) => {
  return (
    <form onSubmit={(e) => onSubmit(e.currentTarget.username.value)}>
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <FaSearch className={styles.searchIcon}/>
        </label>
        <input
          type="text"
          id='search'
          name='username'
          placeholder='Enter GitHub username'
          autoComplete='off'
          className={styles.textField}/>
        {hasError && (
          <div className={styles.error}>
            Not found
          </div>
        )}
        <Button text={'Search'}/>
      </div>
    </form>
  )
}
