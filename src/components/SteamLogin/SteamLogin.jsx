import styles from './SteamLogin.module.scss'
import person from '../../assets/images/icons/person.svg'
import warning from '../../assets/images/icons/warning.svg'
import steam from '../../assets/images/icons/steam-btn.svg'

const SteamLogin = () => {
  return (
    <div className={styles.steam}>
      <div className={styles.title}>
        <img src={person} alt="" />
        Steam Login
      </div>
      <div className={styles.txt}>
        <img src={warning} alt="" />
        Ваш Steam aккаунт не привязан
      </div>
      <div className={styles.info}>
        Привяжите свой Steam аккаунт.
      </div>
      <div className={styles.btn}>
        <button>
          <img src={steam} alt="" />
          Steam login
        </button>
      </div>
    </div>
  )
}

export default SteamLogin