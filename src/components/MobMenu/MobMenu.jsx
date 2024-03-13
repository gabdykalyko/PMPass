import styles from './MobMenu.module.scss'
import logo from '../../assets/images/logo-mob.svg'
import close from '../../assets/images/icons/close-btn-mob.svg'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import i18next from 'i18next'
import { useSelector } from 'react-redux'
import defaultUserImg from '../../assets/images/defaultUser.svg'

const MobMenu = ({ closeMenu,
  onLoginClick,
  onRegisterClick }) => {

  const [isKazakh, setIsKazakh] = useState(false)

  useEffect(() => {
    const currentLanguage = localStorage.getItem('language') || 'ru';

    if (currentLanguage === 'kz') {
      setIsKazakh(true);
    } else {
      setIsKazakh(false);
    }
  }, [])

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
  };

  const setKazakh = () => {
    changeLanguage('kz')
    localStorage.setItem('language', 'kz')
    setIsKazakh(true)
  }

  const setRussian = () => {
    changeLanguage('ru')
    localStorage.setItem('language', 'ru')
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

  const AllowScroll = () => {
    closeMenu()
    document.body.style.overflow = 'auto'
  }

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div onClick={AllowScroll}>
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

        {
          isAuthenticated ?
            <div className={styles.profile}>
              <div className={styles.info}>
                <img src={defaultUserImg} alt="" />
                <NavLink to='/profile'
                         onClick={AllowScroll}>
                  Профиль
                </NavLink>
              </div>
              <div className={styles.points}>
                Points: 10000
              </div>
            </div>
            :
            ''
        }

        <div className={styles.menu}>
          <div className={styles.menuItem}
            onClick={AllowScroll}>
            <NavLink to="/">
              Главная
            </NavLink>
          </div>

          <div className={styles.menuItem}
            onClick={AllowScroll}>
            <NavLink to="/shop">
              Магазин
            </NavLink>
          </div>

          <div className={styles.menuItem}
            onClick={AllowScroll}>
            <NavLink to="/quests">
              Квесты
            </NavLink>
          </div>
        </div>
      </div>

      {isAuthenticated ?
        '' :
        <div className={styles.btns}>
          <div className={styles.btn}
            onClick={LoginBtnClick}>
            <Button color='brown'
              title='Вход' />
          </div>
          <div onClick={RegisterBtnClick}>
            <Button title='Регистрация' />
          </div>
        </div>
      }
    </div>
  )
}

export default MobMenu