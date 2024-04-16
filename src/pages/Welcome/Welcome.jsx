import WelcomeHeader from './WelcomeHeader/WelcomeHeader'
import styles from './Welcome.module.scss'
import arrow from '../../assets/images/icons/arrow-right.svg'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
    <div className={`${styles.container} container-main`}>
      <WelcomeHeader />

      <div className={styles.wrapper}>
        <div className={styles.title}>
          <span className={styles.yellow}>PM-Pass</span> - ваш пропуск в мир крутых призов
        </div>
        <div className={styles.info}>
          <div>
            Это официальный продукт компании Париматч.
          </div>
          <div className={styles.txt}>
            Выполняйте задания на сайте parimatch.kz и в ваших любимых играх таких как Dota 2, зарабатывайте бонусные баллы и обменивайте их на скины и другие предметы в магазине.
          </div>
        </div>
        <NavLink to='/showquests'
                 className={styles.btn}>
          <button>
            Дальше
            <img src={arrow} alt="" />
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default Welcome