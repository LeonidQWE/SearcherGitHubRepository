import { LocalGithubUser } from 'types';
import styles from './UserImg.module.scss';

interface UserImgProps extends Pick<LocalGithubUser, 'avatar'>{}

export const UserImg = ({avatar}: UserImgProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.userImg} src={avatar} alt="User Avatar" />
    </div>
  )
}
