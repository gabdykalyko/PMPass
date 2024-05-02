import styles from './Header.module.scss'
import logo from '../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import i18next from 'i18next'
import defaultUserImg from '../../assets/images/defaultUser.svg'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Header = ({ onLoginClick, onRegisterClick }) => {
  const [isKazakh, setIsKazakh] = useState(false)

  const { t } = useTranslation('main')

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
  const user = useSelector(state => state.auth.user)

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
            <NavLink className={styles.hoverY}
                     to="/">
              {t('main')}
            </NavLink>
          </div>
          <div>
            <NavLink className={styles.hoverY}
                     to="/shop">
              {t('shop')}
            </NavLink>
          </div>
          <div>
            <NavLink className={styles.hoverY}
                     to="/quests">
              {t('quests')}
            </NavLink>
          </div>
          <div>
            <NavLink className={styles.hoverY}
                     to="/help">
              {t('help')}
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
              Points: {user.pm_points}
            </div>
            <div className={styles.line}>

            </div>
            <div className={styles.profile}>
              <div>
                <img className={styles.profileImg}
                  src={defaultUserImg} alt="" />
              </div>
              <div>
                <NavLink className={styles.hoverY}
                         to='/profile'>
                  Профиль
                </NavLink>
              </div>
            </div>
          </div> :
          <div className={styles.btns}>
            <div onClick={onLoginClick}>
              <Button title={t('enter')} />
            </div>
            {/* <div onClick={onRegisterClick}>
              <Button title={t('register')} />
            </div> */}
          </div>}
      </div>
    </div>
  )
}

export default Header;