import { UserStatCol } from 'components/UserStatCol';
import { LocalGithubUser } from 'types';
import styles from './UserStat.module.scss';

interface UserStatProps extends Pick<
  LocalGithubUser,
  'repos' | 'following' | 'followers'> {}

export const UserStat = ({repos, following, followers}: UserStatProps) => {
  return (
    <div className={styles.userStat}>
      <UserStatCol title={'Repos'} count={repos}/>
      <UserStatCol title={'Following'} count={following}/>
      <UserStatCol title={'Followers'} count={followers}/>
    </div>
  )
}
