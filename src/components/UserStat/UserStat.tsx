import { LocalGithubUser } from 'types';
import styles from './UserStat.module.scss';

interface UserStatProps extends Pick<
  LocalGithubUser,
  'repos' | 'following' | 'followers'> {}

export const UserStat = ({repos, following, followers}: UserStatProps) => {
  return (
    <div className={styles.userStat}>
      <div>
        <span>Repos</span>
        <span>{repos}</span>
      </div>

      <div>
        <span>Following</span>
        <span>{following}</span>
      </div>

      <div>
        <span>Followers</span>
        <span>{followers}</span>
      </div>
    </div>
  )
}
