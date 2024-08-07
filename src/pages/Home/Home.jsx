import { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Faq from '../../components/Faq/Faq'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import Prizes from '../../components/Prizes/Prizes'
import Quests from '../../components/Quests/Quests'
import Rules from '../../components/Rules/Rules'
import styles from './Home.module.scss'
import Form from '../../components/modals/Form/Form'
import Offer from '../../components/modals/Offer/Offer'
import Bonus from '../../components/modals/Bonus/Bonus'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../components/Cards/Cards'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../components/Toast/Toast'
import { updateAuth } from '../../slices/authSlice'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import OfferRules from '../../components/modals/OfferRules/OfferRules'
import OfferRulesAccept from '../../components/modals/OfferRulesAccept/OfferRulesAccept'

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [showHelp, setShowHelp] = useState(false)
  const [showOffer, setShowOffer] = useState(false)
  const [showBonus, setShowBonus] = useState(false)
  const [showOfferRules, setShowOfferRules] = useState(false)

  const { t } = useTranslation(['main', 'notifications'])

  const handleLoginClick = () => {
    document.body.style.overflow = 'hidden'
    setIsFormOpen(true)
    setShowLogin(true)
    setShowHelp(false)
  }

  const handleRegisterClick = () => {
    document.body.style.overflow = 'hidden'
    setIsFormOpen(true)
    setShowLogin(false)
    setShowOffer(false)
    setShowBonus(false)
    setShowOfferRules(false)
  }

  const handleHelpClick = () => {
    setShowHelp(true)
  }

  const handleOfferClick = () => {
    setIsFormOpen(false)
    setShowOffer(true)
  }

  const handleBonusClick = () => {
    setIsFormOpen(false)
    setShowBonus(true)
  }

  const handleOfferRulesClick = () => {
    setIsFormOpen(false)
    setShowOfferRules(true)
  }

  const closeForm = () => {
    document.body.style.overflow = 'auto'
    setIsFormOpen(false)
    setShowHelp(false)
    setShowOffer(false)
    setShowBonus(false)
    setShowOfferRules(false)
  }

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const publicOfferAccepted = useSelector(state => state?.auth?.user?.public_offer_accepted)

  const dispatch = useDispatch()

  useEffect(() => {
    const currentURL = window.location.href

    const firstLogin = async () => {
      try {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/profile`, {
          "first_login": false
        }, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        })
  
        if (response.data) {
          dispatch(updateAuth({
            isAuthenticated: true,
            user: response.data
          }))
  
          localStorage.setItem('currentPage', 1)
        }
  
      } catch (error) {
        console.error(error);
      }
    }

    if (currentURL.includes('?steam_auth=success')) {
      firstLogin()
      toast(<Toast message={t('notifications:steam_attached')} />, {
        hideProgressBar: true
      });
    }
  }, []);

  return (
    <div className={`${styles.container} ${ isAuthenticated ? styles.auth : styles.purple}`}>
      <Header onLoginClick={handleLoginClick}
              onRegisterClick={handleRegisterClick}/>
      <HeaderMob onLoginClick={handleLoginClick}
                 onRegisterClick={handleRegisterClick}/>
      {
        isAuthenticated ?
        <Cards />
        : 
        <div>
          <Banner onRegisterClick={handleRegisterClick}/>
          <Rules />
          <Prizes />
          <Quests />
        </div>
      }
      <Faq />
      <Footer />
      {isFormOpen ? <Form showLogin={showLogin}
                           closeForm={closeForm}
                           onLoginClick={handleLoginClick}
                           onRegisterClick={handleRegisterClick}
                           onHelpClick={handleHelpClick}
                           showHelp={showHelp}
                           onOfferClick={handleOfferClick}
                           onBonusClick={handleBonusClick}
                           showOfferRules={showOfferRules}
                           onOfferRulesClick={handleOfferRulesClick}/>
                          : showOffer ? <Offer closeForm={closeForm}
                                               onRegisterClick={handleRegisterClick}/> 
                          : showBonus ? <Bonus closeForm={closeForm}
                                               onRegisterClick={handleRegisterClick}/>
                          : showOfferRules ? <OfferRules closeForm={closeForm}
                                                         onRegisterClick={handleRegisterClick}/> : ''}
      {isAuthenticated && !publicOfferAccepted && <OfferRulesAccept />}
    </div>
  )
}

export default Home;