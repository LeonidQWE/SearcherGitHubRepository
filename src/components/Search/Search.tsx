import { FaSearch } from 'react-icons/fa';
import { Button } from 'components/Button';
import styles from './Search.module.scss';

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
}

export const Search = ({hasError, onSubmit}: SearchProps) => {
  const handleSubmitSearch = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value
    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  }

  return (
    <form onSubmit={handleSubmitSearch}>
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
