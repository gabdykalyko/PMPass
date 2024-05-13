import styles from './Settings.module.scss'
import Header from "../../components/Header/Header"
import HeaderMob from "../../components/HeaderMob/HeaderMob"
import edit from '../../assets/images/icons/pencil.svg'
import defaultUserImg from '../../assets/images/defaultUser.svg'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { logoutSuccess } from '../../slices/authSlice'
import axios from 'axios'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Settings = () => {
  const { t } = useTranslation('main')

  const user = useSelector(state => state.auth.user)

  const dispatch = useDispatch()

  const [openModal, setOpenModal] = useState(false)

  const handleClose = () => {
    document.body.style.overflow = 'hidden'
    setOpenModal(!openModal)
  }

  const cancel = () => {
    document.body.style.overflow = 'auto'
    setOpenModal(!openModal)
  }

  const logout = async () => {
    document.body.style.overflow = 'auto'

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/logout`, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })

      if (response.data.status === 'success') {
        dispatch(logoutSuccess())
      }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <HeaderMob />
      <div className={`${styles.container} container-main`}>
        <div className={styles.title}>
          {t('settings')}
        </div>
        <div className={styles.main}>
          <div className={styles.left}>
            <div className={styles.edit}>
              <img src={edit} alt="" />
              {t('profile_settings')}
            </div>
            <div className={`${styles.edit} ${styles.exit}`}
              onClick={handleClose}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1692_11633" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_1692_11633)">
                  <path d="M5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H11C11.2833 3 11.5208 3.09583 11.7125 3.2875C11.9042 3.47917 12 3.71667 12 4C12 4.28333 11.9042 4.52083 11.7125 4.7125C11.5208 4.90417 11.2833 5 11 5H5V19H11C11.2833 19 11.5208 19.0958 11.7125 19.2875C11.9042 19.4792 12 19.7167 12 20C12 20.2833 11.9042 20.5208 11.7125 20.7125C11.5208 20.9042 11.2833 21 11 21H5ZM17.175 13H10C9.71667 13 9.47917 12.9042 9.2875 12.7125C9.09583 12.5208 9 12.2833 9 12C9 11.7167 9.09583 11.4792 9.2875 11.2875C9.47917 11.0958 9.71667 11 10 11H17.175L15.3 9.125C15.1167 8.94167 15.025 8.71667 15.025 8.45C15.025 8.18333 15.1167 7.95 15.3 7.75C15.4833 7.55 15.7167 7.44583 16 7.4375C16.2833 7.42917 16.525 7.525 16.725 7.725L20.3 11.3C20.5 11.5 20.6 11.7333 20.6 12C20.6 12.2667 20.5 12.5 20.3 12.7L16.725 16.275C16.525 16.475 16.2875 16.5708 16.0125 16.5625C15.7375 16.5542 15.5 16.45 15.3 16.25C15.1167 16.05 15.0292 15.8125 15.0375 15.5375C15.0458 15.2625 15.1417 15.0333 15.325 14.85L17.175 13Z" fill="#E0E0E0" />
                </g>
              </svg>

              {t('quit_from_profile')}
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.rightTitle}>
              Основная Информация
            </div>

            <div className={styles.profileImage}>
              <div>
                <img src={defaultUserImg} alt="" />
                {/* <img className={styles.picture}
                  src={picture} alt="" /> */}
              </div>
            </div>
            <div className={styles.rule}>
              JPEG или PNG до <span>1Мб</span>
            </div>

            <div className={styles.inputs}>

              <div className={styles.inputsItem}>
                <div className={styles.inputsTitle}>
                  {t('phone')} <span></span>
                </div>
                <div>
                  {user?.phone}
                </div>
                {/* <div className={styles.input}>
                  <input type="text"
                    placeholder={t('phone')}/>
                </div> */}
              </div>
            </div>

          </div>
        </div>

        {/* <div className={styles.btns}>
          <div>
            <NavLink to='/profile'>
              <Button color="brown"
                title="Отмена" />
            </NavLink>
          </div>
          <div>
            <Button title="Сохранить" />
          </div>
        </div> */}
      </div>
      <Footer />

      {openModal ?
        <div className={styles.closeWrapper}>
          <div className={styles.closeModal}>
            <div>
              {t('confirm_quite')}
            </div>
            <div className={styles.btns}>
              <div onClick={cancel}>
                <Button title={t('cancel')}
                  color='brown' />
              </div>
              <div onClick={logout}>
                <Button title={t('quit')} />
              </div>
            </div>
          </div>
        </div> :
        ''
      }
    </div>
  )
}

export default Settings