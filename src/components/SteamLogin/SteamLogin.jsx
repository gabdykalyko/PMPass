import styles from './SteamLogin.module.scss'
import person from '../../assets/images/icons/person.svg'

const SteamLogin = () => {
  return (
    <div className={styles.steam}>
      <div className={styles.title}>
        <img src={person} alt="" />
        Steam Login
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default SteamLogin