import { useState } from "react"
import styles from './Help.module.scss'
import Header from "../../components/Header/Header"
import HeaderMob from "../../components/HeaderMob/HeaderMob"
import Footer from "../../components/Footer/Footer"
import Offer from "../../components/modals/Offer/Offer"
import Bonus from "../../components/modals/Bonus/Bonus"
import Form from '../../components/modals/Form/Form'
import { NavLink } from "react-router-dom"
import BackButton from "../../components/BackButton/BackButton"
import telegram from '../../assets/images/social/telegram.svg'
import phone from '../../assets/images/social/phone.svg'
import { useTranslation } from 'react-i18next'

const Help = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [showHelp, setShowHelp] = useState(false)
  const [showOffer, setShowOffer] = useState(false)
  const [showBonus, setShowBonus] = useState(false)

  const { t } = useTranslation(['main', 'faq'])

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

  const closeForm = () => {
    document.body.style.overflow = 'auto'
    setIsFormOpen(false)
    setShowHelp(false)
    setShowOffer(false)
    setShowBonus(false)
  }

  return (
    <div>
      <Header onLoginClick={handleLoginClick}
              onRegisterClick={handleRegisterClick}/>
      <HeaderMob onLoginClick={handleLoginClick}
                 onRegisterClick={handleRegisterClick}/>
      <div className={`${styles.container} container-main`}>
        <BackButton />
        <div className={styles.wrapper}>
          <div className={styles.content}>          
            <div className={styles.title}>
              {t('help')} 
            </div>
            <div className={styles.info}>
              {t('faq:answer7')}
            </div>
            <div className={styles.help}>
              <NavLink to={'https://t.me/PMKzSupport_bot'}
                      target='_blank'>
                <img src={telegram} alt="" />
              </NavLink>
              <NavLink to={'tel:9933'}>
                <img src={phone} alt="" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {isFormOpen ? <Form showLogin={showLogin}
                           closeForm={closeForm}
                           onLoginClick={handleLoginClick}
                           onRegisterClick={handleRegisterClick}
                           onHelpClick={handleHelpClick}
                           showHelp={showHelp}
                           onOfferClick={handleOfferClick}
                           onBonusClick={handleBonusClick}/>
                          : showOffer ? <Offer closeForm={closeForm}
                                               onRegisterClick={handleRegisterClick}/> 
                          : showBonus ? <Bonus closeForm={closeForm}
                                               onRegisterClick={handleRegisterClick}/> : ''}
    </div>
  )
}

export default Help