import { NavLink } from 'react-router-dom'
import styles from './Intro.module.scss'
import arrow from '../../../assets/images/icons/arrow-right.svg'
import first from '../../../assets/images/welcome/first-mob.png'

const Intro = ({ onClickNext }) => {
  return (
    <div className={`${styles.container} container-main`}>
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
        <div onClick={onClickNext}
             className={styles.btn}>
          <button>
            Дальше
            <img src={arrow} alt="" />
          </button>
        </div>
        <div className={styles.banner}>
          <img src={first} alt="" />
        </div>
      </div>
      <div className={styles.backgroundImg}>

      </div>
    </div>
  )
}

export default Intro