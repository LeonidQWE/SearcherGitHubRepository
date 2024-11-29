import { UserStat } from 'components/UserStat'
import { LocalGithubUser } from 'types'
import styles from './UserCard.module.scss'

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.card}>
      <UserStat
        repos={props.repos}
        following={props.following}
        followers={props.followers}/>
    </div>
  )
}
