import styles from './Rule.module.scss'

const Rule = (props) => {
  return (
    <div className={styles.rule}>
      <div className={styles.img}>
        <img src={props.src} alt="" />
      </div>
      <div className={styles.title}>
        {props.title}
      </div>
      <div className={styles.txt}>
        {props.txt}
      </div>
    </div>
  )
}

export default Rule