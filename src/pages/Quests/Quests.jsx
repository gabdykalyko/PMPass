import Header from '../../components/Header/Header'
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import styles from './Quests.module.scss'
import pudge from '../../assets/images/pudge.jpg'
import Quest from '../../components/Quest/Quest'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import Form from '../../components/modals/Form/Form'

const quests = [
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Активен',
    price: '10000 Points',
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    labels: ['Parimatch', 'Dota 2'],
  },
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Скоро',
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    pm: 'Parimatch',
    labels: ['Parimatch', 'Dota 2']
  },
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Завершён',
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    pm: 'Parimatch',
    labels: ['Parimatch', 'Dota 2']
  },
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Активен',
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    labels: ['Parimatch', 'Dota 2'],
  },
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Скоро',
    name: 'Становление Героя',
    task: 'Сделайте 3 депозита от 2000 до 4999 тг.',
    pm: 'Parimatch',
    labels: ['Parimatch', 'Dota 2']
  },
  {
    img: pudge,
    chest: 'Сундук Аркана',
    status: 'Завершён',
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

  const handleHelpClick = () => {
    setShowHelp(true)
  }

  const closeForm = () => {
    document.body.style.overflow = 'auto'
    setIsFormOpen(false)
    setShowHelp(false)
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
      {isFormOpen && <Form showLogin={showLogin}
                           closeForm={closeForm}
                           onLoginClick={handleLoginClick}
                           onRegisterClick={handleRegisterClick}
                           onHelpClick={handleHelpClick}
                           showHelp={showHelp}/>}
    </div>
  )
}

export default Quests