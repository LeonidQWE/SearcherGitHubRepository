import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({text, onClick}: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  )
}
