import { useState } from 'react'
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

const Home = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(true)

  const handleLoginClick = () => {
    document.body.style.overflow = 'hidden'
    setIsFormOpen(true)
    setShowLogin(true)
  }

  const handleRegisterClick = () => {
    document.body.style.overflow = 'hidden'
    setIsFormOpen(true)
    setShowLogin(false)
  }

  const closeForm = () => {
    document.body.style.overflow = 'auto'
    setIsFormOpen(false)
  }

  return (
    <div className={styles.container}>
      <Header onLoginClick={handleLoginClick}
              onRegisterClick={handleRegisterClick}/>
      <HeaderMob onLoginClick={handleLoginClick}
                 onRegisterClick={handleRegisterClick}/>
      <Banner />
      <Rules />
      <Prizes />
      <Quests />
      <Faq />
      <Footer />
      {isFormOpen && <Form showLogin={showLogin}
                           closeForm={closeForm}
                           onLoginClick={handleLoginClick}/>}
    </div>
  )
}

export default Home;