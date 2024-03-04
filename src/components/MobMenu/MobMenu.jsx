import styles from './MobMenu.module.scss'
import logo from '../../assets/images/logo-mob.svg'
import close from '../../assets/images/icons/close-btn-mob.svg'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const MobMenu = ({ closeMenu,
                   onLoginClick,
                   onRegisterClick }) => {
  const [isKazakh, setIsKazakh] = useState(false)

  const setKazakh = () => {
    setIsKazakh(true)
  }

  const setRussian = () => {
    setIsKazakh(false)
  }

  const LoginBtnClick = () => {
    closeMenu()
    onLoginClick()
  }

  const RegisterBtnClick = () => {
    closeMenu()
    onRegisterClick()
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <NavLink to="/">
              <img src={logo} alt="Parimatch" />
            </NavLink>
          </div>

          <div className={styles.right}>
            <div className={styles.lang}>
              <div className={`${isKazakh ? '' : styles.yellow}`}
                onClick={setRussian}>
                RU
              </div>
              <div>
                |
              </div>
              <div className={`${isKazakh ? styles.yellow : ''}`}
                onClick={setKazakh}>
                KZ
              </div>
            </div>
            <div onClick={closeMenu}>
              <img src={close} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.menu}>
          <div className={styles.menuItem}>
            <NavLink to="/">
              Главная
            </NavLink>
          </div>

          <div className={styles.menuItem}>
            <NavLink to="/shop">
              Магазин
            </NavLink>
          </div>

          <div className={styles.menuItem}>
            <NavLink to="/quests">
              Квесты
            </NavLink>
          </div>
        </div>
      </div>

      <div className={styles.btns}>
        <div className={styles.btn}
             onClick={LoginBtnClick}>
          <Button color='brown'
            title='Вход' />
        </div>
        <div onClick={RegisterBtnClick}>
          <Button title='Регистрация'/>
        </div>
      </div>
    </div>
  )
}

export default MobMenu