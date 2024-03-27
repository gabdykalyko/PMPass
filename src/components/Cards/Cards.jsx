import styles from './Cards.module.scss'
import quests from '../../assets/images/cards/quests.png'
import { NavLink } from 'react-router-dom'

const Cards = () => {
  return (
    <div className={`${styles.container} container-main ${styles.links}`}>
      <div className={styles.wrapper}>
        <NavLink to='/quests' 
                 className={`${styles.card} ${styles.quests}`}>
          Квесты
        </NavLink>
        <NavLink to='/shop'
                 className={`${styles.card} ${styles.shop}`}>
          Магазин
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