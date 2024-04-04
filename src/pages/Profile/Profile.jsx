import Account from '../../components/Account/Account'
import Header from '../../components/Header/Header'
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import styles from './Profile.module.scss'
import Footer from '../../components/Footer/Footer'
import SteamLogin from '../../components/SteamLogin/SteamLogin'
import TradeLink from '../../components/TradeLink/TradeLink'
import { useSelector } from 'react-redux'
import MatchHistory from '../../components/MatchHistory/MatchHistory'
import TradeLinkHelp from '../../components/TradeLinkHelp/TradeLinkHelp'
import { useState } from 'react'

const Profile = () => {
  const user = useSelector(state => state.auth.user)

  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showTradeHep, setShowTradeHelp] = useState(false)

  const handleTradeClick = () => {
    document.body.style.overflow = 'hidden'
    setIsFormOpen(true)
    setShowTradeHelp(true)
  }

  const closeForm = () => {
    document.body.style.overflow = 'auto'
    setIsFormOpen(false)
    setShowTradeHelp(false)
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <HeaderMob />
      <Account />
      <div className={`${styles.container} container-main ${styles.links}`}>
        {
          user?.steam_id ?
            <MatchHistory /> :
            <SteamLogin />
        }
        <TradeLink handleTradeClick={handleTradeClick}/>
      </div>

      <Footer />
      {isFormOpen && <TradeLinkHelp closeForm={closeForm}/>}
    </div>
  )
}

export default Profile