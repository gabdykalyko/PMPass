import Button from '../../../components/Button/Button'
import WelcomeHeader from '../WelcomeHeader/WelcomeHeader'
import styles from './ShopQuests.module.scss'
import arrow from '../../../assets/images/icons/arrow-right.svg'
import arrowYellow from '../../../assets/images/icons/arrow-yellow.svg'
import second from '../../../assets/images/welcome/second.png'

const ShopQuests = ({ onClickPrevious, onClickNext }) => {
  return (
    <div className={`${styles.container} container-main`}>
      <WelcomeHeader />

      <div className={styles.wrapper}>
        <div onClick={onClickPrevious}
             className={styles.back}>
          <img src={arrowYellow} alt="" />
          Назад
        </div>
        <div className={styles.title}>
          Квесты и <span className={styles.yellow}>Магазины</span>
        </div>
        <div className={styles.info}>
          <div>
            Все очень просто. Следите за доступными вам заданиями на странице Квесты.
          </div>
          <div className={styles.txt}>
            На каждом задании указано, сколько баллов вы получите. После выполнения, ваши баллы будут начислены в профиль pm-pass.
          </div>
          <div className={styles.txt}>
            Вы сможете обменять их на странице Магазин.
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
          <img src={second} alt="" />
        </div>
      </div>

      <div className={styles.backgroundImg}>

      </div>
    </div>
  )
}

export default ShopQuests