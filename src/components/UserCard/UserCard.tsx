import { UserStat } from 'components/UserStat'
import { LocalGithubUser } from 'types'
import { UserTitle } from 'components/UserTitle'
import { UserImg } from 'components/UserImg'
import styles from './UserCard.module.scss'
import { UserInfo } from 'components/UserInfo'

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
          created={props.created}
        />
        <p className={`${styles.bio} ${props.bio ? '' : styles.empty}`}>
          {props.bio ? props.bio : 'This profile has not bio'}
        </p>
        <UserStat
          repos={props.repos}
          following={props.following}
          followers={props.followers}
        />
        <UserInfo
          location={props.location}
          twitter={props.twitter}
          blog={props.blog}
          company={props.company}
        />
      </div>
    </div>
  )
}
