import Header from '../../components/Header/Header'
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import styles from './Quests.module.scss'
import pudge from '../../assets/images/pudge.jpg'
import Quest from '../../components/Quest/Quest'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react'
import Form from '../../components/modals/Form/Form'
import huskar from '../../assets/images/quests/huskar.png'
import chestGold from '../../assets/images/quests/chest-gold.png'
import chestBlue from '../../assets/images/quests/chest-blue.png'
import cs from '../../assets/images/quests/cs.png'
import clock from '../../assets/images/quests/clock.png'
import Offer from '../../components/modals/Offer/Offer'
import Bonus from '../../components/modals/Bonus/Bonus'
import Button from '../../components/Button/Button'
import arrow from '../../assets/images/icons/arrowup.svg'
import filter from '../../assets/images/icons/filter.svg'
import arrowDown from '../../assets/images/icons/arrow-down.svg'
import BackButton from '../../components/BackButton/BackButton'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

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
    img: chestGold,
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

  const { t } = useTranslation('main')

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const [isStatusOpen, setIsStatusOpen] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('')

  const toggleStatus= () => {
    setIsStatusOpen(!isStatusOpen);
  }

  const selectStatus = (filter) => {
    setSelectedStatus(filter);
    setIsStatusOpen(false);
  }

  
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState('')

  const toggleFilter= () => {
    setIsFilterOpen(!isFilterOpen);
  }

  const selectFilter = (filter) => {
    setSelectedFilter(filter);
    setIsFilterOpen(false);
  }

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/my_quests`,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      if (response.data) {
       console.log(response)
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick} />
      <HeaderMob onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick} />
      <div className={`${styles.container} container-main`}>
        <BackButton />
        <div className={styles.title}>
          {t('quests')}

          <div className={styles.filters}>
            <div className={`${styles.filter} ${styles.filterBlue}`}
                 onClick={toggleStatus}>
              Статус
              <img src={arrowDown} alt="" />

              {isStatusOpen &&
                <div className={styles.filterWrapper}>
                  <div className={`${styles.filterItem} ${selectedStatus === 'Активные' ? styles.selectedFilter : ''}`}
                    onClick={() => selectStatus('Активные')}>
                    Активные
                  </div>
                  <div className={`${styles.filterItem} ${selectedStatus === 'Скоро' ? styles.selectedFilter : ''}`}
                    onClick={() => selectStatus('Скоро')}>
                    Скоро
                  </div>
                  <div className={`${styles.filterItem} ${selectedStatus === 'Завершенные' ? styles.selectedFilter : ''}`}
                    onClick={() => selectStatus('Завершенные')}>
                    Завершенные
                  </div>
                </div>}
            </div>
            <div className={styles.filter}
                 onClick={toggleFilter}>
              Фильтр квестов
              <img src={filter} alt="" />

              {isFilterOpen &&
                <div className={styles.filterWrapper}>
                  <div className={`${styles.filterItem} ${selectedFilter === 'Все' ? styles.selectedFilter : ''}`}
                    onClick={() => selectFilter('Все')}>
                    Все
                  </div>
                  <div className={`${styles.filterItem} ${selectedFilter === 'Parimatch' ? styles.selectedFilter : ''}`}
                    onClick={() => selectFilter('Parimatch')}>
                    Parimatch
                  </div>
                  <div className={`${styles.filterItem} ${selectedFilter === 'Dota' ? styles.selectedFilter : ''}`}
                    onClick={() => selectFilter('Dota')}>
                    Dota
                  </div>
                  <div className={`${styles.filterItem} ${selectedFilter === 'Выполненные квесты' ? styles.selectedFilter : ''}`}
                    onClick={() => selectFilter('Выполненные квесты')}>
                    Выполненные квесты
                  </div>
                </div>}
            </div>
          </div>
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
              labels={quest.labels}
              onRegisterClick={handleRegisterClick} />
          ))}
        </div>
        <div className={styles.more}>
          <Button title='Больше'
            color='brown' />

          <div onClick={scrollToTop}
            className={styles.up}>
            <img src={arrow} alt="" />
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
        onBonusClick={handleBonusClick} />
        : showOffer ? <Offer closeForm={closeForm}
          onRegisterClick={handleRegisterClick} />
          : showBonus ? <Bonus closeForm={closeForm}
            onRegisterClick={handleRegisterClick} /> : ''}
    </div>
  )
}

export default Quests