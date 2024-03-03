import styles from './Banner.module.scss'
import steam from '../../assets/images/social/steam.svg'
import dota from '../../assets/images/social/dota.svg'
import Button from '../Button/Button'

const Banner = () => {
  return (
    <div className={styles.wrapper}>

      <div className={`${styles.container} container-main`}>
        <div className={styles.title}>
          Farmea Los Regalos
        </div>
        <div className={styles.subtitle}>
          Подключите Париматч к Steam и начните!
        </div>
        <div>
          <Button title="Присоединиться"/>
        </div>
        <div className={styles.platforms}>
          <div>
            <img src={steam} alt="" />
          </div>
          <div>
            <img src={dota} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Banner