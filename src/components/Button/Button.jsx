import styles from './Button.module.scss'

const Button = (props) => {
  const colorClass = props.color ? styles[props.color] : styles.yellow;

  return (
    <button className={`${styles.btn} ${colorClass}`}>
      {props.title}
    </button>
  )
}

export default Button