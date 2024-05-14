import { useSelector } from 'react-redux'
import styles from './Quest.module.scss'
import defaultQuest from '../../assets/images/quests/default.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Quest = ({ quest, onLoginClick }) => {
  const { t } = useTranslation('main')

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper} style={{ backgroundImage: `url(${quest.image ? quest.image : defaultQuest})` }}>
        {/* <img src={quest.image ? quest.image : defaultQuest} alt="" /> */}
      </div>

      <div className={styles.chestTitleWrapper}>
        <div className={styles.chestTitle}>
          <div className={styles.chestName}>
            {quest.rewards[0] && quest.rewards[0].name}
          </div>
          {
            quest.status ?
              <div className={`${styles.chestStatus} ${quest.status === 'In progress' ? styles.chestStatusActive : quest.status === 'No progress' ? styles.chestStatusSoon : styles.chestStatusCompleted}`}>
                {quest.status === 'Active' ? t('activated') : quest.status === 'No progress' ? t('soon') : t('end')}
              </div> :
              ''
          }
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
          <NavLink to={`${quest.url ? quest.url : 'https://parimatch.kz/ru/gamification/daily-quests'}`}
            target='_blank'
            className={styles.btn}>
            <button>
              {t('begin_quest')}
            </button>
          </NavLink>
          : <div onClick={onLoginClick}
            className={styles.btn}>
            <button>
              {t('begin_quest')}
            </button>
          </div>
      }

    </div>
  )
}

export default Quest