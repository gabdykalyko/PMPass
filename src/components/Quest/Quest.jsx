import styles from './Quest.module.scss'

const Quest = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={props.img} alt="" />
      </div>

      <div className={styles.chestTitleWrapper}>
        <div className={styles.chestTitle}>
          <div className={styles.chestName}>
            {props.chest}
          </div>
          <div className={`${styles.chestStatus} ${props.status === 'Активен' ? styles.chestStatusActive : props.status === 'Скоро' ? styles.chestStatusSoon : styles.chestStatusCompleted}`}>
            {props.status}
          </div>
        </div>
        <div className={styles.chestPrice}>
          {props.price}
        </div>
      </div>

      <div className={styles.questName}>
        {props.name}
      </div>
      <div className={styles.questTask}>
        {props.task}
      </div>

      <div className={styles.labels}>
        {props.labels.map((label, index) => (
          <div className={`${styles.label} ${label === 'Parimatch' ? styles.pm : styles.dota}`}>
            {label}
          </div>
        ))}
      </div>

      <div className={styles.btn}>
          <button>
            Начать квест
          </button>
      </div>
    </div>
  )
}

export default Quest