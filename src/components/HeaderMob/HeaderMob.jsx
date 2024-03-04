import styles from './HeaderMob.module.scss'
import logo from '../../assets/images/logo-mob.svg'
import burger from '../../assets/images/icons/burger-menu.svg'
import Button from '../Button/Button'
import { useState } from 'react'
import MobMenu from '../MobMenu/MobMenu'

const HeaderMob = ({ onLoginClick, onRegisterClick }) => {
  const [showMobMenu, setShowMobMenu] = useState(false)

  const showMenu = () => {
    document.body.style.overflow = 'hidden'
    setShowMobMenu(true)
  }

  const closeMenu = () => {
    document.body.style.overflow = 'auto'
    setShowMobMenu(false)
  }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="" />
      </div>

      <div className={styles.right}>
        <div onClick={onRegisterClick}>
          <Button title="Регистрация" />
        </div>
        <div onClick={showMenu}>
          <img src={burger} alt="" />
        </div>
      </div>
      {showMobMenu ? <MobMenu closeMenu={closeMenu}
                              onLoginClick={onLoginClick}
                              onRegisterClick={onRegisterClick}/> 
                   : ''}
    </div>
  )
}

export default HeaderMob