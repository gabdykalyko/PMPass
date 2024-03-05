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
          Магазин
        </div>
        <div className={styles.wrapper}>
          {products.map((quest, index) => (
            <Product key={index}
              img={quest.img}
              name={quest.name}
              price={quest.price} />
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

export default Shop