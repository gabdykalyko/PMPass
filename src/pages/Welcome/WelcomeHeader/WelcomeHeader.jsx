import { useEffect, useState } from 'react';
import i18next from 'i18next'
import logo from '../../../assets/images/logo.svg'
import { NavLink } from 'react-router-dom'
import styles from './WelcomeHeader.module.scss'

const WelcomeHeader = () => {
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

  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <div>
          <img src={logo} alt="Parimatch" />
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
      </div>
    </div>
  )
}

export default WelcomeHeader