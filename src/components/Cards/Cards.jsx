import styles from './Cards.module.scss'
import quests from '../../assets/images/cards/quests.png'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Cards = () => {
  const { t } = useTranslation('main')

  return (
    <div className={`${styles.container} container-main ${styles.links}`}>
      <div className={styles.wrapper}>
        <NavLink to='/quests' 
                 className={`${styles.card} ${styles.quests}`}>
          {t('quests')}
        </NavLink>
        <NavLink to='/shop'
                 className={`${styles.card} ${styles.shop}`}>
          {t('shop')}
        </NavLink>
        <NavLink to='/profile'
                 className={`${styles.card} ${styles.profile}`}>
          Профиль
        </NavLink>
        <NavLink to='https://parimatch.kz/'
                 target='_blank'
                 className={`${styles.card} ${styles.parimatch}`}>
          Parimatch
        </NavLink>
      </div>
    </div>
  )
}

export default Cards