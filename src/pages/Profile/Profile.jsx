import Account from '../../components/Account/Account'
import Header from '../../components/Header/Header'
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import styles from './Profile.module.scss'
import Footer from '../../components/Footer/Footer'
import SteamLogin from '../../components/SteamLogin/SteamLogin'
import TradeLink from '../../components/TradeLink/TradeLink'
import { useSelector } from 'react-redux'
import MatchHistory from '../../components/MatchHistory/MatchHistory'

const Profile = () => {
  const user = useSelector(state => state.auth.user)

  return (
    <div>
      <Header />
      <HeaderMob />
      <Account />
      <div className={`${styles.container} container-main ${styles.links}`}>
        {
          user?.steam_id ?
            <MatchHistory /> :
            <SteamLogin />
        }
        <TradeLink />
      </div>
      <Footer />
    </div>
  )
}

export default Profile