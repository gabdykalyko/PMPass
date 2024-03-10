import styles from './Header.module.scss'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import i18next from 'i18next'
import defaultUserImg from '../../assets/images/defaultUser.svg'
import { useSelector } from 'react-redux'

const Header = ({ onLoginClick, onRegisterClick }) => {
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

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div>
          <NavLink to="/">
            <img src={logo} alt="Parimatch" />
          </NavLink>
        </div>

        <div className={styles.nav}>
          <div>
            <NavLink to="/">
              Главная
            </NavLink>
          </div>
          <div>
            <NavLink to="/shop">
              Магазин
            </NavLink>
          </div>
          <div>
            <NavLink to="/quests">
              Квесты
            </NavLink>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.lang}>
          <div className={`${isKazakh ? '' : styles.yellow} ${styles.langItem}`}
            onClick={setRussian}>
            RU
          </div>
          <div>
            |
          </div>
          <div className={`${isKazakh ? styles.yellow : ''} ${styles.langItem}`}
            onClick={setKazakh}>
            KZ
          </div>
        </div>
        {isAuthenticated ?
          <div className={styles.auth}>
            <div>
              Points: 10000
            </div>
            <div className={styles.line}>

            </div>
            <div className={styles.profile}>
              <div>
                <img className={styles.profileImg}
                     src={defaultUserImg} alt="" />
              </div>
              <div>
                <NavLink to='/profile'>
                  Профиль
                </NavLink>
              </div>
            </div>
          </div> :
          <div className={styles.btns}>
            <div onClick={onLoginClick}>
              <Button title="Вход"
                color="brown" />
            </div>
            <div onClick={onRegisterClick}>
              <Button title="Регистрация" />
            </div>
          </div>}
      </div>
    </div>
  )
}

export default Header;