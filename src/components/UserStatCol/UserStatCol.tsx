import styles from './UserStatCol.module.scss'

interface UserStatColProps {
  title: string;
  count: number;
}

export const UserStatCol = ({title, count}: UserStatColProps) => {
  return (
    <div className={styles.userStatCol}>
      <span className={styles.userStatColTitle}>{title}</span>
      <span className={styles.userStatColCount}>{count}</span>
    </div>
  )
}
