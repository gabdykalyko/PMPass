import Account from '../../components/Account/Account'
import Header from '../../components/Header/Header'
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import styles from './Profile.module.scss'
import Footer from '../../components/Footer/Footer'
import SteamLogin from '../../components/SteamLogin/SteamLogin'

const Profile = () => {
  return (
    <div>
      <Header />
      <HeaderMob />
      <Account />
      <div className={`${styles.container} container-main ${styles.links}`}>
        <SteamLogin />
      </div>
      <Footer />
    </div>
  )
}

export default Profile