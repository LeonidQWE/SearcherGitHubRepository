import { UserStat } from 'components/UserStat'
import { LocalGithubUser } from 'types'
import styles from './UserCard.module.scss'
import { UserTitle } from 'components/UserTitle'
import { UserImg } from 'components/UserImg'

interface UserCardProps extends LocalGithubUser {}

export const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.card}>
      <div>
        <UserImg avatar={props.avatar}/>
      </div>
      <div className={styles.content}>
        <UserTitle
          name={props.name}
          login={props.login}
          created={props.created}/>
        <UserStat
          repos={props.repos}
          following={props.following}
          followers={props.followers}/>
      </div>
    </div>
  )
}
