import { useSelector } from 'react-redux'
import styles from './Quest.module.scss'
import defaultQuest from '../../assets/images/quests/default.png'
import { NavLink } from 'react-router-dom'

const Quest = ({ quest, onRegisterClick }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  console.log(quest)

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper} style={{backgroundImage: `url(${quest.image ? quest.image : defaultQuest})`}}>
        {/* <img src={quest.image ? quest.image : defaultQuest} alt="" /> */}
      </div>

      <div className={styles.chestTitleWrapper}>
        <div className={styles.chestTitle}>
          <div className={styles.chestName}>
            {quest.rewards[0] && quest.rewards[0].name}
          </div>
          <div className={`${styles.chestStatus} ${quest.status === 'Активен' ? styles.chestStatusActive : quest.status === 'No progress' ? styles.chestStatusSoon : styles.chestStatusCompleted}`}>
            {quest.status === 'Active' ? 'Активен' : quest.status === 'No progress' ? 'Скоро' : 'Завершён'}
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
          <NavLink to={`https://parimatch.kz/ru/gamification/daily-quests/${quest.id}/0`}
            target='_blank'
            className={styles.btn}>
            <button>
              Начать квест
            </button>
          </NavLink>
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