import { LocalGithubUser } from "types"
import styles from './UserTitle.module.scss'

interface UserTitleProps extends Pick<
  LocalGithubUser,
  'name' | 'login' | 'created'
> {}

const localDate = Intl.DateTimeFormat('en-Gb', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
})

export const UserTitle = ({name, login, created}: UserTitleProps) => {
  const correctDate = localDate.format(new Date(created))

  return (
    <div className={styles.userTitle}>
      <h2 className={styles.userTitleName}>{name}</h2>
      <h3 className={styles.userTitleLogin}>{login}</h3>
      <p className={styles.userTitleDate}>{correctDate}</p>
    </div>
  )
}
