import styles from './Shop.module.scss'
import Header from "../../components/Header/Header"
import HeaderMob from '../../components/HeaderMob/HeaderMob'
import Product from "../../components/Product/Product"
import Footer from "../../components/Footer/Footer"
import pudge from '../../assets/images/pudge.jpg'
import Form from '../../components/modals/Form/Form'
import { useState } from 'react'
import ak from '../../assets/images/prizes/ak.png'
import gun from '../../assets/images/prizes/gun.png'
import akRed from '../../assets/images/prizes/ak-red.png'
import akPink from '../../assets/images/prizes/ak-pink.png'
import gunPink from '../../assets/images/prizes/gun-pink.png'
import Offer from '../../components/modals/Offer/Offer'
import Bonus from '../../components/modals/Bonus/Bonus'
import Button from '../../components/Button/Button'
import arrow from '../../assets/images/icons/arrowup.svg'
import filter from '../../assets/images/icons/filter.svg'

const products = [
  {
    img: ak,
    name: 'FreeBet 5 S/',
    price: '10000 GG Points'
  },
  {
    img: gun,
    name: 'FreeBet 5 S/',
    price: 'Free'
  },
  {
    img: gun,
    name: 'FreeBet 5 S/',
    price: '20000 GG Points'
  },
  {
    img: akRed,
    name: 'FreeBet 5 S/',
    price: '50000 GG Points'
  },
  {
    img: akPink,
    name: 'FreeBet 5 S/',
    price: '10000 GG Points'
  },
  {
    img: gunPink,
    name: 'FreeBet 5 S/',
    price: '20000 GG Points'
  },
]

const Shop = () => {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <Header onLoginClick={handleLoginClick}
              onRegisterClick={handleRegisterClick}/>
      <HeaderMob onLoginClick={handleLoginClick}
                 onRegisterClick={handleRegisterClick}/>
      <div className={`${styles.container} container-main`}>
        <div className={styles.title}>
          <div>
            Магазин
          </div>

          <div className={styles.filter}>
            Фильтр товаров
            <img src={filter} alt="" /> 
          </div>
        </div>
        <div className={styles.wrapper}>
          {products.map((quest, index) => (
            <Product key={index}
              img={quest.img}
              name={quest.name}
              price={quest.price}
              onRegisterClick={handleRegisterClick}/>
          ))}
        </div>
        <div className={styles.more}>
          <Button title='Больше'
                  color='brown'/>
          
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
                           onBonusClick={handleBonusClick}/>
                          : showOffer ? <Offer closeForm={closeForm}
                                               onRegisterClick={handleRegisterClick}/> 
                          : showBonus ? <Bonus closeForm={closeForm}
                                               onRegisterClick={handleRegisterClick}/> : ''}
    </div>
  )
}

export default Shop