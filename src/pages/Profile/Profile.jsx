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
import Button from '../../components/Button/Button'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../components/Toast/Toast'

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

  {/* Тест */}
  const notify = () => {
    toast(<Toast message="Steam аккаунт прикреплен" />, {
      hideProgressBar: true
    });
  }
  {/* Тест */}

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

      {/* Тест */}
      <div className={`${styles.container} container-main ${styles.links}`}
           onClick={notify}>
        <Button title='Нажми на меня'/>
      </div>
      <ToastContainer />
      {/* Тест */}

      <Footer />
      {isFormOpen && <TradeLinkHelp closeForm={closeForm}/>}
    </div>
  )
}

export default Profile