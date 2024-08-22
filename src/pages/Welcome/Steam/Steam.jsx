import { useState } from 'react'
import styles from './Steam.module.scss'
import arrowYellow from '../../../assets/images/icons/arrow-yellow.svg'
import arrowNext from '../../../assets/images/welcome/arrow-next-yellow.svg'
import steam from '../../../assets/images/icons/steam-btn.svg'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { updateAuth } from '../../../slices/authSlice'
import { useTranslation } from 'react-i18next'

const Steam = ({ onClickPrevious, setFirstPage }) => {
  const { t } = useTranslation(['main', 'welcome'])

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const skipSteam = async () => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/profile`, {
        "first_login": false
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })

      if (response.data) {
        dispatch(updateAuth({
          isAuthenticated: true,
          user: response.data
        }))

        setFirstPage()

        navigate('/')
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div onClick={onClickPrevious}
          className={styles.back}>
          <img src={arrowYellow} alt="" />
          {t('back')}
        </div>

        <div className={styles.steam}>
          <div className={styles.title}>
            Steam Login
          </div>

          <div className={styles.info}>
            {t('welcome:steam_text')}
          </div>

          <div className={styles.btns}>
            <div className={styles.btn}>
              <NavLink to={`${process.env.REACT_APP_API_URL}/auth/steam`}>
                <button>
                  <img src={steam} alt="" />
                  Steam login
                </button>
              </NavLink>
            </div>
          </div>

          <div className={styles.skipInfo}>
            {t('welcome:skip_step')}
          </div>
        </div>

        <div onClick={skipSteam}
          className={styles.skipBtn}>
          <button>
            {t('skip')}
            <img src={arrowNext} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Steam