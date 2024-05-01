import styles from './Settings.module.scss'
import Header from "../../components/Header/Header"
import HeaderMob from "../../components/HeaderMob/HeaderMob"
import edit from '../../assets/images/icons/pencil.svg'
import exit from '../../assets/images/icons/exit.svg'
import defaultUserImg from '../../assets/images/defaultUser.svg'
import picture from '../../assets/images/icons/picture.svg'
import Footer from '../../components/Footer/Footer'
import Button from '../../components/Button/Button'
import { useDispatch } from 'react-redux'
import { logoutSuccess } from '../../slices/authSlice'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Settings = () => {
  const { t } = useTranslation('main')

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
              Редактировать Профиль
            </div>
            <div className={`${styles.edit} ${styles.exit}`}
              onClick={handleClose}>
              <img src={exit} alt="" />
              Выйти из Профиля
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
                  {t('phone')} <span>*</span>
                </div>
                <div className={styles.input}>
                  <input type="text"
                    placeholder={t('phone')}/>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.btns}>
          <div>
            <NavLink to='/profile'>
              <Button color="brown"
                title="Отмена" />
            </NavLink>
          </div>
          <div>
            <Button title="Сохранить" />
          </div>
        </div>
      </div>
      <Footer />

      {openModal ?
        <div className={styles.closeWrapper}>
          <div className={styles.closeModal}>
            <div>
              Вы уверены, что хотите выйти?
            </div>
            <div className={styles.btns}>
              <div onClick={cancel}>
                <Button title='Отмена'
                  color='brown' />
              </div>
              <div onClick={logout}>
                <Button title='Выйти' />
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