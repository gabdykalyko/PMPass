import styles from './HeaderMob.module.scss'
import logo from '../../assets/images/logo-mob.svg'
import burger from '../../assets/images/icons/burger-menu.svg'
import Button from '../Button/Button'
import { useState } from 'react'
import MobMenu from '../MobMenu/MobMenu'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const HeaderMob = ({ onLoginClick, onRegisterClick }) => {
  const [showMobMenu, setShowMobMenu] = useState(false)

  const { t } = useTranslation('main')

  const showMenu = () => {
    document.body.style.overflow = 'hidden'
    setShowMobMenu(true)
  }

  const closeMenu = () => {
    document.body.style.overflow = 'auto'
    setShowMobMenu(false)
  }

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  const user = useSelector(state => state.auth.user)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <NavLink to="/">
          <img src={logo} alt="Parimatch" />
        </NavLink>
      </div>

      <div className={styles.right}>
        {isAuthenticated ?
          <div className={styles.points}>
            Points: { user?.pm_points }
          </div>
          :
          <div onClick={onLoginClick}>
            <Button title={t('enter')} />
          </div>
        }
        <div onClick={showMenu}>
          <img src={burger} alt="" />
        </div>
      </div>
      {showMobMenu ? <MobMenu closeMenu={closeMenu}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick} />
        : ''}
    </div>
  )
}

export default HeaderMob