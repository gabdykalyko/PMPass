import styles from './SteamLogin.module.scss'
import person from '../../assets/images/icons/person.svg'
import warning from '../../assets/images/icons/warning.svg'
import steam from '../../assets/images/icons/steam-btn.svg'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SteamLogin = () => {
  const { t } = useTranslation(['main', 'profile'])

  return (
    <div className={styles.steam}>
      <div className={styles.title}>
        <img src={person} alt="" />
        Steam Login
      </div>
      <div className={styles.txt}>
        <img src={warning} alt="" />
        {t('profile:steam_is_not_attached')}
      </div>
      <div className={styles.info}>
      {t('attach_steam')}
      </div>
      <div className={styles.btn}>
        <NavLink to={`${process.env.REACT_APP_API_URL}/auth/steam`}>
          <button>
            <img src={steam} alt="" />
            Steam login
          </button>
        </NavLink>
      </div>
    </div>
  )
}

export default SteamLogin