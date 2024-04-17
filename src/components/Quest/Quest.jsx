import { useSelector } from 'react-redux'
import styles from './Quest.module.scss'
import defaultQuest from '../../assets/images/quests/default.png'

const Quest = ({ quest, onRegisterClick }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  console.log(quest)
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <div className={styles.img}>
          <img src={quest.img ? quest.img : defaultQuest} alt="" />

          {/* <div className={styles.chestPrice}>
            {quest.rewards[0] && quest.rewards[0].name}
          </div>
          <div className={styles.price}>
          {quest.rewards[0] && quest.rewards[0].name}
          </div> */}
        </div>
      </div>

      <div className={styles.chestTitleWrapper}>
        <div className={styles.chestTitle}>
          <div className={styles.chestName}>
          {quest.rewards[0] && quest.rewards[0].name}
          </div>
          <div className={`${styles.chestStatus} ${quest.status === 'Активен' ? styles.chestStatusActive : quest.status === 'Скоро' ? styles.chestStatusSoon : styles.chestStatusCompleted}`}>
            {quest.status}
          </div>
        </div>
      </div>

      <div className={styles.questName}>
        {quest.name}
      </div>
      <div dangerouslySetInnerHTML={{ __html: quest.description }} className={styles.questTask}>
        {/* {quest.description} */}
      </div>

      <div className={styles.labels}>
        {/* {props.labels && props.labels.map((label, index) => (
          <div className={`${styles.label} ${label === 'Parimatch' ? styles.pm : styles.dota}`}
            key={index}>
            {label}
          </div>
        ))} */}
        <div className={`${styles.label} ${styles.pm}`}>
            Parimatch
          </div>
      </div>

      {
        isAuthenticated ?
          <div className={styles.btn}>
            <button>
              Начать квест
            </button>
          </div>
          : <div onClick={onRegisterClick}
            className={styles.btn}>
            <button>
              Начать квест
            </button>
          </div>
      }

    </div>
  )
}

export default Quest