import Header from '../../components/Header/Header'
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import styles from './Quests.module.scss'
import pudge from '../../assets/images/pudge.jpg'
import Quest from '../../components/Quest/Quest'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import Form from '../../components/modals/Form/Form'
import huskar from '../../assets/images/quests/huskar.png'
import chestGold from '../../assets/images/quests/chest-gold.png'
import chestBlue from '../../assets/images/quests/chest-blue.png'
import cs from '../../assets/images/quests/cs.png'
import clock from '../../assets/images/quests/clock.png'
import Offer from '../../components/modals/Offer/Offer'
import Bonus from '../../components/modals/Bonus/Bonus'

const quests = [
  {
    img: huskar,
    chest: 'Сундук Аркана',
    status: 'Активен',
    price: 50,
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    labels: ['Parimatch', 'Dota 2'],
  },
  {
    img: chestGold,
    chest: 'Сундук Аркана',
    status: 'Скоро',
    price: 50000,
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    pm: 'Parimatch',
    labels: ['Parimatch', 'Dota 2']
  },
  {
    img: chestBlue,
    chest: 'Сундук Аркана',
    status: 'Завершён',
    price: 500,
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    pm: 'Parimatch',
    labels: ['Parimatch', 'Dota 2']
  },
  {
    img: cs,
    chest: 'Сундук Аркана',
    status: 'Активен',
    price: 5000,
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    labels: ['Parimatch', 'Dota 2'],
  },
  {
    img: clock,
    chest: 'Сундук Аркана',
    status: 'Скоро',
    price: 50000,
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    pm: 'Parimatch',
    labels: ['Parimatch', 'Dota 2']
  },
  {
    img: chestGold,
    chest: 'Сундук Аркана',
    status: 'Завершён',
    price: 50000,
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    pm: 'Parimatch',
    labels: ['Parimatch', 'Dota 2']
  }
]

const Quests = () => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(true)
  const [showHelp, setShowHelp] = useState(false)
  const [showOffer, setShowOffer] = useState(false)
  const [showBonus, setShowBonus] = useState(false)

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
        <div className={styles.title}>
          Квесты
        </div>
        <div className={styles.wrapper}>
          {quests.map((quest, index) => (
            <Quest key={index}
              img={quest.img}
              chest={quest.chest}
              status={quest.status}
              price={quest.price}
              name={quest.name}
              task={quest.task}
              labels={quest.labels} />
          ))}
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

export default Quests